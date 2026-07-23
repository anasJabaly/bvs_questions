// Zentrale Modul-Konfiguration.
// Ein weiteres Studienmodul braucht nur eine eigene Fragendatei und einen
// zusätzlichen Eintrag in MODULES.
const MODULES = {
  cg: {
    title: "CG",
    fullTitle: "Computergrafik",
    description: "Aufgabenblätter und klausurorientierte Lernskripte zu allen Vorlesungskapiteln",
    icon: "△",
    kind: "collections",
    groupTitle: "Wie möchtest du Computergrafik wiederholen?",
    groups: {
      worksheets: {
        title: "Blätter",
        sub: "Praktikumsaufgaben ausführlich verstehen",
        icon: "✎",
        menuLabel: "Aufgabenblätter",
        menuTitle: "Welches Aufgabenblatt möchtest du wiederholen?",
        showAllQuiz: false,
        blocks: {
          blatt1: {
            title: "Blatt 1",
            sub: "OpenGL, Vektoren, Dreiecke & Projektion",
            questions: CG_SHEET_1_QUESTIONS,
            cats: ["All", "Framework", "OpenGL", "Animation", "Vektoren", "Dreiecksnormalen", "Winkel", "Dreieck", "Projektion"],
            content: CG_SHEET_1_CONTENT,
          },
          blatt2: {
            title: "Blatt 2",
            sub: "Orientierung, Linien, Würfel & Möbiusband",
            questions: CG_SHEET_2_QUESTIONS,
            cats: ["All", "Orientierung", "Culling", "Linienindizes", "Offener Würfel", "Möbiusband"],
            content: CG_SHEET_2_CONTENT,
          },
        },
      },
      lectures: {
        title: "Vorlesungen",
        sub: "Erklärungen, Herleitungen, Formeln & Klausurfokus",
        icon: "▤",
        menuLabel: "Vorlesungen",
        menuTitle: "Welches Vorlesungskapitel möchtest du verstehen?",
        showAllQuiz: false,
        blocks: CG_LECTURE_BLOCKS,
      },
    },
  },
  bvs2: {
    title: "BVS2",
    fullTitle: "BVS2 · Distributed Systems",
    description: "Verteilte Systeme, Web Services und Containerization",
    icon: "⌘",
    blocks: {
      block1: {
        title: "Block 1",
        sub: "Socket Programming",
        questions: BLOCK1,
        cats: ["All", "Sockets", "asyncio", "Distributed Systems", "Python"],
      },
      block2: {
        title: "Block 2",
        sub: "Web Services",
        questions: BLOCK2,
        cats: ["All", "Flask", "REST", "RPyC", "RPC & Architecture", "Sockets & asyncio"],
      },
      block3: {
        title: "Block 3",
        sub: "Containerization",
        questions: BLOCK3,
        cats: ["All", "Docker", "Distributed Systems", "REST"],
      },
    },
  },
  dbii: {
    title: "DBII",
    fullTitle: "Datenbanken II",
    description: "EERM, Objektrelational, Transaktionen, Trigger, Indexe und NoSQL",
    icon: "◈",
    blocks: {
      b1: {
        title: "Block 1",
        sub: "Erweitertes ERM",
        questions: DBII_B1,
        cats: ["All", "Schlüssel", "Beziehungstypen", "IS-A & Vererbung", "EERM-Konzepte", "Relationale Abbildung"],
      },
      b2: {
        title: "Block 2",
        sub: "Objektrelationale Erweiterungen",
        questions: DBII_B2,
        cats: ["All", "SQL:1999", "ROW & ARRAY", "UDTs", "Typed Tables & REF", "PostgreSQL"],
      },
      b3: {
        title: "Block 3",
        sub: "SQL für Data Science",
        questions: DBII_B3,
        cats: ["All", "Window Functions", "Frames", "Anwendung"],
      },
      b4: {
        title: "Block 4",
        sub: "DB-Anbindung & JDBC",
        questions: DBII_B4,
        cats: ["All", "JDBC-Grundlagen", "ResultSet", "Prepared Statements", "SQL Injection"],
      },
      b5: {
        title: "Block 5",
        sub: "Transaktionen",
        questions: DBII_B5,
        cats: ["All", "Anomalien", "Serialisierbarkeit", "Sperrverfahren", "Optimistische Synchronisation"],
      },
      b6: {
        title: "Block 6",
        sub: "Trigger & Integrität",
        questions: DBII_B6,
        cats: ["All", "Integritätsbedingungen", "Trigger-Grundlagen", "Ausführungsmodelle", "Triggerfallen"],
      },
      b7: {
        title: "Block 7",
        sub: "Zugriffspfade & Optimierung",
        questions: DBII_B7,
        cats: ["All", "Anfrageoptimierung", "Index-Grundlagen", "B-Bäume", "Spezialindexe"],
      },
      b8: {
        title: "Block 8",
        sub: "DB Tuning & NoSQL",
        questions: DBII_B8,
        cats: ["All", "Tuning", "NoSQL-Grundlagen", "Key-Value & Document", "Column & Graph"],
      },
    },
  },
  bwr: {
    title: "BWR",
    fullTitle: "Betriebswirtschaft und Recht",
    description: "Klausurskripte, Begriffslexikon, Formeln und E-Klausur-Fragen",
    icon: "€",
    kind: "collections",
    groupTitle: "Wie möchtest du BWR wiederholen?",
    groups: {
      lectures: {
        title: "Vorlesungen",
        sub: "Klausurorientierte Zusammenfassungen und Übungsfragen",
        icon: "▤",
        menuLabel: "BWR-Vorlesungen",
        menuTitle: "Welche Vorlesung möchtest du wiederholen?",
        showAllQuiz: true,
        blocks: {
          vl1: {
            title: "Vorlesung 1",
            sub: "Einführung in BWL und Entrepreneurship",
            questions: BWR_VL1,
            cats: ["All", "Wissenschaftssystem", "Ökonomisches Prinzip", "Güter", "Haushalte & Betriebe", "BWL & VWL", "Wertschöpfung", "Entrepreneurship"],
            content: BWR_VL1_CONTENT,
          },
          vl2: {
            title: "Vorlesung 2",
            sub: "Stakeholder, Ziele & Markt",
            questions: BWR_VL2,
            cats: ["All", "Stakeholder", "Unternehmensziele", "Markt", "Business Model"],
          },
          vl3: {
            title: "Vorlesung 3",
            sub: "Absatz, Produktion & Beschaffung",
            questions: BWR_VL3,
            cats: ["All", "Absatz", "Produktion", "Beschaffung", "Personal"],
          },
          vl4: {
            title: "Vorlesung 4",
            sub: "Personal, Organisation & Recht",
            questions: BWR_VL4,
            cats: ["All", "Personal", "Organisation", "Rechtsformen", "Steuern & IP"],
          },
          vl5: {
            title: "Vorlesung 5",
            sub: "Rechnungswesen",
            questions: BWR_VL5,
            cats: ["All", "Kostenrechnung", "Deckungsbeitrag", "Jahresabschluss"],
          },
          vl6: {
            title: "Vorlesung 6",
            sub: "Investition & Finanzierung",
            questions: BWR_VL6,
            cats: ["All", "Liquidität", "Investition", "Finanzierung"],
          },
        },
      },
      reference: {
        title: "Begriffe & Formeln",
        sub: "Definitionen, Unterscheidungen und Formelsammlung",
        icon: "ƒ",
        menuLabel: "BWR-Nachschlagewerk",
        menuTitle: "Welche Vorlesung möchtest du nachschlagen?",
        showAllQuiz: false,
        blocks: {
          vl1reference: {
            title: "Vorlesung 1",
            sub: "Alle Begriffe, Definitionen und Formeln",
            questions: [],
            cats: ["All"],
            content: BWR_VL1_REFERENCE_CONTENT,
          },
        },
      },
    },
  },
};
