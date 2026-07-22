# Klausurtrainer

Frameworkfreie Webapp zum Lernen und Üben mehrerer Studienmodule.

## Computergrafik

Das Computergrafik-Modul besitzt zwei Bereiche:

- **Blätter**: ausführliche Lernseiten zu Aufgabenblatt 1 und 2 mit Formelsammlungen und Quizfragen.
- **Vorlesungen**: klausurorientierte, scrollbare Lernskripte mit Erklärungen, Herleitungen, Formeln, Merksätzen und Selbsttests.

Enthalten sind die Kapitel:

1. Einführung
2. Mathe-Repetitorium
3. Polygonale Netze
4. Einführung in OpenGL
5. Transformationen
6. Projektionen
7. Rendering Pipeline
8. Shader
9. Beleuchtung
10. Texturen
11. Fortgeschrittene Texturierung
12. Gammakorrektur und Tonemapping
13. Raytracing und Path Tracing
14. BRDFs
15. Volume Rendering
16. Klausurinfo und Lernstrategie

Die hochgeladenen Screenshots der TH-Köln-Lernmodule sind bei Homeomorphie und Transformationen direkt in die Lernskripte eingebunden.

## Weitere Module

- BVS2
- BWR
- Datenbanken II

## Features

- scrollbare Lernseiten
- Einzel- und Mehrfachantworten
- Kategorien pro Kapitel
- gespeicherter Quizfortschritt
- bestes und letztes Ergebnis
- Fehler-Review
- Tastatursteuerung über `1`–`6`, `A`–`F` und `Enter`

## Lokal starten

```bash
python3 -m http.server 8000
```

Danach `http://localhost:8000` öffnen.

## Test

```bash
node smoke-test.js
```

oder:

```bash
node tests/smoke-test.js
```
