// BWR-LERNSKRIPTE
// Inhaltlich aufgebaut aus "BWR Vorlesung 1" und den Musterlösungen zu VL 1 (SoSe 2026).

const BWR_VL1_CONTENT = `
<div class="lesson-page lecture-page bwr-page">
  <section class="lesson-hero lecture-hero">
    <div>
      <span class="lesson-kicker">BWR · Vorlesung 1 · Klausurskript</span>
      <h2>Einführung in BWL und Entrepreneurship</h2>
      <p>Eine klausurorientierte Zusammenfassung der wichtigsten Inhalte aus Vorlesung 1: ökonomisches Prinzip, Güter, Haushalte und Betriebe, BWL und VWL, Wertschöpfung sowie Entrepreneurship.</p>
    </div>
    <div class="lesson-badge">VL 1</div>
  </section>

  <nav class="lesson-toc" aria-label="Inhaltsverzeichnis Vorlesung 1">
    <a href="#bwr-vl1-fokus">Klausurfokus</a>
    <a href="#bwr-vl1-oekonomie">Ökonomisches Prinzip</a>
    <a href="#bwr-vl1-gueter">Güter</a>
    <a href="#bwr-vl1-betriebe">Haushalte & Betriebe</a>
    <a href="#bwr-vl1-bwlvwl">BWL & VWL</a>
    <a href="#bwr-vl1-wertschoepfung">Wertschöpfung</a>
    <a href="#bwr-vl1-entrepreneurship">Entrepreneurship</a>
    <a href="#bwr-vl1-check">Klausurcheck</a>
  </nav>

  <section class="lesson-section" id="bwr-vl1-fokus">
    <div class="lesson-section-heading">
      <span class="lesson-number">1</span>
      <div><h3>Was ist für die Klausur besonders wichtig?</h3><p>Priorisiert nach Vorlesungsinhalt und den Wiederholungsaufgaben zu Vorlesung 1.</p></div>
    </div>
    <div class="priority-grid">
      <div class="priority-card priority-high">
        <span>Sehr klausurnah</span>
        <ul>
          <li>BWL als Teil der Sozial- und Wirtschaftswissenschaften einordnen</li>
          <li>Maximal- und Minimalprinzip sicher unterscheiden</li>
          <li>Homo oeconomicus mit seinen Annahmen erklären</li>
          <li>Private und öffentliche Betriebe anhand ihrer Prinzipien unterscheiden</li>
          <li>Güter nach mehreren Kriterien klassifizieren</li>
          <li>Entrepreneurship und Intrapreneurship definieren</li>
        </ul>
      </div>
      <div class="priority-card">
        <span>Anwenden können</span>
        <ul>
          <li>Wertschöpfung, Gewinn und Wirtschaftlichkeit berechnen</li>
          <li>Beispiele in Güterkategorien einordnen</li>
          <li>Private, Club-, Allmende- und öffentliche Güter zuordnen</li>
          <li>Geld- und Güterströme im einfachen Wirtschaftskreislauf erkennen</li>
        </ul>
      </div>
      <div class="priority-card priority-low">
        <span>Einordnen & erklären</span>
        <ul>
          <li>BWL und VWL voneinander abgrenzen</li>
          <li>Wertschöpfung auf Entstehungs- und Verwendungsseite erklären</li>
          <li>Entrepreneurship-Kompetenzen mit Future Skills verbinden</li>
          <li>Organisatorische Angaben sind gegenüber den Fachinhalten nachrangig</li>
        </ul>
      </div>
    </div>
    <div class="lesson-warning"><strong>Prüfungslogik:</strong> Reines Auswendiglernen reicht nicht. In der E-Klausur können Begriffe, Zuordnungen, Lücken, Mehrfachantworten und kleine Anwendungsfälle vorkommen.</div>
  </section>

  <section class="lesson-section" id="bwr-vl1-oekonomie">
    <div class="lesson-section-heading">
      <span class="lesson-number">2</span>
      <div><h3>Das ökonomische Prinzip</h3><p>Warum Menschen wirtschaften und wie knappe Mittel eingesetzt werden.</p></div>
    </div>
    <div class="lesson-callout"><strong>Ausgangspunkt:</strong> Bedürfnisse sind grundsätzlich unbegrenzt, verfügbare Ressourcen und Gütermengen dagegen begrenzt. Dieses Knappheitsproblem macht wirtschaftliches Handeln notwendig.</div>
    <div class="lesson-grid lesson-grid-2">
      <article class="lesson-card">
        <h4>Maximalprinzip</h4>
        <p>Der Mitteleinsatz ist vorgegeben. Mit diesem festen Input soll der größtmögliche Output erreicht werden.</p>
        <div class="formula formula-accent">Input fix → Output maximal</div>
        <p><strong>Beispiel:</strong> Mit 100 Euro Werbebudget möglichst viele neue Kunden gewinnen.</p>
      </article>
      <article class="lesson-card">
        <h4>Minimalprinzip</h4>
        <p>Das Ergebnis ist vorgegeben. Dieser feste Output soll mit dem geringstmöglichen Input erreicht werden.</p>
        <div class="formula formula-accent">Output fix → Input minimal</div>
        <p><strong>Beispiel:</strong> 100 Bauteile mit möglichst wenig Material und Arbeitszeit produzieren.</p>
      </article>
    </div>
    <h4 class="lesson-subheading">Modell des Homo oeconomicus</h4>
    <div class="lesson-grid lesson-grid-2">
      <article class="lesson-card"><h4>Annahmen</h4><p>Er handelt vollständig rational, verfügt über sämtliche Marktinformationen, besitzt konstante Präferenzen und maximiert ausschließlich seinen eigenen Nutzen.</p></article>
      <article class="lesson-card"><h4>Grenzen des Modells</h4><p>Die Verhaltensökonomik untersucht Abweichungen von vollständiger Rationalität. Die Informationsökonomik betrachtet unvollständige oder asymmetrische Informationen.</p></article>
    </div>
    <div class="lesson-note"><strong>Merksatz:</strong> Haushalte maximieren im Grundmodell ihren Nutzen, Unternehmen ihren Gewinn. Das Modell ist eine Vereinfachung und keine vollständige Beschreibung realen Verhaltens.</div>
  </section>

  <section class="lesson-section" id="bwr-vl1-gueter">
    <div class="lesson-section-heading">
      <span class="lesson-number">3</span>
      <div><h3>Ökonomische Grundbegriffe: Güter</h3><p>Güter dienen der Bedürfnisbefriedigung und lassen sich nach verschiedenen Kriterien klassifizieren.</p></div>
    </div>
    <div class="lesson-grid lesson-grid-2">
      <article class="lesson-card"><h4>Freie Güter</h4><p>Stehen in unbegrenzter Menge zur Verfügung, besitzen grundsätzlich keinen Preis und sind normalerweise nicht Gegenstand wirtschaftlichen Handelns, zum Beispiel Sonnenlicht.</p></article>
      <article class="lesson-card"><h4>Knappe Güter / Wirtschaftsgüter</h4><p>Sind begrenzt, besitzen einen wirtschaftlichen Wert und müssen nach dem ökonomischen Prinzip bewirtschaftet werden.</p></article>
    </div>
    <div class="lesson-warning"><strong>Wichtig:</strong> Ein ehemals freies Gut kann durch Ressourcenverknappung knapp werden, zum Beispiel saubere Luft oder Grundwasser.</div>

    <div class="bwr-table-wrap">
      <table class="bwr-table">
        <thead><tr><th>Kriterium</th><th>Kategorie 1</th><th>Kategorie 2</th><th>Beispiel</th></tr></thead>
        <tbody>
          <tr><td>Beschaffenheit</td><td>Materielle Güter</td><td>Immaterielle Güter</td><td>Tisch / Wartungsvertrag</td></tr>
          <tr><td>Verwendungsort</td><td>Konsumgüter</td><td>Produktionsgüter</td><td>Computer privat / Computer im Betrieb</td></tr>
          <tr><td>Nutzungshäufigkeit</td><td>Gebrauchsgüter</td><td>Verbrauchsgüter</td><td>Auto / Benzin</td></tr>
          <tr><td>Beziehung</td><td>Substitutionsgüter</td><td>Komplementärgüter</td><td>Butter–Margarine / Lampe–Leuchtmittel</td></tr>
          <tr><td>Gleichartigkeit</td><td>Homogene Güter</td><td>Heterogene Güter</td><td>Europaletten / verschiedene Kraftstoffarten</td></tr>
        </tbody>
      </table>
    </div>

    <h4 class="lesson-subheading">Private und öffentliche Güter</h4>
    <p class="lesson-text">Die Einordnung erfolgt anhand von zwei Fragen: Können andere von der Nutzung ausgeschlossen werden? Besteht Rivalität, nimmt also ein Nutzer anderen die Nutzungsmöglichkeit?</p>
    <div class="goods-matrix">
      <div class="goods-matrix-head"></div><div class="goods-matrix-head">Rivalität: ja</div><div class="goods-matrix-head">Rivalität: nein</div>
      <div class="goods-matrix-side">Ausschließbar: ja</div><div><strong>Private Güter</strong><span>Schokoriegel, Kleidung</span></div><div><strong>Clubgüter</strong><span>Mautstraße ohne Stau, gebührenpflichtiger Dienst</span></div>
      <div class="goods-matrix-side">Ausschließbar: nein</div><div><strong>Allmendegüter</strong><span>Fische im Meer, Umweltressourcen</span></div><div><strong>Öffentliche Güter</strong><span>Nationale Verteidigung, Staudamm</span></div>
    </div>
    <div class="lesson-note"><strong>Klausurfalle:</strong> Dass der Staat ein Gut bereitstellt, macht es nicht automatisch zu einem öffentlichen Gut im ökonomischen Sinn. Entscheidend sind Ausschließbarkeit und Rivalität.</div>
  </section>

  <section class="lesson-section" id="bwr-vl1-betriebe">
    <div class="lesson-section-heading">
      <span class="lesson-number">4</span>
      <div><h3>Haushalte, Betriebe und Unternehmen</h3><p>Die zentralen Wirtschaftssubjekte und ihre Merkmale.</p></div>
    </div>
    <div class="lesson-grid lesson-grid-2">
      <article class="lesson-card">
        <h4>Haushalte</h4>
        <p><strong>Private Haushalte</strong> konsumieren und bieten Arbeitskraft an. Sie müssen mit ihrem Haushaltseinkommen wirtschaften.</p>
        <p><strong>Öffentliche Haushalte</strong> sind etwa Bund, Länder und Gemeinden. Haushaltspläne stellen erwartete Einnahmen und Ausgaben gegenüber.</p>
      </article>
      <article class="lesson-card">
        <h4>Betriebe</h4>
        <p>Ein Betrieb kombiniert Produktionsfaktoren, handelt nach dem Prinzip der Wirtschaftlichkeit und muss grundsätzlich sein finanzielles Gleichgewicht sichern.</p>
        <div class="formula">Wert der Produkte / Wert der eingesetzten Produktionsfaktoren &gt; 1</div>
      </article>
    </div>

    <div class="lesson-grid lesson-grid-2">
      <article class="lesson-card">
        <h4>Private Betriebe / Unternehmen</h4>
        <ul class="lecture-bullets">
          <li>Prinzip des Privateigentums</li>
          <li>Autonomieprinzip</li>
          <li>Betriebswirtschaftliches bzw. erwerbswirtschaftliches Prinzip</li>
        </ul>
      </article>
      <article class="lesson-card">
        <h4>Öffentliche Betriebe</h4>
        <ul class="lecture-bullets">
          <li>Prinzip des Gemeineigentums</li>
          <li>Organprinzip</li>
          <li>Prinzip der Gemeinnützigkeit bzw. Kostendeckung</li>
        </ul>
      </article>
    </div>
    <div class="lesson-callout"><strong>Gegenstand der BWL:</strong> Im Zentrum steht das unternehmerische Handeln und damit der Entscheidungsprozess in privaten Betrieben im marktwirtschaftlichen Wettbewerb.</div>
  </section>

  <section class="lesson-section" id="bwr-vl1-bwlvwl">
    <div class="lesson-section-heading">
      <span class="lesson-number">5</span>
      <div><h3>BWL im Kontext der Wirtschaftswissenschaften</h3><p>Einordnung in das Wissenschaftssystem und Abgrenzung zur VWL.</p></div>
    </div>
    <div class="lesson-grid lesson-grid-2">
      <article class="lesson-card"><h4>Betriebswirtschaftslehre</h4><p>Untersucht Entscheidungen und Wertschöpfungsprozesse einzelner Unternehmen. Typische Bereiche sind Beschaffung, Produktion, Marketing, Personal, Organisation, Rechnungswesen sowie Investition und Finanzierung.</p></article>
      <article class="lesson-card"><h4>Volkswirtschaftslehre</h4><p>Untersucht gesamtwirtschaftliche Zusammenhänge. Mikroökonomik befasst sich etwa mit Haushalten, Unternehmen und Preisen; Makroökonomik mit Einkommen, Beschäftigung, Inflation oder Geldpolitik.</p></article>
    </div>
    <div class="lesson-note"><strong>Einordnung:</strong> BWL und VWL bilden gemeinsam die Wirtschaftswissenschaften. Diese gehören zu den Sozialwissenschaften.</div>

    <h4 class="lesson-subheading">Einfacher Wirtschaftskreislauf</h4>
    <div class="lesson-flow">
      <div class="flow-box"><strong>Unternehmen → Haushalte</strong><span>Konsumgüter; Geldstrom zurück als Konsumausgaben</span></div>
      <div class="flow-arrow">↔</div>
      <div class="flow-box"><strong>Haushalte → Unternehmen</strong><span>Arbeitsleistung; Geldstrom zurück als Arbeitseinkommen</span></div>
    </div>
    <p class="lesson-text">Auf Gütermärkten verkaufen Unternehmen Güter an Haushalte. Auf Faktormärkten stellen Haushalte Produktionsfaktoren wie Arbeit, Kapital und Boden bereit.</p>
  </section>

  <section class="lesson-section" id="bwr-vl1-wertschoepfung">
    <div class="lesson-section-heading">
      <span class="lesson-number">6</span>
      <div><h3>Wertschöpfung, Wirtschaftlichkeit und Gewinn</h3><p>Die wichtigsten Rechengrößen aus Vorlesung 1.</p></div>
    </div>
    <div class="formula-list">
      <div><span>Wertschöpfung</span><strong>Gesamtleistung − Vorleistungen</strong></div>
      <div><span>Wirtschaftlichkeit</span><strong>Ertrag / Aufwand</strong></div>
      <div><span>Gewinn</span><strong>Ertrag − Aufwand &gt; 0</strong></div>
      <div><span>Gewinnschwelle</span><strong>Ertrag − Aufwand = 0</strong></div>
      <div><span>Verlust</span><strong>Ertrag − Aufwand &lt; 0</strong></div>
    </div>
    <div class="lesson-grid lesson-grid-2">
      <article class="lesson-card">
        <h4>Entstehungsseite</h4>
        <p>Von der Gesamtleistung einer Periode werden die verbrauchten Vorleistungen abgezogen. Das Ergebnis ist die Wertschöpfung.</p>
      </article>
      <article class="lesson-card">
        <h4>Verwendungsseite</h4>
        <p>Die Wertschöpfung wird auf Mitarbeiter, Fremdkapitalgeber, Staat und Eigentümer verteilt. Ein Teil kann als Rücklage im Unternehmen verbleiben.</p>
      </article>
    </div>
    <div class="formula-stack">
      <div class="formula">Wertschöpfung − Löhne/Gehälter/Sozialabgaben − Zinsen − Gewinnsteuern = Gewinn</div>
      <div class="formula">Gewinn − Ausschüttungen an Eigentümer = thesaurierter Gewinn / Rücklagenzuführung</div>
    </div>
    <div class="lesson-callout"><strong>Maximalprinzip:</strong> Ertrag steigt bei konstantem Aufwand. <strong>Minimalprinzip:</strong> Aufwand sinkt bei konstantem Ertrag. In beiden Fällen steigt die Wirtschaftlichkeit.</div>
  </section>

  <section class="lesson-section" id="bwr-vl1-entrepreneurship">
    <div class="lesson-section-heading">
      <span class="lesson-number">7</span>
      <div><h3>Entrepreneurship und Future Skills</h3><p>Unternehmerisches Handeln geht über die formale Gründung eines Unternehmens hinaus.</p></div>
    </div>
    <div class="lesson-callout"><strong>EntreComp-Definition:</strong> Entrepreneurship bedeutet, Chancen und Ideen aufzugreifen und in einen Wert für andere umzuwandeln. Dieser Wert kann finanziell, kulturell oder sozial sein.</div>
    <div class="lesson-grid lesson-grid-2">
      <article class="lesson-card"><h4>Entrepreneurship</h4><p>Umfasst Opportunity Recognition und Wertschöpfung in privaten, öffentlichen oder hybriden Kontexten. Dazu gehören unter anderem soziales, grünes und digitales Unternehmertum.</p></article>
      <article class="lesson-card"><h4>Intrapreneurship</h4><p>Bezeichnet unternehmerisches Denken und Handeln von Beschäftigten innerhalb einer bereits bestehenden Organisation.</p></article>
    </div>
    <h4 class="lesson-subheading">Typische unternehmerische Kompetenzen</h4>
    <div class="competency-cloud">
      <span>Selbstwirksamkeit</span><span>Kreativität</span><span>Resilienz</span><span>Eigeninitiative</span><span>Verantwortung</span><span>Nachhaltiges Denken</span><span>Lernen aus Fehlern</span><span>Kooperation</span><span>Unsicherheitstoleranz</span><span>Chancen erkennen</span><span>Problemlösen</span>
    </div>
    <div class="lesson-note"><strong>Warum klausurrelevant?</strong> Die Vorlesung verbindet unternehmerische Kompetenzen ausdrücklich mit Future Skills. Du solltest nicht nur Beispiele nennen, sondern die Überschneidungen erklären können.</div>
  </section>

  <section class="lesson-section" id="bwr-vl1-check">
    <div class="lesson-section-heading">
      <span class="lesson-number">8</span>
      <div><h3>Klausurcheck für Vorlesung 1</h3><p>Diese Punkte solltest du ohne Unterlagen beantworten können.</p></div>
    </div>
    <ul class="lecture-checklist">
      <li>Ich kann Maximal- und Minimalprinzip anhand eines Beispiels unterscheiden.</li>
      <li>Ich kenne die vier Annahmen des Homo oeconomicus.</li>
      <li>Ich kann Güter nach Beschaffenheit, Verwendung, Nutzung, Beziehung und Gleichartigkeit einordnen.</li>
      <li>Ich kann die vier Gütertypen aus Rivalität und Ausschließbarkeit ableiten.</li>
      <li>Ich kann private und öffentliche Betriebe anhand ihrer drei Prinzipien unterscheiden.</li>
      <li>Ich kann BWL und VWL abgrenzen und typische Teilgebiete nennen.</li>
      <li>Ich kann Wertschöpfung, Wirtschaftlichkeit, Gewinn und Break-even berechnen.</li>
      <li>Ich kann Entrepreneurship und Intrapreneurship definieren und Kompetenzen nennen.</li>
    </ul>
    <button class="start-btn lesson-quiz-button" onclick="startLessonQuiz()">Klausurfragen zu Vorlesung 1 starten →</button>
  </section>
</div>`;

