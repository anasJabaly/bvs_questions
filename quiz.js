// Generische Quiz-App: Modul -> Themenblock -> Kategorie -> Quiz

function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function shuffleOpts(question) {
  const order = shuffle(question.opts.map((_, index) => index));
  const opts = order.map(index => question.opts[index]);
  if (Array.isArray(question.ans)) {
    const ans = question.ans.map(answer => order.indexOf(answer)).sort((a, b) => a - b);
    return {...question, opts, ans, multi: true};
  }
  return {...question, opts, ans: order.indexOf(question.ans)};
}

let activeModule = null;
let activeBlock = null;
let activePool = [];
let activeCats = ["All"];
let questions = [];
let idx = 0;
let score = 0;
let sel = null;
let answered = false;
let phase = "moduleselect";
let filterCat = "All";

const SAVE_PREFIX = "study_quiz_progress_v2_";
const LEGACY_SAVE_PREFIX = "bvs2_quiz_progress_";

function saveKey(moduleKey, blockKey) {
  return `${SAVE_PREFIX}${moduleKey}_${blockKey}`;
}

function saveProgress() {
  if (phase !== "quiz" || !activeModule || !activeBlock) return;
  try {
    const data = {
      activeModule,
      activeBlock,
      filterCat,
      questions,
      idx,
      score,
      sel,
      answered,
    };
    localStorage.setItem(saveKey(activeModule, activeBlock), JSON.stringify(data));
  } catch (error) {
    // Die App funktioniert auch, wenn localStorage nicht verfügbar ist.
  }
}

function loadProgress(moduleKey, blockKey) {
  try {
    let raw = localStorage.getItem(saveKey(moduleKey, blockKey));

    // Vorhandene BVS2-Speicherstände aus der alten App weiterverwenden.
    if (!raw && moduleKey === "bvs2") {
      raw = localStorage.getItem(LEGACY_SAVE_PREFIX + blockKey);
    }

    if (!raw) return null;
    const data = JSON.parse(raw);
    return {...data, activeModule: data.activeModule || moduleKey};
  } catch (error) {
    return null;
  }
}

function clearProgress(moduleKey, blockKey) {
  if (!moduleKey || !blockKey) return;
  try {
    localStorage.removeItem(saveKey(moduleKey, blockKey));
    if (moduleKey === "bvs2") {
      localStorage.removeItem(LEGACY_SAVE_PREFIX + blockKey);
    }
  } catch (error) {
    // Kein Abbruch, wenn localStorage gesperrt ist.
  }
}

function hasSavedFor(moduleKey, blockKey) {
  const saved = loadProgress(moduleKey, blockKey);
  return Boolean(saved && saved.idx < (saved.questions?.length || 0));
}

function currentModule() {
  return activeModule ? MODULES[activeModule] : null;
}

function moduleQuestionCount(moduleKey) {
  return Object.values(MODULES[moduleKey].blocks)
    .reduce((sum, block) => sum + block.questions.length, 0);
}

function poolForBlock(moduleKey, blockKey) {
  const module = MODULES[moduleKey];
  if (blockKey === "all") {
    return Object.values(module.blocks).flatMap(block => block.questions);
  }
  return module.blocks[blockKey]?.questions || [];
}

function updateHeader() {
  const tag = document.getElementById("header-tag");
  const title = document.getElementById("header-title");
  const subtitle = document.getElementById("header-subtitle");
  const module = currentModule();

  if (!module || phase === "moduleselect") {
    tag.textContent = "Study Quiz";
    title.textContent = "Klausurtrainer";
    subtitle.textContent = "Wähle ein Modul und starte dein Quiz";
    document.title = "Klausurtrainer";
    return;
  }

  tag.textContent = module.fullTitle;
  title.textContent = "Klausur Quiz";
  subtitle.textContent = "Wähle einen Themenblock oder übe das ganze Modul";
  document.title = `${module.title} — Klausur Quiz`;
}

