const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const elements = Object.fromEntries(
  ["app", "header-tag", "header-title", "header-subtitle"].map(id => [id, {innerHTML: "", textContent: ""}]),
);
const storage = new Map();
const context = vm.createContext({
  console,
  document: {
    title: "",
    getElementById(id) { return elements[id]; },
    addEventListener() {},
  },
  localStorage: {
    getItem(key) { return storage.has(key) ? storage.get(key) : null; },
    setItem(key, value) { storage.set(key, String(value)); },
    removeItem(key) { storage.delete(key); },
  },
  Set,
});

for (const file of [
  "questions.js",
  "bwr-questions.js",
  "bwr-lectures.js",
  "bwr-vl2-updates.js",
  "dbii-questions.js",
  "cg-worksheets.js",
  "cg-lectures.js",
  "modules.js",
  "quiz.js",
]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, {filename: file});
}

assert.match(elements.app.innerHTML, /BVS2/);
assert.match(elements.app.innerHTML, /Betriebswirtschaft und Recht/);
assert.match(elements.app.innerHTML, /Computergrafik/);
assert.match(elements.app.innerHTML, /2 Bereiche/);

// Computergrafik besitzt jetzt die Untermenüs Blätter und Vorlesungen.
vm.runInContext("selectModule('cg')", context);
assert.equal(elements["header-tag"].textContent, "Computergrafik");
assert.match(elements.app.innerHTML, /Blätter/);
assert.match(elements.app.innerHTML, /Vorlesungen/);

// Bestehende Aufgabenblätter funktionieren weiterhin.
vm.runInContext("selectGroup('worksheets')", context);
assert.match(elements.app.innerHTML, /Welches Aufgabenblatt/);
assert.match(elements.app.innerHTML, /Blatt 1/);
assert.match(elements.app.innerHTML, /Blatt 2/);
vm.runInContext("selectBlock('blatt1')", context);
assert.match(elements.app.innerHTML, /Formelsammlung zu Blatt 1/);
assert.match(elements.app.innerHTML, /Orthogonale Projektion/);
vm.runInContext("startLessonQuiz()", context);
assert.match(elements.app.innerHTML, /Frage 1 \/ 12/);

// Vorlesungsmenü, scrollbares Lernskript und Quiz testen.
vm.runInContext("backToLesson(); backToBlocks(); backToGroups(); selectGroup('lectures')", context);
assert.match(elements.app.innerHTML, /Mathe-Repetitorium/);
assert.match(elements.app.innerHTML, /Transformationen/);
assert.match(elements.app.innerHTML, /Volume Rendering/);
assert.match(elements.app.innerHTML, /Klausurinfo/);
vm.runInContext("selectBlock('vl02')", context);
assert.match(elements.app.innerHTML, /Herleitung der orthogonalen Projektion/);
assert.match(elements.app.innerHTML, /lecture-study-chat/);
assert.match(elements.app.innerHTML, /Quiz zu Vorlesung 02 starten/);
vm.runInContext("startLessonQuiz()", context);
assert.match(elements.app.innerHTML, /Frage 1 \/ 5/);

vm.runInContext("backToLesson(); backToBlocks(); selectBlock('vl05')", context);
assert.match(elements.app.innerHTML, /Transformation von Normalen/);
assert.match(elements.app.innerHTML, /cg-transformations-quiz-1.png/);
vm.runInContext("backToBlocks(); selectBlock('vl06')", context);
assert.match(elements.app.innerHTML, /perspektivische Division/);
assert.match(elements.app.innerHTML, /Near, Far und Tiefengenauigkeit/);

// BWR besitzt jetzt Vorlesungsskripte, einen Begriffe-&-Formeln-Bereich und neue Klausurfragetypen.
vm.runInContext("showModuleMenu(); selectModule('bwr')", context);
assert.equal(elements["header-tag"].textContent, "Betriebswirtschaft und Recht");
assert.match(elements.app.innerHTML, /Vorlesungen/);
assert.match(elements.app.innerHTML, /Begriffe &amp; Formeln|Begriffe & Formeln/);
assert.ok(vm.runInContext("BWR_VL1.length >= 40", context));
assert.ok(vm.runInContext("BWR_VL1.some(q => q.type === 'fill')", context));
assert.ok(vm.runInContext("BWR_VL1.some(q => q.type === 'match')", context));

vm.runInContext("selectGroup('lectures'); selectBlock('vl1')", context);
assert.match(elements.app.innerHTML, /Einführung in BWL und Entrepreneurship/);
assert.match(elements.app.innerHTML, /Wertschöpfung/);
assert.match(elements.app.innerHTML, /Klausurfragen zu Vorlesung 1 starten/);
vm.runInContext("startLessonQuiz()", context);
assert.match(elements.app.innerHTML, /Frage 1 \/ [4-9][0-9]/);

vm.runInContext("backToLesson(); backToBlocks(); backToGroups(); selectGroup('reference'); selectBlock('vl1reference')", context);
assert.match(elements.app.innerHTML, /Klausurlexikon und Formelsammlung/);
assert.match(elements.app.innerHTML, /Wirtschaftlichkeit/);
assert.match(elements.app.innerHTML, /Homo oeconomicus/);

// Lückentext korrekt beantworten.
vm.runInContext(`
  activeModule = 'bwr'; activeGroup = 'lectures'; activeBlock = 'vl1';
  questions = [shuffleOpts(BWR_VL1.find(q => q.type === 'fill'))];
  idx = 0; score = 0; answered = false; phase = 'quiz'; sel = questions[0].answers[0];
  submitAnswer();
`, context);
assert.equal(vm.runInContext("score", context), 1);
assert.match(elements.app.innerHTML, /Richtig/);

// Drag-&-Drop-Zuordnung vorbereiten, per Klick zuweisen und vollständig korrekt prüfen.
vm.runInContext(`
  questions = [shuffleOpts(BWR_VL1.find(q => q.type === 'match'))];
  idx = 0; score = 0; answered = false; phase = 'quiz'; sel = null; matchChoice = null;
  render();
  selectMatchOption(questions[0].ans[0]);
  matchTargetClick(0);
`, context);
assert.equal(vm.runInContext("sel[0]", context), vm.runInContext("questions[0].ans[0]", context));
vm.runInContext("sel = [...questions[0].ans]; submitAnswer();", context);
assert.equal(vm.runInContext("score", context), 1);
assert.match(elements.app.innerHTML, /match-correct/);

vm.runInContext("showModuleMenu(); selectModule('bvs2')", context);
assert.match(elements.app.innerHTML, /Socket Programming/);
assert.match(elements.app.innerHTML, /Ganzes Modul/);

vm.runInContext("showModuleMenu(); selectModule('dbii')", context);
assert.match(elements["header-tag"].textContent, /Datenbanken II/);
assert.match(elements.app.innerHTML, /Erweitertes ERM/);
assert.match(elements.app.innerHTML, /NoSQL/);

console.log("Smoke-Test erfolgreich: CG-Lernbereiche, BWR-Vorlesung 1, Lexikon, neue Fragetypen und bestehende Module funktionieren.");
