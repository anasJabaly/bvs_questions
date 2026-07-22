# Klausurtrainer

Eine kleine, frameworkfreie Webapp zum Lernen und Üben mehrerer Studienmodule. Aktuell sind enthalten:

- **Computergrafik** mit ausführlichen Lernblättern, Formelsammlungen und passenden Quizfragen (aktuell Blatt 1)
- **BVS2** mit Socket Programming, Web Services und Containerization
- **BWR** mit sechs Vorlesungsblöcken und Fragen aus den Unterlagen des Sommersemesters 2026
- **DBII** (Datenbanken II) mit acht Themenblöcken und über 100 Fragen aus den Vorlesungsfolien 1–12 des Sommersemesters 2026: Erweitertes ERM, Objektrelationale Erweiterungen, SQL für Data Science, JDBC, Transaktionen, Trigger, Zugriffspfade sowie DB Tuning und NoSQL

Die App unterstützt ausführliche Lernseiten, Einzel- und Mehrfachantworten, Kategorien, gemischte Gesamtquizze und separat gespeicherte Fortschritte je Modul und Themenblock.

### Weitere Features

- **Ergebnis-Statistiken**: Pro Themenblock werden bestes und letztes Ergebnis gespeichert und als Fortschrittsbalken auf den Modul- und Blockkarten angezeigt.
- **Fehler-Review**: Nach einem Durchlauf lassen sich per Klick nur die falsch beantworteten Fragen erneut üben.
- **Live-Zähler**: Während des Quiz zeigen Pills in der Kopfzeile den aktuellen Stand (richtig / falsch).
- **Tastatursteuerung**: Antworten mit den Tasten `1`–`6` bzw. `A`–`F` auswählen, mit `Enter` prüfen und weiterblättern.

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

Für ein Lernblatt kann ein Block zusätzlich ein HTML-Feld `content` erhalten. Dann öffnet die Blockkarte zuerst die Lernseite; ein Quiz kann weiterhin über das zugehörige `questions`-Array gestartet werden.

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
