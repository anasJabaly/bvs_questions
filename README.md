# Klausurtrainer

Eine kleine, frameworkfreie Webapp zum Üben mehrerer Studienmodule. Aktuell sind enthalten:

- **BVS2** mit Socket Programming, Web Services und Containerization
- **BWR** mit sechs Vorlesungsblöcken und Fragen aus den Unterlagen des Sommersemesters 2026

Die App unterstützt Einzel- und Mehrfachantworten, Kategorien, gemischte Gesamtquizze und separat gespeicherte Fortschritte je Modul und Themenblock.

## Lokal starten

Da die App nur aus HTML, CSS und JavaScript besteht, reicht ein einfacher lokaler Webserver:

```bash
python3 -m http.server 8000
```

Danach `http://localhost:8000` öffnen.

## Neues Modul ergänzen

1. Eine neue Fragendatei anlegen, zum Beispiel `mathe-questions.js`.
2. Die Datei in `index.html` vor `modules.js` einbinden.
3. Das Modul und seine Themenblöcke in `modules.js` registrieren.

Eine Frage hat dieses Format:

```js
{
  cat: "Kategorie",
  q: "Fragetext?",
  code: null,
  opts: ["Antwort A", "Antwort B", "Antwort C", "Antwort D"],
  ans: 1,
  exp: "Erklärung der richtigen Antwort",
  source: "Vorlesung 1"
}
```

Für mehrere richtige Antworten wird ein Array verwendet, zum Beispiel `ans: [0, 2]`.

## Test

```bash
node tests/smoke-test.js
```

Der Test prüft Modulauswahl, Quizstart, Feedback sowie Speichern und Fortsetzen.
