// Zentrale Modul-Konfiguration.
// Ein weiteres Studienmodul braucht nur eine eigene Fragendatei und einen
// zusätzlichen Eintrag in MODULES.
const MODULES = {
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
  bwr: {
    title: "BWR",
    fullTitle: "Betriebswirtschaft und Recht",
    description: "BWL, Entrepreneurship, Recht und Rechnungswesen",
    icon: "€",
    blocks: {
      vl1: {
        title: "Vorlesung 1",
        sub: "BWL & Entrepreneurship",
        questions: BWR_VL1,
        cats: ["All", "BWL-Grundlagen", "Ökonomisches Prinzip", "Entrepreneurship"],
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
};
