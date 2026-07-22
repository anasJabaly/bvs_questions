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
    getElementById(id) {
      return elements[id];
    },
  },
  localStorage: {
    getItem(key) { return storage.has(key) ? storage.get(key) : null; },
    setItem(key, value) { storage.set(key, String(value)); },
    removeItem(key) { storage.delete(key); },
  },
});

for (const file of ["questions.js", "bwr-questions.js", "dbii-questions.js", "cg-worksheets.js", "modules.js", "quiz.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, {filename: file});
}

assert.match(elements.app.innerHTML, /BVS2/);
assert.match(elements.app.innerHTML, /Betriebswirtschaft und Recht/);
assert.match(elements.app.innerHTML, /Computergrafik/);

// Computergrafik-Lernblatt: Blätter-Menü, Lernseite und Quiz prüfen
vm.runInContext("selectModule('cg')", context);
assert.equal(elements["header-tag"].textContent, "Computergrafik");
assert.match(elements.app.innerHTML, /Welches Aufgabenblatt/);
assert.match(elements.app.innerHTML, /Blatt 1/);

vm.runInContext("selectBlock('blatt1')", context);
assert.match(elements.app.innerHTML, /Formelsammlung zu Blatt 1/);
assert.match(elements.app.innerHTML, /Orthogonale Projektion/);
assert.match(elements.app.innerHTML, /Quiz zu Blatt 1 starten/);

vm.runInContext("startLessonQuiz()", context);
assert.match(elements.app.innerHTML, /Frage 1 \/ 12/);
vm.runInContext("showModuleMenu()", context);

vm.runInContext("selectModule('bwr')", context);
assert.equal(elements["header-tag"].textContent, "Betriebswirtschaft und Recht");
assert.match(elements.app.innerHTML, /Vorlesung 6/);

vm.runInContext("selectBlock('vl5')", context);
assert.match(elements.app.innerHTML, /11 Fragen ausgewählt/);
assert.match(elements.app.innerHTML, /Kostenrechnung/);

vm.runInContext("startQuiz()", context);
assert.match(elements.app.innerHTML, /Frage 1 \/ 11/);
vm.runInContext("pick(0); submitAnswer()", context);
assert.match(elements.app.innerHTML, /Quelle:/);

vm.runInContext("pauseToMenu(); selectBlock('vl5')", context);
assert.match(elements.app.innerHTML, /gespeicherten Fortschritt/);
assert.match(elements.app.innerHTML, /Fortsetzen/);

vm.runInContext("showModuleMenu(); selectModule('bvs2')", context);
assert.match(elements.app.innerHTML, /Socket Programming/);
assert.match(elements.app.innerHTML, /Ganzes Modul/);

// DBII-Modul: Blockauswahl, Fragen und Fehler-Review-Fluss prüfen
vm.runInContext("showModuleMenu(); selectModule('dbii')", context);
assert.match(elements["header-tag"].textContent, /Datenbanken II/);
assert.match(elements.app.innerHTML, /Erweitertes ERM/);
assert.match(elements.app.innerHTML, /NoSQL/);

vm.runInContext("selectBlock('b5')", context);
assert.match(elements.app.innerHTML, /Fragen ausgewählt/);
vm.runInContext("startQuiz()", context);
assert.match(elements.app.innerHTML, /✓ 0/);
assert.match(elements.app.innerHTML, /✗ 0/);
vm.runInContext("pick(0); submitAnswer()", context);
assert.match(elements.app.innerHTML, /Quelle:/);

console.log("Smoke-Test erfolgreich: Modulwahl (inkl. DBII), Quiz, Feedback, Live-Pills und Fortsetzen funktionieren.");