function resumeTag(moduleKey, blockKey) {
  if (!hasSavedFor(moduleKey, blockKey)) return "";
  const saved = loadProgress(moduleKey, blockKey);
  return `<span class="bc-resume">▶ Frage ${saved.idx + 1}/${saved.questions.length}</span>`;
}

function renderModuleSelect(app) {
  const cards = Object.entries(MODULES).map(([key, module]) => {
    const blockCount = Object.keys(module.blocks).length;
    const questionCount = moduleQuestionCount(key);
    return `
      <button type="button" class="module-card" onclick="selectModule('${key}')">
        <span class="module-icon" aria-hidden="true">${module.icon}</span>
        <span class="module-copy">
          <span class="module-title">${module.fullTitle}</span>
          <span class="module-sub">${module.description}</span>
          <span class="module-meta">${blockCount} Themenblöcke · ${questionCount} Fragen</span>
        </span>
        <span class="module-arrow" aria-hidden="true">→</span>
      </button>`;
  }).join("");

  app.innerHTML = `
    <div class="section-intro">
      <span class="eyebrow">Deine Module</span>
      <h2>Was möchtest du heute üben?</h2>
    </div>
    <div class="module-grid">${cards}</div>`;
}

function renderBlockSelect(app) {
  const module = currentModule();
  const cards = Object.entries(module.blocks).map(([key, block]) => {
    const count = block.questions.length;
    return `
      <button type="button" class="block-card ${count === 0 ? "disabled" : ""}"
        ${count === 0 ? "disabled" : `onclick="selectBlock('${key}')"`}>
        ${count === 0 ? '<span class="bc-badge">in Arbeit</span>' : ""}
        <div class="bc-title">${block.title}</div>
        <div class="bc-sub">${block.sub}</div>
        <span class="bc-count">${count === 0 ? "kommt noch" : `${count} Fragen`}</span>
        ${resumeTag(activeModule, key)}
      </button>`;
  }).join("");
  const total = moduleQuestionCount(activeModule);

  app.innerHTML = `
    <button class="back-link module-back" onclick="showModuleMenu()">← Alle Module</button>
    <div class="block-grid">
      ${cards}
      <button type="button" class="block-card full-width" onclick="selectBlock('all')">
        <div class="bc-title">🎓 Ganzes Modul</div>
        <div class="bc-sub">Alle verfügbaren Themen gemischt</div>
        <span class="bc-count">${total} Fragen</span>
        ${resumeTag(activeModule, "all")}
      </button>
    </div>`;
}

function renderResume(app) {
  const saved = loadProgress(activeModule, activeBlock);
  if (!saved) {
    phase = "start";
    render();
    return;
  }
  const module = currentModule();
  const title = activeBlock === "all" ? "Ganzes Modul" : module.blocks[activeBlock].title;
  app.innerHTML = `
    <button class="back-link" onclick="backToBlocks()">← Zurück zur Themenauswahl</button>
    <div class="resume-card">
      <div class="resume-title">${title}</div>
      <div class="resume-sub">Du hast einen gespeicherten Fortschritt:<br>
        <strong>Frage ${saved.idx + 1} von ${saved.questions.length}</strong> · ${saved.score} richtig bisher
      </div>
      <div class="action-row resume-actions">
        <button class="btn" onclick="restartBlock()">Neu starten</button>
        <button class="btn btn-accent" onclick="resumeBlock()">Fortsetzen →</button>
      </div>
    </div>`;
}

