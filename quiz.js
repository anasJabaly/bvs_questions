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
let wrongs = [];          // falsch beantwortete Fragen des aktuellen Laufs
let reviewMode = false;   // true, wenn gerade nur Fehler geübt werden

const SAVE_PREFIX = "study_quiz_progress_v2_";
const LEGACY_SAVE_PREFIX = "bvs2_quiz_progress_";
const STATS_KEY = "study_quiz_stats_v1";

// ── Ergebnis-Statistiken (bestes/letztes Ergebnis pro Themenblock) ──
function loadStats() {
  try {
    return JSON.parse(localStorage.getItem(STATS_KEY)) || {};
  } catch (error) {
    return {};
  }
}

function statsFor(moduleKey, blockKey) {
  return loadStats()[`${moduleKey}_${blockKey}`] || null;
}

function recordStats(moduleKey, blockKey, percentage) {
  try {
    const stats = loadStats();
    const key = `${moduleKey}_${blockKey}`;
    const entry = stats[key] || {best: 0, last: 0, attempts: 0};
    entry.last = percentage;
    entry.best = Math.max(entry.best, percentage);
    entry.attempts += 1;
    stats[key] = entry;
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch (error) {
    // Statistiken sind optional — App läuft auch ohne localStorage.
  }
}

function moduleStats(moduleKey) {
  const blockKeys = Object.keys(MODULES[moduleKey].blocks);
  const entries = blockKeys.map(blockKey => statsFor(moduleKey, blockKey)).filter(Boolean);
  if (entries.length === 0) return null;
  const avgBest = Math.round(entries.reduce((sum, entry) => sum + entry.best, 0) / entries.length);
  return {practiced: entries.length, total: blockKeys.length, avgBest};
}

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
      wrongs,
      reviewMode,
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

  if (module.kind === "worksheets") {
    const block = activeBlock ? module.blocks[activeBlock] : null;
    title.textContent = phase === "lesson" && block ? block.title : (module.menuLabel || "Lernblätter");
    subtitle.textContent = phase === "lesson" && block
      ? block.sub
      : (module.menuTitle || "Wähle ein Lernblatt aus");
    document.title = `${module.title} — ${block && phase === "lesson" ? block.title : (module.menuLabel || "Lernblätter")}`;
    return;
  }

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
    const isWorksheets = module.kind === "worksheets";
    const blockLabel = isWorksheets
      ? `${blockCount} ${blockCount === 1 ? "Blatt" : "Blätter"}`
      : `${blockCount} Themenblöcke`;
    const questionLabel = isWorksheets ? `${questionCount} Lernfragen` : `${questionCount} Fragen`;
    const stats = moduleStats(key);
    const statsLine = stats
      ? `<span class="module-stats"><span class="module-stats-bar"><span class="module-stats-fill" style="width:${stats.avgBest}%"></span></span>${stats.practiced}/${stats.total} ${isWorksheets ? "Blätter" : "Blöcke"} geübt · Ø Best ${stats.avgBest}%</span>`
      : "";
    return `
      <button type="button" class="module-card" onclick="selectModule('${key}')">
        <span class="module-icon" aria-hidden="true">${module.icon}</span>
        <span class="module-copy">
          <span class="module-title">${module.fullTitle}</span>
          <span class="module-sub">${module.description}</span>
          <span class="module-meta">${blockLabel} · ${questionLabel}</span>
          ${statsLine}
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
  const isWorksheets = module.kind === "worksheets";
  const cards = Object.entries(module.blocks).map(([key, block]) => {
    const count = block.questions.length;
    const hasContent = Boolean(block.content);
    const disabled = count === 0 && !hasContent;
    const stats = statsFor(activeModule, key);
    const statsLine = stats
      ? `<div class="bc-stats"><div class="bc-bar"><div class="bc-bar-fill ${stats.best >= 80 ? "good" : ""}" style="width:${stats.best}%"></div></div><span class="bc-best">Best ${stats.best}%</span></div>`
      : "";
    const countText = hasContent
      ? `Lernseite${count > 0 ? ` · ${count} Fragen` : ""}`
      : (count === 0 ? "kommt noch" : `${count} Fragen`);
    return `
      <button type="button" class="block-card ${disabled ? "disabled" : ""}"
        ${disabled ? "disabled" : `onclick="selectBlock('${key}')"`}>
        ${disabled ? '<span class="bc-badge">in Arbeit</span>' : ""}
        ${hasContent ? '<span class="bc-badge bc-ready">Lernblatt</span>' : ""}
        <div class="bc-title">${block.title}</div>
        <div class="bc-sub">${block.sub}</div>
        <span class="bc-count">${countText}</span>
        ${resumeTag(activeModule, key)}
        ${statsLine}
      </button>`;
  }).join("");
  const total = moduleQuestionCount(activeModule);
  const allCard = module.showAllQuiz === false ? "" : `
      <button type="button" class="block-card full-width" onclick="selectBlock('all')">
        <div class="bc-title">🎓 Ganzes Modul</div>
        <div class="bc-sub">Alle verfügbaren Themen gemischt</div>
        <span class="bc-count">${total} Fragen</span>
        ${resumeTag(activeModule, "all")}
      </button>`;

  app.innerHTML = `
    <button class="back-link module-back" onclick="showModuleMenu()">← Alle Module</button>
    ${isWorksheets ? `<div class="section-intro block-intro"><span class="eyebrow">${module.menuLabel || "Lernblätter"}</span><h2>${module.menuTitle || "Wähle ein Blatt aus"}</h2></div>` : ""}
    <div class="block-grid ${isWorksheets ? "worksheet-grid" : ""}">
      ${cards}
      ${allCard}
    </div>`;
}

function renderLesson(app) {
  const block = currentModule()?.blocks[activeBlock];
  if (!block || !block.content) {
    phase = "blockselect";
    render();
    return;
  }

  app.innerHTML = `
    <button class="back-link lesson-back" onclick="backToBlocks()">← Zurück zu den Blättern</button>
    ${block.content}`;
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
  const lessonResume = currentModule()?.kind === "worksheets" && currentModule()?.blocks[activeBlock]?.content;
  app.innerHTML = `
    <button class="back-link" onclick="${lessonResume ? "backToLesson()" : "backToBlocks()"}">← ${lessonResume ? "Zurück zum Lernblatt" : "Zurück zur Themenauswahl"}</button>
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
  const message = percentage === 100 ? "Perfekt! 🎉" : percentage >= 80 ? "Sehr gut!" : percentage >= 60 ? "Gut gemacht!" : "Nochmal üben!";
  const ringClass = percentage >= 80 ? "ring-good" : percentage >= 60 ? "" : "ring-bad";
  const wrongCount = wrongs.length;
  app.innerHTML = `
    <div class="score-wrap">
      <div class="score-ring ${ringClass}"><div class="score-pct">${percentage}%</div><div class="score-pct-label">${reviewMode ? "Fehler-Review" : "Score"}</div></div>
      <div class="score-title">${message}</div>
      <div class="score-sub">${score} von ${questions.length} Fragen richtig</div>
      <div class="score-grid">
        <div class="score-card"><div class="sc-label">Richtig</div><div class="sc-val sc-green">${score}</div></div>
        <div class="score-card"><div class="sc-label">Falsch</div><div class="sc-val sc-red">${questions.length - score}</div></div>
        <div class="score-card"><div class="sc-label">Gesamt</div><div class="sc-val">${questions.length}</div></div>
      </div>
      ${wrongCount > 0 ? `<button class="btn btn-review" onclick="startWrongQuiz()">🔁 Fehler üben (${wrongCount} Frage${wrongCount === 1 ? "" : "n"})</button>` : ""}
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

  const wrongSoFar = (answered ? idx + 1 : idx) - score;
  app.innerHTML = `
    <div class="quiz-topbar">
      <button class="back-link" onclick="pauseToMenu()">⏸ Pause · zur Themenauswahl</button>
      <div class="quiz-pills">
        ${reviewMode ? '<span class="pill pill-review">🔁 Fehler-Review</span>' : ""}
        <span class="pill pill-ok">✓ ${score}</span>
        <span class="pill pill-bad">✗ ${wrongSoFar}</span>
      </div>
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
  if (phase === "lesson") return renderLesson(app);
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

  const block = blockKey === "all" ? null : currentModule().blocks[blockKey];
  if (block?.content) {
    phase = "lesson";
  } else {
    phase = hasSavedFor(activeModule, blockKey) ? "resume" : "start";
  }
  render();
}