const BWR_VL1_REFERENCE_CONTENT = `
<div class="lesson-page lecture-page bwr-page bwr-reference-page">
  <section class="lesson-hero lecture-hero">
    <div>
      <span class="lesson-kicker">BWR · Begriffe & Formeln · Vorlesung 1</span>
      <h2>Klausurlexikon und Formelsammlung</h2>
      <p>Alle zentralen Begriffe, Definitionen, Unterscheidungen und Formeln aus Vorlesung 1 in kompakter Nachschlageform.</p>
    </div>
    <div class="lesson-badge">A–Z</div>
  </section>

  <nav class="lesson-toc" aria-label="Inhaltsverzeichnis Begriffe und Formeln">
    <a href="#bwr-ref-formeln">Formeln</a>
    <a href="#bwr-ref-grundlagen">Grundbegriffe</a>
    <a href="#bwr-ref-gueter">Güterbegriffe</a>
    <a href="#bwr-ref-betriebe">Betriebe</a>
    <a href="#bwr-ref-wert">Wertschöpfung</a>
    <a href="#bwr-ref-entre">Entrepreneurship</a>
  </nav>

  <section class="lesson-section" id="bwr-ref-formeln">
    <div class="lesson-section-heading"><span class="lesson-number">ƒ</span><div><h3>Formelsammlung Vorlesung 1</h3><p>Formeln einschließlich der typischen Interpretation.</p></div></div>
    <div class="formula-list bwr-formula-list">
      <div><span>Wertschöpfung</span><strong>Gesamtleistung − Vorleistungen</strong></div>
      <div><span>Wirtschaftlichkeit</span><strong>Ertrag / Aufwand</strong></div>
      <div><span>Gewinn</span><strong>Ertrag − Aufwand &gt; 0</strong></div>
      <div><span>Break-even Point</span><strong>Ertrag − Aufwand = 0</strong></div>
      <div><span>Verlust</span><strong>Ertrag − Aufwand &lt; 0</strong></div>
      <div><span>Betriebliche Wirtschaftlichkeit</span><strong>Wert der Produkte / Wert der Produktionsfaktoren &gt; 1</strong></div>
      <div><span>Gewinn aus Wertschöpfung</span><strong>Wertschöpfung − Personalentgelte − Zinsen − Gewinnsteuern</strong></div>
      <div><span>Thesaurierter Gewinn</span><strong>Gewinn − Ausschüttungen an Eigentümer</strong></div>
    </div>
    <div class="lesson-grid lesson-grid-2">
      <article class="lesson-card"><h4>Maximalprinzip</h4><div class="formula">Input fix → Output maximal</div><p>Wirtschaftlichkeit steigt, indem bei konstantem Aufwand der Ertrag erhöht wird.</p></article>
      <article class="lesson-card"><h4>Minimalprinzip</h4><div class="formula">Output fix → Input minimal</div><p>Wirtschaftlichkeit steigt, indem bei konstantem Ertrag der Aufwand gesenkt wird.</p></article>
    </div>
  </section>

  <section class="lesson-section" id="bwr-ref-grundlagen">
    <div class="lesson-section-heading"><span class="lesson-number">A</span><div><h3>Grundbegriffe</h3><p>Wissenschaftssystem und ökonomisches Prinzip.</p></div></div>
    <div class="bwr-table-wrap"><table class="bwr-table bwr-glossary-table"><thead><tr><th>Begriff</th><th>Definition</th><th>Klausurhinweis</th></tr></thead><tbody>
      <tr><td>Betriebswirtschaftslehre (BWL)</td><td>Untersucht unternehmerisches Handeln und Entscheidungen in einzelnen privaten Betrieben.</td><td>Teil der Wirtschaftswissenschaften und damit der Sozialwissenschaften.</td></tr>
      <tr><td>Volkswirtschaftslehre (VWL)</td><td>Untersucht einzel- und gesamtwirtschaftliche Zusammenhänge, Märkte und staatliche Wirtschaftspolitik.</td><td>Mikroökonomik und Makroökonomik unterscheiden.</td></tr>
      <tr><td>Wirtschaftswissenschaften</td><td>Untersuchen wirtschaftliches Handeln zur bewussten Bedürfnisbefriedigung mithilfe von Wirtschaftsgütern.</td><td>BWL und VWL sind ihre beiden Hauptbereiche.</td></tr>
      <tr><td>Knappheitsproblem</td><td>Unbegrenzte Bedürfnisse treffen auf begrenzte Ressourcen und knappe Gütermengen.</td><td>Begründet die Notwendigkeit zu wirtschaften.</td></tr>
      <tr><td>Ökonomisches Prinzip</td><td>Knappe Mittel werden so eingesetzt, dass das Verhältnis von Input und Output möglichst günstig ist.</td><td>Maximal- und Minimalprinzip.</td></tr>
      <tr><td>Maximalprinzip</td><td>Mit gegebenem Input den größtmöglichen Output erzielen.</td><td>Input fix, Output maximal.</td></tr>
      <tr><td>Minimalprinzip</td><td>Einen gegebenen Output mit möglichst geringem Input erzielen.</td><td>Output fix, Input minimal.</td></tr>
      <tr><td>Homo oeconomicus</td><td>Modell eines rationalen, vollständig informierten Nutzenmaximierers mit konstanten Präferenzen.</td><td>Vier Annahmen vollständig nennen können.</td></tr>
      <tr><td>Verhaltensökonomik</td><td>Untersucht systematische Abweichungen von vollständig rationalem Verhalten.</td><td>Grenze des Homo-oeconomicus-Modells.</td></tr>
      <tr><td>Informationsökonomik</td><td>Untersucht Entscheidungen bei unvollständiger oder asymmetrischer Information.</td><td>Marktinformation ist real oft nicht vollständig.</td></tr>
    </tbody></table></div>
  </section>

  <section class="lesson-section" id="bwr-ref-gueter">
    <div class="lesson-section-heading"><span class="lesson-number">G</span><div><h3>Güterbegriffe</h3><p>Definitionen und typische Gegensatzpaare.</p></div></div>
    <div class="bwr-table-wrap"><table class="bwr-table bwr-glossary-table"><thead><tr><th>Begriff</th><th>Definition</th><th>Beispiel</th></tr></thead><tbody>
      <tr><td>Freies Gut</td><td>Unbegrenzt verfügbar, grundsätzlich ohne Preis und nicht knapp.</td><td>Sonnenlicht</td></tr>
      <tr><td>Wirtschaftsgut / knappes Gut</td><td>Begrenzt verfügbar, wirtschaftlich wertvoll und bewirtschaftungsbedürftig.</td><td>Nahrungsmittel, Auto</td></tr>
      <tr><td>Materielles Gut</td><td>Körperliche Ware oder Sachgut.</td><td>Tisch, Hammer</td></tr>
      <tr><td>Immaterielles Gut</td><td>Nicht körperliche Leistung oder Recht.</td><td>Beratung, Patent</td></tr>
      <tr><td>Konsumgut</td><td>Gut zur Nutzung in privaten Haushalten.</td><td>Privater Kühlschrank</td></tr>
      <tr><td>Produktionsgut</td><td>Gut zur Leistungserstellung in Betrieben.</td><td>Maschine, Firmencomputer</td></tr>
      <tr><td>Gebrauchsgut</td><td>Kann mehrfach oder über längere Zeit genutzt werden.</td><td>Auto, Haus</td></tr>
      <tr><td>Verbrauchsgut</td><td>Wird bei einmaliger Nutzung verbraucht.</td><td>Benzin, Nahrung</td></tr>
      <tr><td>Potentialfaktor</td><td>Dauerhaft nutzbarer Produktionsfaktor.</td><td>Maschine, betrieblich genutzter Kühlschrank</td></tr>
      <tr><td>Repetierfaktor</td><td>Produktionsfaktor, der im Prozess verbraucht wird und erneut beschafft werden muss.</td><td>Werk- und Betriebsstoffe</td></tr>
      <tr><td>Substitutionsgüter</td><td>Güter, die sich gegenseitig ersetzen können.</td><td>Butter und Margarine</td></tr>
      <tr><td>Komplementärgüter</td><td>Güter, die gemeinsam genutzt werden und sich ergänzen.</td><td>Lampe und Leuchtmittel</td></tr>
      <tr><td>Homogene Güter</td><td>Aus Sicht der Nachfrager gleichartige Güter.</td><td>Normierte Europaletten</td></tr>
      <tr><td>Heterogene Güter</td><td>Aus Sicht der Nachfrager verschiedenartige Güter.</td><td>Unterschiedliche Kraftstoffarten</td></tr>
      <tr><td>Rivalität</td><td>Die Nutzung durch eine Person verringert die Nutzungsmöglichkeit anderer.</td><td>Verzehr eines Schokoriegels</td></tr>
      <tr><td>Ausschließbarkeit</td><td>Andere können rechtlich oder technisch von der Nutzung ausgeschlossen werden.</td><td>Zugang nur nach Bezahlung</td></tr>
      <tr><td>Privates Gut</td><td>Ausschließbar und rival.</td><td>Kleidung</td></tr>
      <tr><td>Clubgut</td><td>Ausschließbar, aber nicht oder kaum rival.</td><td>Mautstraße ohne Stau</td></tr>
      <tr><td>Allmendegut</td><td>Nicht ausschließbar, aber rival.</td><td>Fischbestand im Meer</td></tr>
      <tr><td>Öffentliches Gut</td><td>Weder ausschließbar noch rival.</td><td>Nationale Verteidigung</td></tr>
    </tbody></table></div>
  </section>

  <section class="lesson-section" id="bwr-ref-betriebe">
    <div class="lesson-section-heading"><span class="lesson-number">B</span><div><h3>Haushalte und Betriebe</h3><p>Wirtschaftssubjekte und institutionelle Prinzipien.</p></div></div>
    <div class="bwr-table-wrap"><table class="bwr-table bwr-glossary-table"><thead><tr><th>Begriff</th><th>Definition</th><th>Klausurhinweis</th></tr></thead><tbody>
      <tr><td>Privater Haushalt</td><td>Eine oder mehrere Personen, die gemeinsam wirtschaften, konsumieren und Arbeitskraft anbieten.</td><td>Erhält Arbeitseinkommen und tätigt Konsumausgaben.</td></tr>
      <tr><td>Öffentlicher Haushalt</td><td>Bund, Länder, Gemeinden und Gemeindeverbände mit geplanten Einnahmen und Ausgaben.</td><td>Daseinsvorsorge und Infrastruktur.</td></tr>
      <tr><td>Betrieb</td><td>Wirtschaftliche Einheit, die Produktionsfaktoren kombiniert, wirtschaftlich handelt und finanzielles Gleichgewicht anstrebt.</td><td>Drei allgemeine Merkmale nennen.</td></tr>
      <tr><td>Unternehmen</td><td>Privater Betrieb im marktwirtschaftlichen Wettbewerb.</td><td>Hauptuntersuchungsobjekt der BWL.</td></tr>
      <tr><td>Produktionsfaktoren</td><td>Mittel, die in der Leistungserstellung kombiniert werden, etwa Arbeit, Betriebsmittel und Betriebsstoffe.</td><td>Input des Produktionsprozesses.</td></tr>
      <tr><td>Finanzielles Gleichgewicht</td><td>Einzahlungen müssen langfristig ausreichen, um Auszahlungen zu decken.</td><td>Nicht mit Gewinn gleichsetzen.</td></tr>
      <tr><td>Privateigentumsprinzip</td><td>Entscheidungsrechte und Gewinne stehen mehrheitlich privaten Eigentümern zu.</td><td>Prinzip privater Betriebe.</td></tr>
      <tr><td>Autonomieprinzip</td><td>Unternehmen treffen Entscheidungen weitgehend unabhängig von staatlichen Organen.</td><td>Prinzip privater Betriebe.</td></tr>
      <tr><td>Betriebswirtschaftliches Prinzip</td><td>Unternehmen maximieren ökonomische Ziele, etwa den Gewinn.</td><td>Auch erwerbswirtschaftliches Prinzip genannt.</td></tr>
      <tr><td>Gemeineigentumsprinzip</td><td>Der Betrieb gehört mehrheitlich der Allgemeinheit beziehungsweise dem Staat.</td><td>Prinzip öffentlicher Betriebe.</td></tr>
      <tr><td>Organprinzip</td><td>Staatliche Organe oder politische Gremien geben betriebliche Entscheidungen vor.</td><td>Prinzip öffentlicher Betriebe.</td></tr>
      <tr><td>Gemeinnützigkeitsprinzip</td><td>Versorgung der Bürger steht vor Gewinnerzielung; häufig gilt Kostendeckung.</td><td>Prinzip öffentlicher Betriebe.</td></tr>
    </tbody></table></div>
  </section>

  <section class="lesson-section" id="bwr-ref-wert">
    <div class="lesson-section-heading"><span class="lesson-number">W</span><div><h3>Wertschöpfung und Anspruchsgruppen</h3><p>Entstehung, Verwendung und Einkommensarten.</p></div></div>
    <div class="bwr-table-wrap"><table class="bwr-table bwr-glossary-table"><thead><tr><th>Begriff</th><th>Definition</th><th>Klausurhinweis</th></tr></thead><tbody>
      <tr><td>Gesamtleistung</td><td>Wert der in einer Periode hergestellten Produkte und Leistungen.</td><td>Ausgangspunkt der Entstehungsrechnung.</td></tr>
      <tr><td>Vorleistungen</td><td>Von anderen Unternehmen bezogene und im Prozess verbrauchte Leistungen.</td><td>Von der Gesamtleistung abziehen.</td></tr>
      <tr><td>Wertschöpfung</td><td>Im Unternehmen neu geschaffener Wert: Gesamtleistung minus Vorleistungen.</td><td>Nicht mit Gewinn verwechseln.</td></tr>
      <tr><td>Ertrag</td><td>Wertmäßiger Zuwachs innerhalb einer Periode.</td><td>Zähler der Wirtschaftlichkeit.</td></tr>
      <tr><td>Aufwand</td><td>Wertmäßiger Verbrauch innerhalb einer Periode.</td><td>Nenner der Wirtschaftlichkeit.</td></tr>
      <tr><td>Gewinn</td><td>Positiver Unterschied zwischen Ertrag und Aufwand.</td><td>Ertrag − Aufwand &gt; 0.</td></tr>
      <tr><td>Break-even Point</td><td>Gewinnschwelle, bei der Ertrag und Aufwand gleich hoch sind.</td><td>Gewinn = 0.</td></tr>
      <tr><td>Stakeholder</td><td>Alle Anspruchsgruppen, die das Unternehmen beeinflussen oder von ihm betroffen sind.</td><td>Zum Beispiel Mitarbeiter, Kunden, Staat, Banken.</td></tr>
      <tr><td>Shareholder</td><td>Eigentümer beziehungsweise Eigenkapitalgeber eines Unternehmens.</td><td>Eine Teilgruppe der Stakeholder.</td></tr>
      <tr><td>Kontrakteinkommen</td><td>Vorab vertraglich festgelegte Zahlungen.</td><td>Löhne, Zinsen oder Lieferantenentgelte.</td></tr>
      <tr><td>Residualeinkommen</td><td>Verbleibender Rest nach Erfüllung vertraglicher Ansprüche.</td><td>Gewinn der Eigentümer.</td></tr>
      <tr><td>Thesaurierung</td><td>Einbehaltung von Gewinn im Unternehmen.</td><td>Rücklagenzuführung statt Ausschüttung.</td></tr>
    </tbody></table></div>
  </section>

  <section class="lesson-section" id="bwr-ref-entre">
    <div class="lesson-section-heading"><span class="lesson-number">E</span><div><h3>Entrepreneurship-Begriffe</h3><p>Definitionen und Kompetenzbegriffe aus EntreComp.</p></div></div>
    <div class="bwr-table-wrap"><table class="bwr-table bwr-glossary-table"><thead><tr><th>Begriff</th><th>Definition</th><th>Klausurhinweis</th></tr></thead><tbody>
      <tr><td>Entrepreneurship</td><td>Chancen und Ideen aufgreifen und in finanziellen, kulturellen oder sozialen Wert für andere umwandeln.</td><td>Nicht auf Unternehmensgründung beschränkt.</td></tr>
      <tr><td>Opportunity Recognition</td><td>Chancen erkennen und als Ausgangspunkt für Wertschöpfung nutzen.</td><td>Kernbestandteil von Entrepreneurship.</td></tr>
      <tr><td>Intrapreneurship</td><td>Unternehmerisches Denken und Handeln innerhalb einer bestehenden Organisation.</td><td>Beschäftigte handeln wie interne Unternehmer.</td></tr>
      <tr><td>Soziales Unternehmertum</td><td>Unternehmerisches Handeln mit vorrangigem sozialem Wertbeitrag.</td><td>Wert muss nicht ausschließlich finanziell sein.</td></tr>
      <tr><td>Grünes Unternehmertum</td><td>Unternehmerisches Handeln mit ökologischem Wertbeitrag.</td><td>Verbindung zu nachhaltigem Denken.</td></tr>
      <tr><td>Digitales Unternehmertum</td><td>Wertschöpfung mit digitalen Produkten, Prozessen oder Geschäftsmodellen.</td><td>Eine Form von Entrepreneurship.</td></tr>
      <tr><td>EntreComp</td><td>Europäischer Kompetenzrahmen für unternehmerisches Denken und Handeln.</td><td>Verbindet Chancen, Ressourcen und Umsetzung.</td></tr>
      <tr><td>Future Skills</td><td>Überfachliche Kompetenzen zur Bewältigung zukünftiger Veränderungen.</td><td>Große Überschneidung mit Entrepreneurship-Kompetenzen.</td></tr>
      <tr><td>VUCA</td><td>Volatility, Uncertainty, Complexity und Ambiguity.</td><td>Begründet den Bedarf an Anpassungs- und Problemlösekompetenz.</td></tr>
      <tr><td>Selbstwirksamkeit</td><td>Überzeugung, Herausforderungen durch eigenes Handeln bewältigen zu können.</td><td>EntreComp-Kompetenz.</td></tr>
      <tr><td>Resilienz</td><td>Fähigkeit, Rückschläge auszuhalten und handlungsfähig zu bleiben.</td><td>Auch Future Skill.</td></tr>
      <tr><td>Unsicherheitstoleranz</td><td>Fähigkeit, trotz unvollständiger Informationen und unklarer Entwicklungen zu handeln.</td><td>Entspricht der Ambiguitätskompetenz.</td></tr>
    </tbody></table></div>
  </section>
</div>`;