function renderStart(app) {
  if (activePool.length === 0) {
    app.innerHTML = `
      <button class="back-link" onclick="backToBlocks()">← Zurück zur Themenauswahl</button>
      <div class="empty-note">Für dieses Thema sind noch keine Fragen vorhanden.</div>`;
    return;
  }

  const count = filterCat === "All"
    ? activePool.length
    : activePool.filter(question => question.cat === filterCat).length;

  app.innerHTML = `
    <button class="back-link" onclick="backToBlocks()">← Zurück zur Themenauswahl</button>
    <div class="cat-filter">
      ${activeCats.map(cat => `<button class="cat-btn${filterCat === cat ? " active" : ""}" onclick="setFilter('${cat.replace(/'/g, "\\'")}')">${cat}</button>`).join("")}
    </div>
    <p class="start-count">${count} Fragen ausgewählt</p>
    <button class="start-btn" ${count === 0 ? "disabled" : ""} onclick="startQuiz()">Quiz starten →</button>`;
}

function renderDone(app) {
  const percentage = Math.round(score / questions.length * 100);
  const message = percentage >= 80 ? "Sehr gut!" : percentage >= 60 ? "Gut gemacht!" : "Nochmal üben!";
  app.innerHTML = `
    <div class="score-wrap">
      <div class="score-ring"><div class="score-pct">${percentage}%</div><div class="score-pct-label">Score</div></div>
      <div class="score-title">${message}</div>
      <div class="score-sub">${score} von ${questions.length} Fragen richtig</div>
      <div class="score-grid">
        <div class="score-card"><div class="sc-label">Richtig</div><div class="sc-val sc-green">${score}</div></div>
        <div class="score-card"><div class="sc-label">Falsch</div><div class="sc-val sc-red">${questions.length - score}</div></div>
        <div class="score-card"><div class="sc-label">Gesamt</div><div class="sc-val">${questions.length}</div></div>
      </div>
      <div class="action-row">
        <button class="btn" onclick="backToBlocks()">Themen wechseln</button>
        <button class="btn btn-accent" onclick="startQuiz()">Nochmal</button>
      </div>
    </div>`;
}

function renderQuestion(app) {
  const question = questions[idx];
  const percentage = (idx / questions.length * 100).toFixed(1);
  const keys = ["A", "B", "C", "D", "E", "F"];
  const isMulti = question.multi === true;
  const selected = Array.isArray(sel) ? sel : (sel === null ? [] : [sel]);

  app.innerHTML = `
    <div class="quiz-topbar">
      <button class="back-link" onclick="pauseToMenu()">⏸ Pause · zur Themenauswahl</button>
    </div>
    <div class="progress-wrap">
      <div class="progress-row"><span>Frage ${idx + 1} / ${questions.length}</span><span class="q-cat">${question.cat}</span></div>
      <div class="progress-track"><div class="progress-fill" style="width:${percentage}%"></div></div>
    </div>
    <div class="q-card">
      <div class="q-text">${question.q}</div>
      ${question.code ? `<div class="code-block">${question.code}</div>` : ""}
      ${isMulti ? '<div class="multi-note">Mehrere Antworten richtig — wähle alle zutreffenden aus</div>' : ""}
      ${question.opts.map((option, optionIndex) => {
        let classes = "option-btn";
        if (answered) {
          const correct = isMulti ? question.ans.includes(optionIndex) : optionIndex === question.ans;
          const chosen = selected.includes(optionIndex);
          if (correct) classes += " correct";
          else if (chosen) classes += " wrong";
        } else if (selected.includes(optionIndex)) {
          classes += " selected";
        }
        const mark = isMulti
          ? `<span class="cb">${selected.includes(optionIndex) ? "☑" : "☐"}</span>`
          : `<span class="option-key">${keys[optionIndex]}</span>`;
        return `<button class="${classes}" ${answered ? "disabled" : ""} onclick="pick(${optionIndex})">${mark}<span>${option}</span></button>`;
      }).join("")}
    </div>
    ${answered ? `
      <div class="feedback ${isCorrect() ? "ok" : "bad"}">
        <div>${isCorrect() ? "✓ Richtig" : "✗ Falsch"} — ${question.exp}</div>
        ${question.source ? `<div class="source-note">Quelle: ${question.source}</div>` : ""}
      </div>` : ""}
    <div class="action-row">
      ${!answered ? '<button class="btn btn-accent" onclick="submitAnswer()">Antwort prüfen</button>' : ""}
      ${answered ? `<button class="btn btn-accent" onclick="nextQuestion()">${idx + 1 < questions.length ? "Nächste Frage →" : "Ergebnis anzeigen"}</button>` : ""}
    </div>`;
}

function render() {
  const app = document.getElementById("app");
  updateHeader();

  if (phase === "moduleselect") return renderModuleSelect(app);
  if (phase === "blockselect") return renderBlockSelect(app);
  if (phase === "resume") return renderResume(app);
  if (phase === "start") return renderStart(app);
  if (phase === "done") return renderDone(app);
  return renderQuestion(app);
}

function selectModule(moduleKey) {
  activeModule = moduleKey;
  activeBlock = null;
  filterCat = "All";
  phase = "blockselect";
  render();
}

function showModuleMenu() {
  activeModule = null;
  activeBlock = null;
  filterCat = "All";
  phase = "moduleselect";
  render();
}

function backToBlocks() {
  activeBlock = null;
  filterCat = "All";
  phase = "blockselect";
  render();
}

function selectBlock(blockKey) {
  activeBlock = blockKey;
  activePool = poolForBlock(activeModule, blockKey);
  activeCats = blockKey === "all"
    ? ["All"]
    : currentModule().blocks[blockKey].cats;
  filterCat = "All";
  phase = hasSavedFor(activeModule, blockKey) ? "resume" : "start";
  render();
}

function resumeBlock() {
  const saved = loadProgress(activeModule, activeBlock);
  if (!saved) {
    phase = "start";
    render();
    return;
  }

  activeModule = saved.activeModule;
  activeBlock = saved.activeBlock;
  activePool = poolForBlock(activeModule, activeBlock);
  activeCats = activeBlock === "all" ? ["All"] : currentModule().blocks[activeBlock].cats;
  filterCat = saved.filterCat || "All";
  questions = saved.questions;
  idx = saved.idx;
  score = saved.score;
  sel = saved.sel;
  answered = saved.answered;
  phase = "quiz";
  render();
}

function restartBlock() {
  clearProgress(activeModule, activeBlock);
  phase = "start";
  render();
}

function pauseToMenu() {
  saveProgress();
  filterCat = "All";
  phase = "blockselect";
  render();
}

function setFilter(category) {
  filterCat = category;
  render();
}

function getQuestions() {
  const pool = filterCat === "All"
    ? activePool
    : activePool.filter(question => question.cat === filterCat);
  return shuffle(pool).map(shuffleOpts);
}

function startQuiz() {
  clearProgress(activeModule, activeBlock);
  questions = getQuestions();
  idx = 0;
  score = 0;
  sel = null;
  answered = false;
  phase = "quiz";
  render();
}

function pick(optionIndex) {
  if (answered) return;
  const question = questions[idx];
  if (question.multi) {
    if (!Array.isArray(sel)) sel = [];
    sel = sel.includes(optionIndex)
      ? sel.filter(value => value !== optionIndex)
      : [...sel, optionIndex];
  } else {
    sel = optionIndex;
  }
  render();
}

function isCorrect() {
  const question = questions[idx];
  if (question.multi) {
    if (!Array.isArray(sel)) return false;
    const answer = [...question.ans].sort((a, b) => a - b);
    const selected = [...sel].sort((a, b) => a - b);
    return answer.length === selected.length && answer.every((value, index) => value === selected[index]);
  }
  return sel === question.ans;
}

function submitAnswer() {
  const question = questions[idx];
  if (question.multi) {
    if (!Array.isArray(sel) || sel.length === 0) return;
  } else if (sel === null) {
    return;
  }

  answered = true;
  if (isCorrect()) score++;
  saveProgress();
  render();
}

function nextQuestion() {
  idx++;
  sel = null;
  answered = false;
  if (idx >= questions.length) {
    phase = "done";
    clearProgress(activeModule, activeBlock);
  } else {
    saveProgress();
  }
  render();
}

render();