function startLessonQuiz() {
  const block = currentModule()?.blocks[activeBlock];
  if (!block || block.questions.length === 0) return;
  activePool = block.questions;
  activeCats = block.cats || ["All"];
  filterCat = "All";

  if (hasSavedFor(activeModule, activeBlock)) {
    phase = "resume";
    render();
    return;
  }
  startQuiz();
}

function backToLesson() {
  const block = currentModule()?.blocks[activeBlock];
  phase = block?.content ? "lesson" : "blockselect";
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
  wrongs = saved.wrongs || [];
  reviewMode = saved.reviewMode || false;
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
  wrongs = [];
  reviewMode = false;
  phase = "quiz";
  render();
}

function startWrongQuiz() {
  if (wrongs.length === 0) return;
  clearProgress(activeModule, activeBlock);
  questions = shuffle(wrongs).map(shuffleOpts);
  idx = 0;
  score = 0;
  sel = null;
  answered = false;
  wrongs = [];
  reviewMode = true;
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
  if (isCorrect()) {
    score++;
  } else {
    wrongs.push(question);
  }
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
    // Statistik nur für komplette Läufe (keine Kategorie-Filter, kein Fehler-Review)
    if (!reviewMode && filterCat === "All" && questions.length > 0) {
      recordStats(activeModule, activeBlock, Math.round(score / questions.length * 100));
    }
  } else {
    saveProgress();
  }
  render();
}

// ── Tastatursteuerung: 1–6 / A–F wählen, Enter prüft bzw. geht weiter ──
if (typeof document.addEventListener === "function") {
  document.addEventListener("keydown", event => {
    if (phase !== "quiz") return;
    const question = questions[idx];
    if (!question || event.ctrlKey || event.metaKey || event.altKey) return;

    const key = event.key.toLowerCase();
    const letters = ["a", "b", "c", "d", "e", "f"];

    if (event.key === "Enter") {
      event.preventDefault();
      if (answered) nextQuestion();
      else submitAnswer();
      return;
    }
    if (answered) return;

    let optionIndex = -1;
    if (/^[1-6]$/.test(key)) optionIndex = Number(key) - 1;
    else if (letters.includes(key)) optionIndex = letters.indexOf(key);
    if (optionIndex >= 0 && optionIndex < question.opts.length) pick(optionIndex);
  });
}

render();
