const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname);
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

// Andere Module bleiben erreichbar.
vm.runInContext("showModuleMenu(); selectModule('bwr')", context);
assert.equal(elements["header-tag"].textContent, "Betriebswirtschaft und Recht");
assert.match(elements.app.innerHTML, /Vorlesung 6/);
vm.runInContext("selectBlock('vl5')", context);
assert.match(elements.app.innerHTML, /11 Fragen ausgewählt/);
vm.runInContext("startQuiz()", context);
assert.match(elements.app.innerHTML, /Frage 1 \/ 11/);

vm.runInContext("showModuleMenu(); selectModule('bvs2')", context);
assert.match(elements.app.innerHTML, /Socket Programming/);
assert.match(elements.app.innerHTML, /Ganzes Modul/);

vm.runInContext("showModuleMenu(); selectModule('dbii')", context);
assert.match(elements["header-tag"].textContent, /Datenbanken II/);
assert.match(elements.app.innerHTML, /Erweitertes ERM/);
assert.match(elements.app.innerHTML, /NoSQL/);

console.log("Smoke-Test erfolgreich: CG-Untermenüs, Lernskripte, Quiz und bestehende Module funktionieren.");
