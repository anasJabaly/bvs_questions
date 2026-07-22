// Lernblätter für das Modul Computergrafik.
// Jedes Blatt kann eine ausführliche Lernseite und passende Quizfragen enthalten.

const CG_SHEET_1_QUESTIONS = [
  {
    cat: "Framework",
    q: "Welche Zuordnung der zentralen Methoden im CGFramework ist richtig?",
    code: null,
    opts: [
      "init(): einmalige Initialisierung; update(): Logik pro Frame; draw(): Darstellung pro Frame",
      "init(): Darstellung pro Frame; update(): einmalige Initialisierung; draw(): Eingaben",
      "init(): nur Tastatureingaben; update(): Shader laden; draw(): Programm beenden",
      "Alle drei Methoden werden nur einmal beim Start ausgeführt"
    ],
    ans: 0,
    exp: "init() richtet die Szene einmalig ein. update(deltaTime) verarbeitet Logik und Animationen pro Frame. draw() zeichnet die Szene pro Frame.",
    source: "Aufgabenblatt 1 · Aufgabe 1"
  },
  {
    cat: "OpenGL",
    q: "Was bewirkt glClearColor(r, g, b, a)?",
    code: "glClearColor(r, g, b, a);",
    opts: [
      "Es zeichnet sofort ein farbiges Rechteck über den Bildschirm.",
      "Es legt die Farbe fest, die beim nächsten Löschen des Farbpuffers verwendet wird.",
      "Es ändert die Farbe aller Meshes in der Szene.",
      "Es löscht ausschließlich den Tiefenpuffer."
    ],
    ans: 1,
    exp: "glClearColor() speichert nur die Löschfarbe. Erst glClear(GL_COLOR_BUFFER_BIT) füllt den Farbpuffer tatsächlich mit dieser Farbe.",
    source: "Aufgabenblatt 1 · Aufgabe 2"
  },
  {
    cat: "OpenGL",
    q: "Warum liefert 0,5 + 0,5 · sin(t) immer einen gültigen OpenGL-Farbwert?",
    code: null,
    opts: [
      "Weil sin(t) nur Werte zwischen 0 und 1 liefert.",
      "Weil das Ergebnis durch die Verschiebung und Skalierung im Bereich [0, 1] liegt.",
      "Weil OpenGL negative Farbwerte automatisch in positive Werte umwandelt.",
      "Weil der Alphakanal immer 1 ist."
    ],
    ans: 1,
    exp: "sin(t) liegt in [-1, 1]. Nach der Multiplikation mit 0,5 liegt der Wert in [-0,5, 0,5] und nach dem Addieren von 0,5 in [0, 1].",
    source: "Aufgabenblatt 1 · Aufgabe 2"
  },
  {
    cat: "Animation",
    q: "Warum wird eine Zeitvariable mit deltaTime erhöht?",
    code: "m_colorTime += deltaTime;",
    opts: [
      "Damit die Animation möglichst viele FPS erzeugt.",
      "Damit die Animation unabhängig von der Bildwiederholrate ungefähr gleich schnell läuft.",
      "Damit OpenGL den Alphakanal automatisch berechnet.",
      "Damit das Dreieck normalisiert wird."
    ],
    ans: 1,
    exp: "deltaTime ist die vergangene Zeit seit dem letzten Frame. Dadurch hängt die Animationsgeschwindigkeit von der Zeit und nicht von der Anzahl der Frames ab.",
    source: "Aufgabenblatt 1 · Aufgabe 2"
  },
  {
    cat: "Vektoren",
    q: "Wie erhält man einen Vektor vom Punkt A zum Punkt B?",
    code: null,
    opts: ["A + B", "A − B", "B − A", "A × B"],
    ans: 2,
    exp: "Der Verbindungsvektor von A nach B lautet AB = B − A. Der Zielpunkt wird vom Startpunkt abgezogen.",
    source: "Aufgabenblatt 1 · Aufgabe 3"
  },
  {
    cat: "Dreiecksnormalen",
    q: "Welche Formel berechnet eine Normale des Dreiecks mit den Punkten A, B und C?",
    code: null,
    opts: [
      "(B − A) · (C − A)",
      "(B − A) × (C − A)",
      "|B − A| + |C − A|",
      "(A + B + C) / 3"
    ],
    ans: 1,
    exp: "Die Differenzvektoren spannen die Dreiecksfläche auf. Ihr Kreuzprodukt steht senkrecht auf beiden und somit senkrecht auf der Fläche.",
    source: "Aufgabenblatt 1 · Aufgabe 3a"
  },
  {
    cat: "Dreiecksnormalen",
    q: "Was passiert, wenn beim Kreuzprodukt die Reihenfolge vertauscht wird?",
    code: "u × v = −(v × u)",
    opts: [
      "Der Betrag und die Richtung bleiben unverändert.",
      "Der Vektor wird doppelt so lang.",
      "Der Betrag bleibt gleich, aber die Richtung wird umgekehrt.",
      "Das Ergebnis ist immer der Nullvektor."
    ],
    ans: 2,
    exp: "Das Kreuzprodukt ist antikommutativ. Durch Vertauschen der Reihenfolge erhält man die entgegengesetzte Normale.",
    source: "Aufgabenblatt 1 · Aufgabe 3a"
  },
  {
    cat: "Vektoren",
    q: "Welche Länge besitzt ein normalisierter Vektor?",
    code: null,
    opts: ["0", "1", "π", "Sie hängt von seiner Richtung ab."],
    ans: 1,
    exp: "Ein normalisierter Vektor ist ein Einheitsvektor und hat per Definition die Länge 1.",
    source: "Aufgabenblatt 1 · Aufgabe 3"
  },
  {
    cat: "Winkel",
    q: "Welche Formel liefert den Winkel α zwischen zwei von null verschiedenen Vektoren u und v?",
    code: null,
    opts: [
      "α = arccos((u · v) / (|u| · |v|))",
      "α = u × v",
      "α = |u − v|",
      "α = (u · u) / (v · v)"
    ],
    ans: 0,
    exp: "Aus u · v = |u| |v| cos(α) folgt durch Umstellen die Winkelgleichung mit arccos.",
    source: "Aufgabenblatt 1 · Aufgabe 3b"
  },
  {
    cat: "Dreieck",
    q: "Welche Kantenlängen besitzt das Dreieck A = (−0,5; −0,5; 0), B = (0,5; −0,5; 0), C = (0; 0,5; 0)?",
    code: null,
    opts: [
      "|AB| = 1 und |BC| = |CA| = √5 / 2",
      "Alle drei Kanten haben die Länge 1.",
      "|AB| = 2 und |BC| = |CA| = 1.",
      "|AB| = √5 und |BC| = |CA| = 1 / 2."
    ],
    ans: 0,
    exp: "AB ist eine waagerechte Strecke der Länge 1. Für BC und CA ergibt der Betrag des Differenzvektors jeweils √(0,5² + 1²) = √5/2.",
    source: "Aufgabenblatt 1 · Aufgabe 3c"
  },
  {
    cat: "Projektion",
    q: "Warum steht u · u im Nenner der Projektionsformel?",
    code: "projᵤ(v) = ((u · v) / (u · u)) · u",
    opts: [
      "Weil u · u = |u|² ist und damit die Länge von u ausgeglichen wird.",
      "Weil u · u immer null ist.",
      "Damit die Projektion senkrecht zu u wird.",
      "Damit ausschließlich ganzzahlige Ergebnisse entstehen."
    ],
    ans: 0,
    exp: "Da u · u = |u|² gilt, kompensiert der Nenner die Skalierung des Richtungsvektors u. Die Projektion hängt dadurch nur von seiner Richtung ab.",
    source: "Aufgabenblatt 1 · Aufgabe 4"
  },
  {
    cat: "Projektion",
    q: "Wie vereinfacht sich die Projektionsformel, wenn u bereits normalisiert ist?",
    code: null,
    opts: [
      "projᵤ(v) = (u · v) · u",
      "projᵤ(v) = u × v",
      "projᵤ(v) = v − u",
      "projᵤ(v) = (u · u) · v"
    ],
    ans: 0,
    exp: "Für einen Einheitsvektor gilt u · u = |u|² = 1. Deshalb fällt der Nenner weg.",
    source: "Aufgabenblatt 1 · Aufgabe 4"
  }
];


const CG_SHEET_1_CHAT = `
    <section class="lesson-section chat-lesson-section" id="cg1-chat">
      <div class="lesson-section-heading">
        <span class="lesson-number">💬</span>
        <div><h3>Originaler Lern-Chat zu Blatt 1</h3><p>Der vollständige Lernabschnitt ab der von dir gewünschten Stelle. Im Bereich kannst du unabhängig von der Seite scrollen.</p></div>
      </div>

      <div class="study-chat" aria-label="Scrollbarer Lern-Chat zu Aufgabenblatt 1">
        <div class="chat-message chat-assistant">
          <div class="chat-role">ChatGPT</div>
          <p>Die handschriftliche Lösung zu Aufgabe 4 sehe ich in den Dateien nicht. Deshalb erkläre ich dort die korrekte Musterlösung.</p>
          <h3>Blatt 1 – Verständnis und Kontrolle</h3>

          <h4>Aufgabe 1: IDE, CGFramework und LWJGL</h4>
          <p>Hier gab es kaum mathematischen Inhalt. Das Ziel war, das Framework zu starten und seinen grundlegenden Aufbau kennenzulernen. Hauptsächlich wird die Klasse <code>Sandbox</code> verändert.</p>
          <pre class="chat-code"><code>init()
update(deltaTime)
draw()
createMeshes()</code></pre>
          <p><strong><code>init()</code>:</strong> Wird normalerweise einmal beim Programmstart ausgeführt. Dort werden beispielsweise Kameras, Shader, Szene, Benutzeroberfläche und Meshes erstellt.</p>
          <p><strong><code>update(deltaTime)</code>:</strong> Wird in jedem Frame vor dem Zeichnen aufgerufen. Dort gehören Benutzereingaben, Animationen, Positionsänderungen und Zeitaktualisierungen hinein.</p>
          <p><strong><code>draw()</code>:</strong> Wird in jedem Frame ausgeführt und zeichnet die Szene.</p>
          <p><strong><code>createMeshes()</code>:</strong> Erstellt geometrische Objekte und fügt sie der Szene hinzu.</p>
          <div class="chat-note"><strong>Klausurrelevanz:</strong> <code>init</code> → einmalige Initialisierung, <code>update</code> → Logik und Animation pro Frame, <code>draw</code> → Darstellung pro Frame.</div>

          <h4>Aufgabe 2: Veränderung der Hintergrundfarbe</h4>
          <p>OpenGL-Farben werden mit vier Werten dargestellt:</p>
          <div class="chat-formula">(r, g, b, a), &nbsp; 0 ≤ r,g,b,a ≤ 1</div>
          <p><code>r</code> steht für Rot, <code>g</code> für Grün, <code>b</code> für Blau und <code>a</code> für den Alphakanal.</p>
          <pre class="chat-code"><code>m_colorTime += deltaTime;

float r = (float)(0.5 + 0.5 * Math.sin(m_colorTime * 0.5));
float g = (float)(0.5 + 0.5 * Math.sin(m_colorTime * 0.7 + 2.0));
float b = (float)(0.5 + 0.5 * Math.sin(m_colorTime * 0.3 + 4.0));

glClearColor(r, g, b, 1.0f);
glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);</code></pre>
          <p>Die Sinusfunktion liefert Werte zwischen −1 und 1. Durch Multiplikation mit 0,5 entsteht der Bereich [−0,5; 0,5]. Durch Addition von 0,5 entsteht genau der für OpenGL benötigte Bereich [0; 1].</p>
          <div class="chat-formula">−1 ≤ sin(t) ≤ 1<br>−0,5 ≤ 0,5 · sin(t) ≤ 0,5<br>0 ≤ 0,5 + 0,5 · sin(t) ≤ 1</div>
          <p><strong>Warum <code>deltaTime</code>?</strong> <code>deltaTime</code> gibt an, wie viel Zeit seit dem letzten Frame vergangen ist. Dadurch läuft die Animation auf Rechnern mit unterschiedlichen FPS ungefähr gleich schnell.</p>
          <p><strong>Wichtiger Unterschied:</strong> <code>glClearColor()</code> legt nur die Farbe fest, mit der gelöscht werden soll. Erst <code>glClear()</code> überschreibt den jeweiligen Puffer tatsächlich.</p>

          <h4>Aufgabe 3: Vektoren und Dreiecke</h4>
          <p>Das Dreieck besitzt die Punkte:</p>
          <div class="chat-formula">A = (−0,5; −0,5; 0), &nbsp; B = (0,5; −0,5; 0), &nbsp; C = (0; 0,5; 0)</div>

          <h5>3a: Normale des Dreiecks</h5>
          <p>Zuerst werden zwei Vektoren gebildet, die auf der Dreiecksfläche liegen:</p>
          <div class="chat-formula">AB = B − A = (1; 0; 0)<br>AC = C − A = (0,5; 1; 0)</div>
          <p>Die Normale ergibt sich aus dem Kreuzprodukt:</p>
          <div class="chat-formula chat-formula-accent">n = AB × AC = (0; 0; 1)</div>
          <p>Das Kreuzprodukt steht senkrecht auf beiden Spannvektoren und damit senkrecht auf der Dreiecksfläche. Der Vektor besitzt bereits die Länge 1.</p>
          <p><strong>Reihenfolge beachten:</strong></p>
          <div class="chat-formula">u × v = −(v × u)</div>
          <p>Beim Vertauschen bleibt der Betrag gleich, aber die Normale zeigt in die entgegengesetzte Richtung.</p>

          <h5>3b: Innenwinkel</h5>
          <div class="chat-formula chat-formula-accent">α = arccos((u · v) / (‖u‖ · ‖v‖))</div>
          <p>Beide verwendeten Vektoren müssen am Eckpunkt beginnen, dessen Winkel berechnet werden soll.</p>
          <div class="chat-result-row">
            <span>Winkel A ≈ 63,43°</span>
            <span>Winkel B ≈ 63,43°</span>
            <span>Winkel C ≈ 53,13°</span>
          </div>
          <p>Kontrolle: 63,43° + 63,43° + 53,13° ≈ 180°.</p>
          <p>Für eine robuste Implementierung kann der Wert vor <code>acos</code> auf den Bereich [−1; 1] begrenzt werden:</p>
          <pre class="chat-code"><code>double cosAlpha = dot(u, v) / (length(u) * length(v));
cosAlpha = Math.max(-1.0, Math.min(1.0, cosAlpha));
double alpha = Math.toDegrees(Math.acos(cosAlpha));</code></pre>

          <h5>3c: Kantenlängen</h5>
          <div class="chat-formula">d(A,B) = ‖B − A‖</div>
          <div class="chat-result-row">
            <span>|AB| = 1</span>
            <span>|BC| = √5 / 2 ≈ 1,1180</span>
            <span>|CA| = √5 / 2 ≈ 1,1180</span>
          </div>
          <p>Da zwei Seiten gleich lang sind, ist das Dreieck gleichschenklig.</p>

          <h4>Aufgabe 4: Orthogonale Projektion</h4>
          <div class="chat-formula chat-formula-main">proj<sub>u</sub>(v) = ((u · v) / (u · u)) · u</div>
          <p><strong>Schritt 1:</strong> Einheitsvektor in Richtung von <em>u</em>:</p>
          <div class="chat-formula">û = u / ‖u‖</div>
          <p><strong>Schritt 2:</strong> Aus dem rechtwinkligen Dreieck folgt für die Länge der Projektion:</p>
          <div class="chat-formula">t = ‖v‖ cos(α)</div>
          <p><strong>Schritt 3:</strong> Mit dem Skalarprodukt <code>u · v = ‖u‖ ‖v‖ cos(α)</code> erhält man:</p>
          <div class="chat-formula">t = (u · v) / ‖u‖</div>
          <p><strong>Schritt 4:</strong> Länge mal Richtung:</p>
          <div class="chat-formula">proj<sub>u</sub>(v) = t · û = ((u · v) / ‖u‖²) · u</div>
          <p>Da <code>‖u‖² = u · u</code> gilt, folgt die bekannte Formel.</p>
          <p>Ist <em>u</em> bereits normalisiert, gilt <code>u · u = 1</code> und die Formel vereinfacht sich zu:</p>
          <div class="chat-formula chat-formula-accent">proj<sub>u</sub>(v) = (u · v) · u</div>

          <h4>Formelsammlung – Blatt 1</h4>
          <div class="chat-formula-list">
            <div><b>Vektor von A nach B</b><span>AB = B − A</span></div>
            <div><b>Vektorlänge</b><span>‖v‖ = √(vₓ² + vᵧ² + v𝓏²) = √(v · v)</span></div>
            <div><b>Normalisierung</b><span>v̂ = v / ‖v‖ und ‖v̂‖ = 1</span></div>
            <div><b>Skalarprodukt</b><span>u · v = uₓvₓ + uᵧvᵧ + u𝓏v𝓏</span></div>
            <div><b>Winkel</b><span>α = arccos((u · v) / (‖u‖ ‖v‖))</span></div>
            <div><b>Orthogonalität</b><span>u ⟂ v ⇔ u · v = 0</span></div>
            <div><b>Dreiecksnormalenvektor</b><span>n = (B − A) × (C − A)</span></div>
            <div><b>Dreiecksfläche</b><span>A△ = ½ ‖(B − A) × (C − A)‖</span></div>
            <div><b>Orthogonale Projektion</b><span>projᵤ(v) = ((u · v) / (u · u)) · u</span></div>
          </div>

          <h4>Was du wirklich können musst</h4>
          <p><strong>Sehr wichtig:</strong> Differenzvektoren, Vektorlänge, Normalisierung, Skalarprodukt, Winkel, Kreuzprodukt, Dreiecksnormalen und orthogonale Projektion.</p>
          <p><strong>Grundverständnis:</strong> <code>init</code>, <code>update</code> und <code>draw</code>, <code>deltaTime</code>, RGBA sowie <code>glClearColor</code> und <code>glClear</code>.</p>
          <p><strong>Nicht auswendig lernen:</strong> vollständige Swing-GUI, Screenshot-Code, Fenstergrößen und alle Framework-Initialisierungen.</p>

          <h4>Mini-Test</h4>
          <ol class="chat-question-list">
            <li>Warum berechnet man eine Dreiecksnormalen mit (B−A) × (C−A)?</li>
            <li>Was ändert sich, wenn man die Reihenfolge beim Kreuzprodukt vertauscht?</li>
            <li>Welche Länge besitzt jeder normalisierte Vektor?</li>
            <li>Warum steht bei der Projektionsformel u · u im Nenner?</li>
            <li>Warum reicht glClearColor() allein nicht aus, um den Hintergrund neu einzufärben?</li>
          </ol>
        </div>

        <div class="chat-message chat-user">
          <div class="chat-role">Du</div>
          <p><strong>1.</strong> Um den Normalvektor herauszubekommen, der senkrecht auf beiden Vektoren steht.</p>
          <p><strong>2.</strong> Es entsteht ein anderes Ergebnis beziehungsweise der Vektor zeigt in die andere Richtung.</p>
          <p><strong>3.</strong> 1.</p>
          <p><strong>4.</strong> Weil der Betrag von u zum Quadrat gleich u · u ist.</p>
          <p><strong>5.</strong> Weil glClearColor nur speichert, mit welcher Farbe gelöscht werden soll. Erst im nächsten Schritt wird die Farbe tatsächlich in den Puffer geschrieben.</p>
        </div>

        <div class="chat-message chat-assistant">
          <div class="chat-role">ChatGPT</div>
          <p><strong>Sehr gut – inhaltlich sind alle fünf Antworten richtig.</strong> Bei Nummer 4 solltest du in der Klausur noch etwas genauer formulieren.</p>

          <h4>1. Dreiecksnormalenvektor ✅</h4>
          <p>Das Kreuzprodukt zweier Spannvektoren des Dreiecks liefert einen Vektor, der senkrecht auf beiden Spannvektoren und damit senkrecht auf der Dreiecksfläche steht.</p>
          <div class="chat-formula">n = (B − A) × (C − A)</div>

          <h4>2. Reihenfolge des Kreuzprodukts ✅</h4>
          <p>Der Betrag bleibt gleich, aber der Vektor zeigt anschließend in die entgegengesetzte Richtung.</p>
          <div class="chat-formula">u × v = −(v × u)</div>

          <h4>3. Länge eines normalisierten Vektors ✅</h4>
          <div class="chat-formula">‖v̂‖ = 1</div>
          <p>Ein normalisierter Vektor wird deshalb auch Einheitsvektor genannt.</p>

          <h4>4. Nenner der Projektionsformel ✅ mit Ergänzung</h4>
          <p>Es gilt <code>u · u = ‖u‖²</code>. Der Nenner gleicht die Länge von <em>u</em> aus. Dadurch hängt die Projektion nur von der Richtung von <em>u</em> ab und nicht davon, wie lang beziehungsweise wie stark skaliert <em>u</em> ist.</p>
          <div class="chat-formula">proj<sub>u</sub>(v) = ((u · v) / (u · u)) · u</div>

          <h4>5. glClearColor() und glClear() ✅</h4>
          <p><code>glClearColor(r,g,b,a)</code> speichert nur die Löschfarbe. <code>glClear(GL_COLOR_BUFFER_BIT)</code> führt das Überschreiben des Farbpuffers tatsächlich aus.</p>
          <pre class="chat-code"><code>glClearColor(r, g, b, 1.0f);
glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);</code></pre>

          <div class="chat-success"><strong>Ergebnis: 5 von 5 richtig.</strong><br>Besonders merken: <code>u × v = −(v × u)</code> und <code>u · u = ‖u‖²</code>.</div>
        </div>
      </div>
      <p class="chat-scroll-hint">↕ Im Chatfenster scrollen, um den vollständigen Verlauf zu lesen.</p>
    </section>`;

const CG_SHEET_1_CONTENT = `
  <article class="lesson-page">
    <section class="lesson-hero">
      <div>
        <span class="lesson-kicker">Computergrafik · Aufgabenblatt 1</span>
        <h2>OpenGL, Vektoren, Dreiecke und orthogonale Projektion</h2>
        <p>Zusammenfassung deiner Lösung mit Erklärungen, Formeln, Ergebnissen und klausurreifen Antworten.</p>
      </div>
      <div class="lesson-badge">Blatt 1</div>
    </section>

    <nav class="lesson-toc" aria-label="Inhaltsverzeichnis">
      <a href="#cg1-chat">Lern-Chat</a>
      <a href="#cg1-ueberblick">Überblick</a>
      <a href="#cg1-framework">Framework</a>
      <a href="#cg1-farbe">Hintergrundfarbe</a>
      <a href="#cg1-dreieck">Vektoren & Dreieck</a>
      <a href="#cg1-projektion">Projektion</a>
      <a href="#cg1-formeln">Formelsammlung</a>
      <a href="#cg1-test">Fragen & Antworten</a>
    </nav>

    ${CG_SHEET_1_CHAT}

    <section class="lesson-section" id="cg1-ueberblick">
      <div class="lesson-section-heading">
        <span class="lesson-number">01</span>
        <div><h3>Was behandelt Blatt 1?</h3><p>Die Grundlagen, auf denen viele spätere Computergrafik-Aufgaben aufbauen.</p></div>
      </div>
      <div class="lesson-grid lesson-grid-2">
        <div class="lesson-card"><h4>Aufgabe 1</h4><p>CGFramework und LWJGL starten und den Ablauf der Render-Schleife verstehen.</p></div>
        <div class="lesson-card"><h4>Aufgabe 2</h4><p>Die OpenGL-Hintergrundfarbe zeitabhängig und framerateunabhängig verändern.</p></div>
        <div class="lesson-card"><h4>Aufgabe 3</h4><p>Dreiecksnormalen, Innenwinkel und Kantenlängen mit Vektorrechnung bestimmen.</p></div>
        <div class="lesson-card"><h4>Aufgabe 4</h4><p>Die Formel der orthogonalen Projektion geometrisch herleiten.</p></div>
      </div>
    </section>

    <section class="lesson-section" id="cg1-framework">
      <div class="lesson-section-heading">
        <span class="lesson-number">02</span>
        <div><h3>Aufgabe 1: CGFramework und LWJGL</h3><p>Die drei wichtigsten Stationen eines Frames.</p></div>
      </div>

      <div class="lesson-flow">
        <div class="flow-step"><span>1</span><strong>init()</strong><small>einmalige Initialisierung</small></div>
        <div class="flow-arrow">→</div>
        <div class="flow-step"><span>2</span><strong>update(deltaTime)</strong><small>Logik und Animation pro Frame</small></div>
        <div class="flow-arrow">→</div>
        <div class="flow-step"><span>3</span><strong>draw()</strong><small>Darstellung pro Frame</small></div>
      </div>

      <div class="lesson-grid lesson-grid-3">
        <div class="lesson-card"><h4>init()</h4><p>Wird normalerweise einmal beim Programmstart ausgeführt. Hier werden beispielsweise Szene, Kameras, Shader, GUI und Meshes eingerichtet.</p></div>
        <div class="lesson-card"><h4>update(deltaTime)</h4><p>Wird vor jedem Zeichnen aufgerufen. Hier gehören Eingaben, Animationen, Positionsänderungen und Zeitaktualisierungen hinein.</p></div>
        <div class="lesson-card"><h4>draw()</h4><p>Wird in jedem Frame ausgeführt und zeichnet die Szene. Vorher werden unter anderem OpenGL-Zustände und Puffer vorbereitet.</p></div>
      </div>

      <div class="lesson-note"><strong>Begriffe:</strong> OpenGL ist die Grafikschnittstelle. LWJGL stellt Java-Bindings für OpenGL und weitere native Bibliotheken bereit. Das CGFramework liefert den vorbereiteten Rahmen mit Fenster, Kamera, Meshes und Shadern.</div>
      <div class="lesson-callout"><strong>Klausur-Merksatz:</strong> <code>init</code> = einmalig, <code>update</code> = Logik pro Frame, <code>draw</code> = Darstellung pro Frame.</div>
    </section>

    <section class="lesson-section" id="cg1-farbe">
      <div class="lesson-section-heading">
        <span class="lesson-number">03</span>
        <div><h3>Aufgabe 2: Veränderung der Hintergrundfarbe</h3><p>RGBA-Werte, Sinusanimation und deltaTime.</p></div>
      </div>

      <div class="lesson-card lesson-card-wide">
        <h4>RGBA in OpenGL</h4>
        <p>Eine Farbe wird durch vier Float-Werte dargestellt:</p>
        <div class="formula">(r, g, b, a), &nbsp; r,g,b,a ∈ [0,1]</div>
        <div class="rgba-row">
          <span><b>R</b> Rot</span><span><b>G</b> Grün</span><span><b>B</b> Blau</span><span><b>A</b> Alpha</span>
        </div>
      </div>

      <pre class="lesson-code"><code>m_colorTime += deltaTime;

float r = (float)(0.5 + 0.5 * Math.sin(m_colorTime * 0.5));
float g = (float)(0.5 + 0.5 * Math.sin(m_colorTime * 0.7 + 2.0));
float b = (float)(0.5 + 0.5 * Math.sin(m_colorTime * 0.3 + 4.0));

glClearColor(r, g, b, 1.0f);
glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);</code></pre>

      <h4 class="lesson-subheading">Warum liegt 0,5 + 0,5 · sin(t) immer in [0,1]?</h4>
      <div class="derivation">
        <div><span>1</span><p>−1 ≤ sin(t) ≤ 1</p></div>
        <div><span>2</span><p>−0,5 ≤ 0,5 · sin(t) ≤ 0,5</p></div>
        <div><span>3</span><p>0 ≤ 0,5 + 0,5 · sin(t) ≤ 1</p></div>
      </div>

      <div class="lesson-grid lesson-grid-2">
        <div class="lesson-card"><h4>Warum deltaTime?</h4><p><code>deltaTime</code> ist die vergangene Zeit seit dem letzten Frame. Damit läuft die Animation auf Rechnern mit unterschiedlichen FPS ungefähr gleich schnell.</p></div>
        <div class="lesson-card"><h4>ClearColor vs. Clear</h4><p><code>glClearColor()</code> legt nur die Löschfarbe fest. <code>glClear()</code> überschreibt anschließend den angegebenen Puffer tatsächlich.</p></div>
      </div>
    </section>

    <section class="lesson-section" id="cg1-dreieck">
      <div class="lesson-section-heading">
        <span class="lesson-number">04</span>
        <div><h3>Aufgabe 3: Vektoren und Dreiecke</h3><p>Das konkrete Dreieck aus deiner Sandbox.</p></div>
      </div>

      <div class="point-grid">
        <div><span>A</span><code>(−0,5; −0,5; 0)</code></div>
        <div><span>B</span><code>( 0,5; −0,5; 0)</code></div>
        <div><span>C</span><code>( 0; 0,5; 0)</code></div>
      </div>

      <h4 class="lesson-subheading">3a: Dreiecksnormalenvektor</h4>
      <p class="lesson-text">Zuerst werden zwei Spannvektoren gebildet. Ein Vektor von A nach B ist immer Ziel minus Start.</p>
      <div class="formula-stack">
        <div class="formula">AB = B − A = (1; 0; 0)</div>
        <div class="formula">AC = C − A = (0,5; 1; 0)</div>
        <div class="formula formula-accent">n = AB × AC = (0; 0; 1)</div>
      </div>
      <p class="lesson-text">Das Kreuzprodukt steht senkrecht auf beiden Spannvektoren und damit senkrecht auf der Dreiecksfläche. Der berechnete Vektor hat bereits die Länge 1.</p>
      <div class="lesson-warning"><strong>Reihenfolge beachten:</strong> u × v = −(v × u). Der Betrag bleibt gleich, aber die Normale zeigt in die entgegengesetzte Richtung.</div>

      <h4 class="lesson-subheading">3b: Innenwinkel</h4>
      <div class="formula formula-accent">α = arccos((u · v) / (‖u‖ · ‖v‖))</div>
      <p class="lesson-text">Für jeden Eckpunkt müssen beide verwendeten Vektoren genau an diesem Eckpunkt beginnen.</p>
      <div class="result-grid">
        <div><span>Winkel A</span><strong>≈ 63,43°</strong><small>zwischen AB und AC</small></div>
        <div><span>Winkel B</span><strong>≈ 63,43°</strong><small>zwischen BA und BC</small></div>
        <div><span>Winkel C</span><strong>≈ 53,13°</strong><small>zwischen CA und CB</small></div>
      </div>
      <div class="lesson-note"><strong>Plausibilitätskontrolle:</strong> 63,43° + 63,43° + 53,13° ≈ 180°.</div>

      <h4 class="lesson-subheading">3c: Kantenlängen</h4>
      <div class="formula">d(A,B) = ‖B − A‖</div>
      <div class="result-grid">
        <div><span>|AB|</span><strong>1</strong></div>
        <div><span>|BC|</span><strong>√5 / 2 ≈ 1,1180</strong></div>
        <div><span>|CA|</span><strong>√5 / 2 ≈ 1,1180</strong></div>
      </div>
      <p class="lesson-text">Da zwei Kanten gleich lang sind, ist das Dreieck gleichschenklig.</p>

      <details class="lesson-details">
        <summary>Robuste Winkelberechnung im Code</summary>
        <pre class="lesson-code"><code>double cosAlpha = dot(u, v) / (length(u) * length(v));
cosAlpha = Math.max(-1.0, Math.min(1.0, cosAlpha));
double alpha = Math.toDegrees(Math.acos(cosAlpha));</code></pre>
        <p>Das Begrenzen auf [−1,1] verhindert, dass kleine Gleitkommafehler bei <code>acos</code> zu <code>NaN</code> führen.</p>
      </details>
    </section>

    <section class="lesson-section" id="cg1-projektion">
      <div class="lesson-section-heading">
        <span class="lesson-number">05</span>
        <div><h3>Aufgabe 4: Orthogonale Projektion</h3><p>Herleitung der Projektion von v auf die Richtung u.</p></div>
      </div>

      <div class="formula formula-main">proj<sub>u</sub>(v) = ((u · v) / (u · u)) · u</div>

      <div class="derivation derivation-vertical">
        <div><span>1</span><p><strong>Richtung normieren:</strong><br>û = u / ‖u‖</p></div>
        <div><span>2</span><p><strong>Länge der Projektion:</strong><br>t = ‖v‖ cos(α)</p></div>
        <div><span>3</span><p><strong>Skalarprodukt einsetzen:</strong><br>u · v = ‖u‖ ‖v‖ cos(α), also t = (u · v) / ‖u‖</p></div>
        <div><span>4</span><p><strong>Länge mal Richtung:</strong><br>proj<sub>u</sub>(v) = t · û = ((u · v) / ‖u‖²) · u</p></div>
        <div><span>5</span><p><strong>Identität nutzen:</strong><br>‖u‖² = u · u</p></div>
      </div>

      <div class="lesson-grid lesson-grid-2">
        <div class="lesson-card"><h4>Warum der Nenner?</h4><p>Da u · u = ‖u‖² gilt, gleicht der Nenner die Länge beziehungsweise Skalierung von u aus. Das Ergebnis hängt nur von der Richtung von u ab.</p></div>
        <div class="lesson-card"><h4>u ist schon normalisiert</h4><p>Dann gilt u · u = 1 und die Formel vereinfacht sich zu:</p><div class="formula">proj<sub>u</sub>(v) = (u · v) · u</div></div>
      </div>
    </section>

    <section class="lesson-section" id="cg1-formeln">
      <div class="lesson-section-heading">
        <span class="lesson-number">06</span>
        <div><h3>Formelsammlung zu Blatt 1</h3><p>Die wichtigsten Formeln kompakt zum Lernen und Wiederholen.</p></div>
      </div>

      <div class="formula-list">
        <div><span>Vektor von A nach B</span><strong>AB = B − A</strong></div>
        <div><span>Vektorlänge</span><strong>‖v‖ = √(v<sub>x</sub>² + v<sub>y</sub>² + v<sub>z</sub>²) = √(v · v)</strong></div>
        <div><span>Normalisierung</span><strong>v̂ = v / ‖v‖, &nbsp; ‖v̂‖ = 1</strong></div>
        <div><span>Skalarprodukt</span><strong>u · v = u<sub>x</sub>v<sub>x</sub> + u<sub>y</sub>v<sub>y</sub> + u<sub>z</sub>v<sub>z</sub></strong></div>
        <div><span>Geometrisches Skalarprodukt</span><strong>u · v = ‖u‖ ‖v‖ cos(α)</strong></div>
        <div><span>Winkel</span><strong>α = arccos((u · v) / (‖u‖ ‖v‖))</strong></div>
        <div><span>Orthogonalität</span><strong>u ⟂ v ⇔ u · v = 0</strong></div>
        <div><span>Kreuzprodukt</span><strong>u × v = (u<sub>y</sub>v<sub>z</sub>−u<sub>z</sub>v<sub>y</sub>, u<sub>z</sub>v<sub>x</sub>−u<sub>x</sub>v<sub>z</sub>, u<sub>x</sub>v<sub>y</sub>−u<sub>y</sub>v<sub>x</sub>)</strong></div>
        <div><span>Dreiecksnormalenvektor</span><strong>n = (B − A) × (C − A)</strong></div>
        <div><span>Normalisierte Normale</span><strong>n̂ = n / ‖n‖</strong></div>
        <div><span>Dreiecksfläche</span><strong>A<sub>△</sub> = ½ ‖(B − A) × (C − A)‖</strong></div>
        <div><span>Orthogonale Projektion</span><strong>proj<sub>u</sub>(v) = ((u · v) / (u · u)) · u</strong></div>
      </div>

      <div class="lesson-callout"><strong>OpenGL:</strong> <code>glClearColor(r,g,b,a)</code> legt die Löschfarbe fest; <code>glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT)</code> löscht die Puffer.</div>
    </section>

    <section class="lesson-section" id="cg1-wichtig">
      <div class="lesson-section-heading">
        <span class="lesson-number">07</span>
        <div><h3>Was du wirklich können solltest</h3><p>Priorisierung für deine Klausurvorbereitung.</p></div>
      </div>
      <div class="priority-grid">
        <div class="priority-card priority-high"><span>Sehr wichtig</span><ul><li>Differenzvektoren bilden</li><li>Vektorlänge und Normalisierung</li><li>Skalarprodukt und Winkel</li><li>Kreuzprodukt und Normalen</li><li>Orthogonale Projektion herleiten und anwenden</li></ul></div>
        <div class="priority-card"><span>Grundverständnis</span><ul><li>init, update und draw unterscheiden</li><li>Bedeutung von deltaTime</li><li>RGBA-Werte in OpenGL</li><li>glClearColor vs. glClear</li></ul></div>
        <div class="priority-card priority-low"><span>Nicht auswendig lernen</span><ul><li>vollständige Swing-GUI</li><li>Screenshot-Code</li><li>konkrete Fenstergrößen</li><li>sämtliche Framework-Initialisierungen</li></ul></div>
      </div>
    </section>

    <section class="lesson-section" id="cg1-test">
      <div class="lesson-section-heading">
        <span class="lesson-number">08</span>
        <div><h3>Deine Fragen und klausurreifen Antworten</h3><p>Erst selbst beantworten, dann die Lösung aufklappen.</p></div>
      </div>

      <div class="qa-list">
        <details class="qa-item"><summary><span>1</span>Warum berechnet man eine Dreiecksnormalen mit (B−A) × (C−A)?</summary><div><p>Die beiden Differenzvektoren liegen auf der Dreiecksfläche und spannen sie auf. Ihr Kreuzprodukt liefert einen Vektor, der senkrecht auf beiden Spannvektoren und damit senkrecht auf der Dreiecksfläche steht.</p></div></details>
        <details class="qa-item"><summary><span>2</span>Was ändert sich, wenn man die Reihenfolge beim Kreuzprodukt vertauscht?</summary><div><p>Der Betrag bleibt gleich, aber der Vektor zeigt in die entgegengesetzte Richtung: u × v = −(v × u). Dadurch ändert sich die Orientierung der Normalen.</p></div></details>
        <details class="qa-item"><summary><span>3</span>Welche Länge besitzt jeder normalisierte Vektor?</summary><div><p>Ein normalisierter Vektor besitzt immer die Länge 1 und heißt deshalb Einheitsvektor.</p></div></details>
        <details class="qa-item"><summary><span>4</span>Warum steht bei der Projektionsformel u · u im Nenner?</summary><div><p>Es gilt u · u = ‖u‖². Der Nenner gleicht die Länge von u aus, sodass die Projektion nur von der Richtung des Vektors und nicht von seiner Skalierung abhängt.</p></div></details>
        <details class="qa-item"><summary><span>5</span>Warum reicht glClearColor() allein nicht aus?</summary><div><p>glClearColor() legt nur fest, welche Farbe beim Löschen verwendet werden soll. Erst glClear(GL_COLOR_BUFFER_BIT) überschreibt den Farbpuffer tatsächlich mit dieser Farbe.</p></div></details>
      </div>

      <button class="start-btn lesson-quiz-button" onclick="startLessonQuiz()">Quiz zu Blatt 1 starten · 12 Fragen →</button>
    </section>
  </article>`;

// ─────────────────────────────────────────────────────────────────────────────
// Aufgabenblatt 2: Orientierung, Linien, offener Würfel und Möbiusband
// ─────────────────────────────────────────────────────────────────────────────

const CG_SHEET_2_QUESTIONS = [
  {
    cat: "Orientierung",
    q: "Wodurch wird bei einem Dreieck die Richtung seiner Vorderseite bestimmt?",
    code: "int[] indices = {0, 1, 2};",
    opts: [
      "Nur durch die Farbe des Dreiecks",
      "Durch die Reihenfolge der Eckpunkte beziehungsweise die Winding Order",
      "Nur durch die Position der Kamera",
      "Durch die Anzahl der Indizes"
    ],
    ans: 1,
    exp: "Die Reihenfolge der Vertices legt die Orientierung fest. In OpenGL gilt standardmäßig eine gegen den Uhrzeigersinn durchlaufene Fläche als Vorderseite.",
    source: "Aufgabenblatt 2 · Aufgabe 1.1"
  },
  {
    cat: "Orientierung",
    q: "Was passiert, wenn bei einem Dreieck zwei Indizes vertauscht werden?",
    code: "{0, 1, 2}  →  {0, 2, 1}",
    opts: [
      "Das Dreieck wird größer.",
      "Die Orientierung und die Richtung der Normalen kehren sich um.",
      "Das Dreieck wird automatisch gelöscht.",
      "Nur die Linienfarbe ändert sich."
    ],
    ans: 1,
    exp: "Das Vertauschen zweier Eckpunkte kehrt den Durchlaufsinn um. Da das Kreuzprodukt seine Richtung wechselt, zeigt auch die Normale in die Gegenrichtung.",
    source: "Aufgabenblatt 2 · Aufgabe 1.1"
  },
  {
    cat: "Culling",
    q: "Was bewirkt glEnable(GL_CULL_FACE)?",
    code: null,
    opts: [
      "Es aktiviert das Verwerfen bestimmter Vorder- oder Rückseiten.",
      "Es zeichnet automatisch alle Kanten.",
      "Es deaktiviert den Tiefentest.",
      "Es normalisiert alle Normalen."
    ],
    ans: 0,
    exp: "Face Culling sorgt dafür, dass die mit glCullFace ausgewählte Seite nicht gerendert wird.",
    source: "Aufgabenblatt 2 · Aufgabe 1.1b"
  },
  {
    cat: "Culling",
    q: "Wie werden Vorderseiten grün und Rückseiten rot dargestellt?",
    code: null,
    opts: [
      "Einmal zeichnen und GL_FRONT_AND_BACK verwerfen",
      "Zweimal zeichnen: zuerst Rückseiten verwerfen und grün zeichnen, danach Vorderseiten verwerfen und rot zeichnen",
      "Nur glClearColor auf Grün und danach Rot setzen",
      "Das Mesh muss dafür dupliziert und verschoben werden"
    ],
    ans: 1,
    exp: "Beim ersten Durchlauf wird GL_BACK gecullt, sodass nur Vorderseiten grün erscheinen. Beim zweiten wird GL_FRONT gecullt, sodass nur Rückseiten rot erscheinen.",
    source: "Aufgabenblatt 2 · Aufgabe 1.1b"
  },
  {
    cat: "Linienindizes",
    q: "Welche Linienindizes entstehen aus einem Dreieck mit den Indizes a, b, c?",
    code: null,
    opts: [
      "a,b, b,c, c,a",
      "a,b,c",
      "a,a, b,b, c,c",
      "a,c, c,b"
    ],
    ans: 0,
    exp: "GL_LINES interpretiert immer zwei aufeinanderfolgende Indizes als eine Linie. Deshalb werden die drei Kanten als (a,b), (b,c) und (c,a) gespeichert.",
    source: "Aufgabenblatt 2 · Aufgabe 1.2"
  },
  {
    cat: "Linienindizes",
    q: "Wie viele Linienindizes werden für ein Dreieck benötigt?",
    code: null,
    opts: ["2", "3", "6", "9"],
    ans: 2,
    exp: "Ein Dreieck besitzt drei Kanten und jede Linie benötigt zwei Indizes. Damit entstehen 3 · 2 = 6 Linienindizes.",
    source: "Aufgabenblatt 2 · Aufgabe 1.2"
  },
  {
    cat: "Linienindizes",
    q: "Warum darf eine gemeinsame Kante bei der einfachen Hilfsfunktion doppelt vorkommen?",
    code: null,
    opts: [
      "Weil GL_LINES sonst nicht funktioniert",
      "Weil das Entfernen doppelter Kanten zusätzliche Nachbarschafts- beziehungsweise Topologieanalyse benötigen würde",
      "Weil jede Kante immer zweimal gerendert werden muss",
      "Damit die Normale berechnet werden kann"
    ],
    ans: 1,
    exp: "Die Aufgabenstellung erlaubt doppelte Kanten bewusst. Eine eindeutige Kantenmenge zu bilden wäre aufwendiger, weil ungeordnete Vertexpaare verglichen werden müssten.",
    source: "Aufgabenblatt 2 · Aufgabe 1.2a"
  },
  {
    cat: "Offener Würfel",
    q: "Wie viele eindeutige Eckpunkte benötigt ein Würfel, wenn die Eckpunkte zwischen den Flächen geteilt werden?",
    code: null,
    opts: ["6", "8", "12", "24"],
    ans: 1,
    exp: "Ein Würfel besitzt acht geometrisch unterschiedliche Ecken. Die Dreiecke verweisen über Indizes mehrfach auf diese acht Vertices.",
    source: "Aufgabenblatt 2 · Aufgabe 2"
  },
  {
    cat: "Offener Würfel",
    q: "Warum ist ein Würfel mit zwei fehlenden Seiten ein offenes Mesh?",
    code: null,
    opts: [
      "Weil er weniger als acht Vertices besitzt",
      "Weil Randkanten existieren, die nur zu einer Facette gehören",
      "Weil alle Normalen nach innen zeigen",
      "Weil GL_LINES verwendet wird"
    ],
    ans: 1,
    exp: "An den Öffnungen liegen Kanten, die nur Teil einer Fläche sind. Diese Kanten bilden den Rand des offenen Meshes.",
    source: "Aufgabenblatt 2 · Aufgabe 2"
  },
  {
    cat: "Möbiusband",
    q: "Wie entsteht anschaulich ein Möbiusband?",
    code: null,
    opts: [
      "Ein Streifen wird ohne Verdrehung zu einem Ring verklebt.",
      "Ein Streifen wird um 180 Grad verdreht und anschließend an den Enden verklebt.",
      "Zwei Würfel werden ineinander geschoben.",
      "Ein Kreis wird in zwei Hälften geteilt."
    ],
    ans: 1,
    exp: "Die halbe Drehung vor dem Verkleben ist die entscheidende Eigenschaft des Möbiusbandes.",
    source: "Aufgabenblatt 2 · Aufgabe 3"
  },
  {
    cat: "Möbiusband",
    q: "Warum kommt in der Parametrisierung der Winkel u/2 vor?",
    code: null,
    opts: [
      "Damit das Band doppelt so schnell um den Ursprung läuft",
      "Damit sich der Querschnitt während eines vollständigen Umlaufs nur um 180 Grad dreht",
      "Damit alle Koordinaten positiv sind",
      "Damit die Breite immer null wird"
    ],
    ans: 1,
    exp: "Wenn u von 0 bis 2π läuft, läuft u/2 nur von 0 bis π. Das entspricht genau einer halben Drehung des Streifens.",
    source: "Aufgabenblatt 2 · Aufgabe 3"
  },
  {
    cat: "Möbiusband",
    q: "Welche besondere topologische Eigenschaft besitzt ein Möbiusband?",
    code: null,
    opts: [
      "Es besitzt zwei getrennte Vorderseiten.",
      "Es ist nicht orientierbar und besitzt nur eine zusammenhängende Seite.",
      "Es ist immer ein geschlossenes Volumen.",
      "Es besitzt keinen Rand."
    ],
    ans: 1,
    exp: "Eine Normale kann nicht global konsistent gewählt werden. Nach einem Umlauf kommt sie mit umgekehrter Richtung zurück. Außerdem besitzt das Band nur eine zusammenhängende Seite.",
    source: "Aufgabenblatt 2 · Aufgabe 3"
  },
  {
    cat: "Möbiusband",
    q: "Was muss beim Schließen des diskretisierten Möbiusbandes an der Naht beachtet werden?",
    code: null,
    opts: [
      "Die Breitenindizes werden in derselben Reihenfolge verbunden.",
      "Die Reihenfolge der Breitenindizes muss an der Naht umgekehrt werden.",
      "Alle Vertices an der Naht werden gelöscht.",
      "Die z-Koordinate wird auf null gesetzt."
    ],
    ans: 1,
    exp: "Durch die halbe Verdrehung entspricht die eine Seite des letzten Querschnitts der gegenüberliegenden Seite des ersten Querschnitts. Deshalb muss j mit widthSteps − j verbunden werden.",
    source: "Aufgabenblatt 2 · Aufgabe 3"
  },
  {
    cat: "Möbiusband",
    q: "Was geschieht mit einer kontinuierlich mitgeführten Normalen nach einem vollständigen Umlauf über das Möbiusband?",
    code: null,
    opts: [
      "Sie ist unverändert.",
      "Sie ist doppelt so lang.",
      "Sie zeigt in die entgegengesetzte Richtung.",
      "Sie wird automatisch zum Nullvektor."
    ],
    ans: 2,
    exp: "Die Normale kehrt nach einem Umlauf als −n zurück. Genau deshalb ist keine global konsistente Vorder- und Rückseite definierbar.",
    source: "Aufgabenblatt 2 · Aufgabe 3"
  }
];

const CG_SHEET_2_CHAT = `
    <section class="lesson-section chat-lesson-section" id="cg2-chat">
      <div class="lesson-section-heading">
        <span class="lesson-number">💬</span>
        <div><h3>Lern-Chat zu Blatt 2</h3><p>Die ausführliche Erklärung zu Orientierung, Linien, offenem Würfel und besonders zum Möbiusband.</p></div>
      </div>

      <div class="study-chat" aria-label="Scrollbarer Lern-Chat zu Aufgabenblatt 2">
        <div class="chat-message chat-assistant">
          <div class="chat-role">ChatGPT</div>
          <h3>Blatt 2 – Verständnis und Kontrolle</h3>
          <p>Auf Blatt 2 geht es nicht nur darum, Geometrien zu programmieren. Der eigentliche Lernstoff sind die <strong>Orientierung von Dreiecken</strong>, das <strong>Indexieren von Flächen und Linien</strong>, offene polygonale Netze und die besondere Topologie des <strong>Möbiusbandes</strong>.</p>

          <h4>Aufgabe 1.1: Orientierung von Dreiecken</h4>
          <p>Ein Dreieck besteht nicht nur aus drei Punkten. Auch die Reihenfolge dieser Punkte ist wichtig. Die Indizes <code>{0,1,2}</code> und <code>{0,2,1}</code> benutzen dieselben Vertices, besitzen aber die entgegengesetzte Orientierung.</p>
          <div class="chat-formula">n = (v<sub>1</sub> − v<sub>0</sub>) × (v<sub>2</sub> − v<sub>0</sub>)</div>
          <p>Vertauscht man zwei Vertices, wechselt das Kreuzprodukt sein Vorzeichen. Die Normale zeigt also genau andersherum. OpenGL verwendet standardmäßig <strong>Counter Clockwise</strong> als Vorderseite.</p>
          <pre class="chat-code"><code>int[] indices = {
    0, 1, 2,   // gegen Uhrzeigersinn: Vorderseite
    1, 2, 3    // umgekehrte Orientierung: Rückseite
};</code></pre>
          <p>Bei zwei benachbarten Dreiecken reichen vier eindeutige Vertices aus, weil beide Dreiecke eine Kante teilen.</p>

          <h4>Vorderseite grün, Rückseite rot</h4>
          <p>Culling färbt keine Seite. Es <strong>verwirft</strong> eine ausgewählte Seite. Deshalb wird jedes Mesh zweimal gezeichnet:</p>
          <pre class="chat-code"><code>glEnable(GL_CULL_FACE);

// Nur Vorderseiten bleiben übrig
 glCullFace(GL_BACK);
 shader.setUniform("uColor", Color.green());
 mesh.draw();

// Nur Rückseiten bleiben übrig
 glCullFace(GL_FRONT);
 shader.setUniform("uColor", Color.red());
 mesh.draw();</code></pre>
          <div class="chat-note"><strong>Merksatz:</strong> <code>glCullFace(GL_BACK)</code> verwirft Rückseiten. Dadurch sieht man die Vorderseiten. <code>glCullFace(GL_FRONT)</code> verwirft Vorderseiten. Dadurch sieht man die Rückseiten.</div>

          <h4>Aufgabe 1.2: Linienindizes</h4>
          <p>Bei <code>GL_TRIANGLES</code> bilden jeweils drei Indizes ein Dreieck. Bei <code>GL_LINES</code> bilden jeweils zwei Indizes eine Linie.</p>
          <div class="chat-formula">Dreieck (a,b,c) → Linien (a,b), (b,c), (c,a)</div>
          <pre class="chat-code"><code>private int[] createLineIndices(int[] triangleIndices) {
    int triangleCount = triangleIndices.length / 3;
    int[] lineIndices = new int[triangleCount * 6];

    int out = 0;
    for (int i = 0; i &lt; triangleIndices.length; i += 3) {
        int a = triangleIndices[i];
        int b = triangleIndices[i + 1];
        int c = triangleIndices[i + 2];

        lineIndices[out++] = a; lineIndices[out++] = b;
        lineIndices[out++] = b; lineIndices[out++] = c;
        lineIndices[out++] = c; lineIndices[out++] = a;
    }
    return lineIndices;
}</code></pre>
          <p>Gemeinsame Kanten dürfen dabei doppelt vorkommen. Das ist nicht speichereffizient, aber für diese Aufgabe bewusst erlaubt.</p>

          <h4>Aufgabe 2: Offener Würfel</h4>
          <p>Ein Würfel besitzt acht eindeutige Eckpunkte. Jede geschlossene quadratische Seite wird durch zwei Dreiecke dargestellt. Werden zwei Seiten weggelassen, entstehen an den Öffnungen Randkanten. Das Mesh ist deshalb offen.</p>
          <div class="chat-formula">6 Würfelseiten − 2 Öffnungen = 4 Flächen<br>4 Flächen · 2 Dreiecke = 8 Dreiecke</div>
          <p>Wichtig ist, alle sichtbaren Flächen von außen in derselben Umlaufrichtung zu definieren. Sonst zeigen einzelne Normalen nach innen und die Culling-Farben wirken falsch.</p>

          <h4>Aufgabe 3: Möbiusband – langsam und anschaulich</h4>
          <p>Stell dir einen Papierstreifen vor. Bei einem normalen Ring klebst du die Enden direkt zusammen. Bei einem Möbiusband drehst du vorher ein Ende um <strong>180 Grad</strong> und klebst erst dann.</p>
          <div class="moebius-mini-steps">
            <span>1. gerader Streifen</span><b>→</b><span>2. halbe Drehung</span><b>→</b><span>3. Enden verbinden</span>
          </div>
          <p>Dadurch werden die scheinbare Ober- und Unterseite miteinander verbunden. Ein Stift kann ohne Absetzen die gesamte Fläche bemalen und gelangt wieder zum Startpunkt, aber zunächst auf der vermeintlich anderen Seite.</p>
          <div class="chat-success"><strong>Das Wichtigste:</strong> Ein Möbiusband besitzt nur eine zusammenhängende Seite und nur eine zusammenhängende Randkurve.</div>

          <h5>Die zwei Parameter</h5>
          <p><strong>u</strong> läuft einmal um den großen Kreis herum. <strong>v</strong> läuft quer über die Breite des Bandes.</p>
          <div class="chat-formula chat-formula-main">
            x(u,v) = (R + v/2 · cos(u/2)) · cos(u)<br>
            y(u,v) = (R + v/2 · cos(u/2)) · sin(u)<br>
            z(u,v) = v/2 · sin(u/2)
          </div>
          <p>Dabei ist <code>0 ≤ u &lt; 2π</code>. Für die Breite kann beispielsweise <code>−w ≤ v ≤ w</code> benutzt werden.</p>

          <h5>Warum steht dort u/2?</h5>
          <p>Während <code>u</code> von 0 bis 2π läuft, läuft <code>u/2</code> nur von 0 bis π. Ein Winkel von π entspricht 180 Grad. Genau dadurch erhält der Streifen während eines Umlaufs eine halbe Drehung.</p>
          <div class="chat-formula">u: 0 → 2π &nbsp;&nbsp; ⇒ &nbsp;&nbsp; u/2: 0 → π = 180°</div>

          <h5>Warum ist das Möbiusband nicht orientierbar?</h5>
          <p>Wähle an einem Punkt eine Normale und transportiere sie kontinuierlich entlang des Bandes. Nach einem vollständigen Umlauf befindest du dich wieder am gleichen geometrischen Ort, aber die Normale zeigt in die entgegengesetzte Richtung.</p>
          <div class="chat-formula chat-formula-accent">n nach einem Umlauf → −n</div>
          <p>Deshalb kann man nicht überall widerspruchsfrei festlegen, was Vorderseite und was Rückseite ist. Lokal besitzt jedes Dreieck eine Vorderseite. Global lässt sich diese Wahl aber nicht für das gesamte Band konsistent fortsetzen.</p>

          <h5>Die Naht beim Erzeugen des Meshes</h5>
          <p>Beim letzten Segment muss das Band wieder mit dem ersten Segment verbunden werden. Wegen der halben Drehung wird die Breitenrichtung dabei umgekehrt.</p>
          <div class="chat-formula">letztes Segment, Breitenindex j → erstes Segment, Breitenindex (widthSteps − j)</div>
          <p>Ohne diese Umkehrung würdest du einen gewöhnlichen Ring oder eine falsch verdrehte Naht erzeugen.</p>
          <pre class="chat-code"><code>boolean seam = (i == uSteps - 1);
int nextI = (i + 1) % uSteps;

int nextJ0 = seam ? widthSteps - j     : j;
int nextJ1 = seam ? widthSteps - j - 1 : j + 1;</code></pre>

          <h4>Was du aus Blatt 2 mitnehmen musst</h4>
          <div class="chat-formula-list">
            <div><b>Orientierung</b><span>Reihenfolge der Vertices bestimmt Vorderseite und Normale</span></div>
            <div><b>Culling</b><span>ausgewählte Seite wird verworfen, nicht gefärbt</span></div>
            <div><b>Linienindizes</b><span>(a,b,c) → (a,b), (b,c), (c,a)</span></div>
            <div><b>Offenes Mesh</b><span>besitzt Randkanten, die nur zu einer Facette gehören</span></div>
            <div><b>Möbiusband</b><span>halbe Drehung, eine Seite, eine Randkurve, nicht orientierbar</span></div>
          </div>
        </div>
      </div>
      <p class="chat-scroll-hint">↕ Im Lern-Chat kannst du unabhängig von der restlichen Seite scrollen.</p>
    </section>`;

const CG_SHEET_2_CONTENT = `
  <article class="lesson-page">
    <section class="lesson-hero">
      <div>
        <span class="eyebrow">Computergrafik · Aufgabenblatt 2</span>
        <h2>Orientierung, Linien, offener Würfel &amp; Möbiusband</h2>
        <p>Von der Winding Order über Face Culling bis zur nicht orientierbaren Fläche.</p>
      </div>
      <span class="lesson-badge">Blatt 2</span>
    </section>

    <nav class="lesson-toc" aria-label="Inhaltsverzeichnis Blatt 2">
      <a href="#cg2-chat">Lern-Chat</a>
      <a href="#cg2-orientierung">Orientierung</a>
      <a href="#cg2-linien">Linien</a>
      <a href="#cg2-cube">Würfel</a>
      <a href="#cg2-moebius">Möbiusband</a>
      <a href="#cg2-formeln">Formeln</a>
      <a href="#cg2-test">Fragen</a>
    </nav>

    ${CG_SHEET_2_CHAT}

    <section class="lesson-section" id="cg2-orientierung">
      <div class="lesson-section-heading">
        <span class="lesson-number">01</span>
        <div><h3>Aufgabe 1.1: Orientierung von Dreiecken</h3><p>Warum dieselben drei Punkte zwei verschiedene Seitenrichtungen besitzen können.</p></div>
      </div>

      <div class="lesson-grid lesson-grid-2">
        <div class="lesson-card">
          <h4>Winding Order</h4>
          <p>Die Reihenfolge der Indizes bestimmt den Umlaufsinn. OpenGL betrachtet standardmäßig gegen den Uhrzeigersinn definierte Dreiecke als Vorderseiten.</p>
          <div class="formula">CCW → Vorderseite<br>CW → Rückseite</div>
        </div>
        <div class="lesson-card">
          <h4>Normalenrichtung</h4>
          <p>Die Reihenfolge wirkt direkt auf das Kreuzprodukt.</p>
          <div class="formula">n = (v₁ − v₀) × (v₂ − v₀)</div>
          <div class="formula">(v₂ − v₀) × (v₁ − v₀) = −n</div>
        </div>
      </div>

      <h4 class="lesson-subheading">Zwei benachbarte Dreiecke mit nur vier Vertices</h4>
      <pre class="lesson-code"><code>float[] positions = {
    -0.5f, -0.5f, 0.0f,  // v0
     0.5f, -0.5f, 0.0f,  // v1
    -0.5f,  0.5f, 0.0f,  // v2
     0.5f,  0.5f, 0.0f   // v3
};

int[] indices = {
    0, 1, 2,   // Normale zeigt zum Betrachter
    1, 2, 3    // gleiche Punktebene, umgekehrte Orientierung
};</code></pre>
      <div class="lesson-warning"><strong>Warum minimal?</strong> Zwei getrennte Dreiecke hätten sechs gespeicherte Vertices. Da die Dreiecke eine Kante teilen, genügen vier eindeutige Vertices.</div>

      <h4 class="lesson-subheading">Zweifarbiges Rendern mit Face Culling</h4>
      <div class="lesson-flow">
        <div class="flow-step"><strong>1. aktivieren</strong><code>glEnable(GL_CULL_FACE)</code><small>Culling einschalten</small></div>
        <div class="flow-arrow">→</div>
        <div class="flow-step"><strong>2. Vorderseiten</strong><code>glCullFace(GL_BACK)</code><small>grün zeichnen</small></div>
        <div class="flow-arrow">→</div>
        <div class="flow-step"><strong>3. Rückseiten</strong><code>glCullFace(GL_FRONT)</code><small>rot zeichnen</small></div>
      </div>
      <pre class="lesson-code"><code>glEnable(GL_CULL_FACE);

for (Mesh mesh : meshes) {
    glCullFace(GL_BACK);
    shader.setUniform("uColor", Color.green());
    mesh.draw();

    glCullFace(GL_FRONT);
    shader.setUniform("uColor", Color.red());
    mesh.draw();
}

glDisable(GL_CULL_FACE);</code></pre>
      <div class="lesson-note"><strong>Nicht verwechseln:</strong> <code>glCullFace(GL_BACK)</code> bedeutet nicht „Rückseiten zeichnen“, sondern „Rückseiten wegwerfen“.</div>
    </section>

    <section class="lesson-section" id="cg2-linien">
      <div class="lesson-section-heading">
        <span class="lesson-number">02</span>
        <div><h3>Aufgabe 1.2: Dreieckskanten als Linien</h3><p>Aus Face-Indizes werden Linien-Indizes.</p></div>
      </div>

      <div class="lesson-grid lesson-grid-2">
        <div class="lesson-card"><h4>GL_TRIANGLES</h4><p>Je drei Indizes bilden ein Dreieck.</p><div class="formula">a, b, c</div></div>
        <div class="lesson-card"><h4>GL_LINES</h4><p>Je zwei Indizes bilden eine einzelne Linie.</p><div class="formula">a,b &nbsp; b,c &nbsp; c,a</div></div>
      </div>

      <div class="formula formula-main">Für n Dreiecke: 3n Dreiecksindizes → 6n Linienindizes</div>
      <pre class="lesson-code"><code>private int[] createLineIndices(int[] triangleIndices) {
    if (triangleIndices == null || triangleIndices.length % 3 != 0) {
        throw new IllegalArgumentException("Dreiecksindizes müssen in Dreiergruppen vorliegen.");
    }

    int[] lineIndices = new int[(triangleIndices.length / 3) * 6];
    int out = 0;

    for (int i = 0; i &lt; triangleIndices.length; i += 3) {
        int a = triangleIndices[i];
        int b = triangleIndices[i + 1];
        int c = triangleIndices[i + 2];

        lineIndices[out++] = a; lineIndices[out++] = b;
        lineIndices[out++] = b; lineIndices[out++] = c;
        lineIndices[out++] = c; lineIndices[out++] = a;
    }
    return lineIndices;
}</code></pre>
      <p class="lesson-text">Das Linienmesh verwendet dieselben Positionen wie das Flächenmesh, aber andere Indizes. Es wird anschließend mit <code>mesh.draw(GL_LINES)</code> und einer blauen Diffusfarbe gezeichnet.</p>
      <div class="lesson-warning"><strong>Darstellungsartefakte:</strong> Fläche und Linie liegen exakt an derselben Position. Dadurch können Tiefenpuffer-Artefakte entstehen. Die Aufgabenstellung weist außerdem darauf hin, dass <code>glLineWidth()</code> nicht auf jeder GPU vollständig unterstützt wird.</div>
    </section>

    <section class="lesson-section" id="cg2-cube">
      <div class="lesson-section-heading">
        <span class="lesson-number">03</span>
        <div><h3>Aufgabe 2: Offener Würfel</h3><p>Acht Vertices, vier vorhandene Seiten und ein sichtbarer Rand.</p></div>
      </div>

      <div class="result-grid">
        <div><span>Eindeutige Vertices</span><strong>8</strong></div>
        <div><span>Vorhandene Seiten</span><strong>4</strong></div>
        <div><span>Dreiecke</span><strong>8</strong></div>
      </div>

      <p class="lesson-text">Mit der halben Kantenlänge <code>s</code> besitzen alle Eckpunkte Koordinaten aus der Menge <code>{−s,+s}</code>. Dadurch liegt der Mittelpunkt des Würfels im Ursprung.</p>
      <pre class="lesson-code"><code>float s = 0.5f;
float[] positions = {
    -s,-s,-s,   s,-s,-s,   s, s,-s,  -s, s,-s,
    -s,-s, s,   s,-s, s,   s, s, s,  -s, s, s
};</code></pre>
      <p class="lesson-text">Ein mögliches Beispiel lässt die Vorder- und Oberseite weg. Die vier übrigen Seiten werden jeweils in zwei Dreiecke zerlegt:</p>
      <pre class="lesson-code"><code>int[] indices = {
    // Rückseite, Normale −z
    0, 2, 1,   0, 3, 2,

    // Unterseite, Normale −y
    0, 1, 5,   0, 5, 4,

    // linke Seite, Normale −x
    0, 4, 7,   0, 7, 3,

    // rechte Seite, Normale +x
    1, 2, 6,   1, 6, 5
};</code></pre>
      <div class="lesson-note"><strong>Offenes Mesh:</strong> Die Kanten rund um die beiden fehlenden Seiten gehören nur zu einer Facette. Sie bilden den Rand des Netzes.</div>
    </section>

    <section class="lesson-section moebius-focus" id="cg2-moebius">
      <div class="lesson-section-heading">
        <span class="lesson-number">04</span>
        <div><h3>Aufgabe 3: Das Möbiusband wirklich verstehen</h3><p>Geometrie, Parameter, Indizes und Nichtorientierbarkeit Schritt für Schritt.</p></div>
      </div>

      <div class="moebius-build">
        <div><span>1</span><strong>Papierstreifen</strong><small>zwei lange Ränder, scheinbar zwei Seiten</small></div>
        <div class="flow-arrow">→</div>
        <div><span>2</span><strong>180° verdrehen</strong><small>ein Ende wird auf den Kopf gestellt</small></div>
        <div class="flow-arrow">→</div>
        <div><span>3</span><strong>Enden verkleben</strong><small>Ober- und Unterseite gehen ineinander über</small></div>
      </div>

      <div class="lesson-grid lesson-grid-2">
        <div class="lesson-card">
          <h4>Parameter u</h4>
          <p>Läuft entlang des großen Kreisrings einmal um das Band.</p>
          <div class="formula">0 ≤ u &lt; 2π</div>
        </div>
        <div class="lesson-card">
          <h4>Parameter v</h4>
          <p>Läuft quer von einer Bandkante zur anderen.</p>
          <div class="formula">−w ≤ v ≤ w</div>
        </div>
      </div>

      <div class="formula-stack">
        <div class="formula formula-accent">x(u,v) = (R + v/2 · cos(u/2)) · cos(u)</div>
        <div class="formula formula-accent">y(u,v) = (R + v/2 · cos(u/2)) · sin(u)</div>
        <div class="formula formula-accent">z(u,v) = v/2 · sin(u/2)</div>
      </div>

      <h4 class="lesson-subheading">Die Formel in drei Gedanken zerlegen</h4>
      <div class="derivation derivation-vertical">
        <div><span>1</span><p><strong><code>cos(u)</code> und <code>sin(u)</code></strong><br>legen die Position auf einem Kreis um die z-Achse fest.</p></div>
        <div><span>2</span><p><strong><code>R + ...</code></strong><br>ist der aktuelle Abstand von der z-Achse. R ist der Hauptradius des Rings.</p></div>
        <div><span>3</span><p><strong><code>cos(u/2)</code> und <code>sin(u/2)</code></strong><br>drehen den Querschnitt während eines Umlaufs um genau 180 Grad.</p></div>
      </div>

      <div class="lesson-callout"><strong>Der entscheidende Punkt:</strong> u macht einen Vollkreis von 0 bis 2π. u/2 macht im gleichen Zeitraum nur einen Halbkreis von 0 bis π. Deshalb entsteht genau die halbe Verdrehung.</div>

      <h4 class="lesson-subheading">Vertices als zweidimensionales Gitter</h4>
      <p class="lesson-text">Für jeden Wert von <code>u</code> erzeugst du mehrere Punkte über die Breite <code>v</code>. Ein Vertex lässt sich mit einer eindimensionalen Arrayposition speichern:</p>
      <div class="formula">index(i,j) = i · (widthSteps + 1) + j</div>
      <pre class="lesson-code"><code>for (int i = 0; i &lt; uSteps; i++) {
    double u = 2.0 * Math.PI * i / uSteps;

    for (int j = 0; j &lt;= widthSteps; j++) {
        double v = -width + 2.0 * width * j / widthSteps;

        double x = (radius + 0.5 * v * Math.cos(0.5 * u)) * Math.cos(u);
        double y = (radius + 0.5 * v * Math.cos(0.5 * u)) * Math.sin(u);
        double z =  0.5 * v * Math.sin(0.5 * u);

        // x, y, z im positions-Array speichern
    }
}</code></pre>

      <h4 class="lesson-subheading">Jedes Gitterfeld wird zu zwei Dreiecken</h4>
      <div class="moebius-cell-grid">
        <span>d = (i,j+1)</span><span>c = (i+1,j+1)</span>
        <span>a = (i,j)</span><span>b = (i+1,j)</span>
      </div>
      <div class="formula">Dreiecke: (a,b,c) und (a,c,d)</div>

      <h4 class="lesson-subheading">Warum die Naht umgedreht verbunden wird</h4>
      <p class="lesson-text">Beim Übergang vom letzten u-Segment zum ersten Segment muss die Breite gespiegelt werden. Der Punkt an der linken Bandkante endet nach der halben Drehung an der rechten Bandkante.</p>
      <div class="formula formula-main">j am Ende ↔ widthSteps − j am Anfang</div>
      <pre class="lesson-code"><code>for (int i = 0; i &lt; uSteps; i++) {
    int nextI = (i + 1) % uSteps;
    boolean seam = (i == uSteps - 1);

    for (int j = 0; j &lt; widthSteps; j++) {
        int a = index(i, j);
        int d = index(i, j + 1);

        int nextJ0 = seam ? widthSteps - j     : j;
        int nextJ1 = seam ? widthSteps - j - 1 : j + 1;

        int b = index(nextI, nextJ0);
        int c = index(nextI, nextJ1);

        // a,b,c und a,c,d in das Indexarray schreiben
    }
}</code></pre>

      <h4 class="lesson-subheading">Nichtorientierbarkeit</h4>
      <div class="orientation-loop">
        <div><strong>Start</strong><span>Normale n zeigt nach oben</span></div>
        <div class="flow-arrow">→</div>
        <div><strong>ein Umlauf</strong><span>Normale wird kontinuierlich mitgeführt</span></div>
        <div class="flow-arrow">→</div>
        <div><strong>gleicher Ort</strong><span>Normale zeigt jetzt als −n nach unten</span></div>
      </div>
      <p class="lesson-text">Daraus entsteht ein Widerspruch, wenn man eine globale Vorderseite festlegen möchte. Ein einzelnes Dreieck ist orientiert, aber das gesamte Möbiusband ist nicht orientierbar.</p>
      <div class="lesson-warning"><strong>Folge beim Culling:</strong> Verfolgst du die lokal definierten Vorderseiten einmal um das Band, werden sie zwangsläufig zu Rückseiten. Deshalb kann ein Möbiusband nicht wie eine gewöhnliche geschlossene, orientierbare Oberfläche überall einheitlich behandelt werden.</div>
    </section>

    <section class="lesson-section" id="cg2-formeln">
      <div class="lesson-section-heading">
        <span class="lesson-number">05</span>
        <div><h3>Formelsammlung zu Blatt 2</h3><p>Das Wichtigste zum schnellen Wiederholen.</p></div>
      </div>

      <div class="formula-list">
        <div><span>Dreiecksnormalenvektor</span><strong>n = (v₁ − v₀) × (v₂ − v₀)</strong></div>
        <div><span>Orientierung umkehren</span><strong>(v₂ − v₀) × (v₁ − v₀) = −n</strong></div>
        <div><span>OpenGL-Vorderseite</span><strong>standardmäßig CCW</strong></div>
        <div><span>Culling aktivieren</span><strong>glEnable(GL_CULL_FACE)</strong></div>
        <div><span>Vorderseiten rendern</span><strong>glCullFace(GL_BACK)</strong></div>
        <div><span>Rückseiten rendern</span><strong>glCullFace(GL_FRONT)</strong></div>
        <div><span>Linien aus Dreieck</span><strong>(a,b,c) → (a,b), (b,c), (c,a)</strong></div>
        <div><span>Anzahl Linienindizes</span><strong>6 pro Dreieck</strong></div>
        <div><span>Gitterindex</span><strong>index(i,j) = i · (widthSteps + 1) + j</strong></div>
        <div><span>Möbius x</span><strong>x = (R + v/2 cos(u/2)) cos(u)</strong></div>
        <div><span>Möbius y</span><strong>y = (R + v/2 cos(u/2)) sin(u)</strong></div>
        <div><span>Möbius z</span><strong>z = v/2 sin(u/2)</strong></div>
        <div><span>Naht</span><strong>j ↔ widthSteps − j</strong></div>
        <div><span>Nichtorientierbarkeit</span><strong>Normale nach einem Umlauf: n → −n</strong></div>
      </div>
    </section>

    <section class="lesson-section" id="cg2-wichtig">
      <div class="lesson-section-heading">
        <span class="lesson-number">06</span>
        <div><h3>Was du wirklich können solltest</h3><p>Priorisierung für die Klausur.</p></div>
      </div>
      <div class="priority-grid">
        <div class="priority-card priority-high"><span>Sehr wichtig</span><ul><li>Winding Order erkennen und umkehren</li><li>Zusammenhang zwischen Vertexreihenfolge und Normale</li><li>Culling korrekt erklären</li><li>Linienindizes erzeugen</li><li>Möbiusparameter u und v verstehen</li><li>Nichtorientierbarkeit erklären</li></ul></div>
        <div class="priority-card"><span>Grundverständnis</span><ul><li>acht eindeutige Würfelvertices</li><li>Quadrat in zwei Dreiecke zerlegen</li><li>offenes Mesh und Randkanten</li><li>Gitter in ein eindimensionales Array abbilden</li><li>Naht des Möbiusbandes spiegeln</li></ul></div>
        <div class="priority-card priority-low"><span>Nicht stumpf auswendig lernen</span><ul><li>jede konkrete GUI-Zeile</li><li>beliebige Fenster- und Kamerawerte</li><li>genaue Anzahl der Möbiussegmente</li><li>deine vollständige Frameworkklasse</li></ul></div>
      </div>
    </section>

    <section class="lesson-section" id="cg2-test">
      <div class="lesson-section-heading">
        <span class="lesson-number">07</span>
        <div><h3>Verständnisfragen mit Musterantworten</h3><p>Erst selbst beantworten und danach aufklappen.</p></div>
      </div>

      <div class="qa-list">
        <details class="qa-item"><summary><span>1</span>Warum können dieselben drei Vertices zwei unterschiedlich orientierte Dreiecke bilden?</summary><div><p>Weil nicht nur die Punktmenge, sondern auch ihre Reihenfolge gespeichert wird. Durch Vertauschen zweier Indizes ändert sich der Umlaufsinn und das Kreuzprodukt erhält das entgegengesetzte Vorzeichen.</p></div></details>
        <details class="qa-item"><summary><span>2</span>Was ist der Unterschied zwischen glCullFace(GL_BACK) und „Rückseiten rendern“?</summary><div><p>glCullFace(GL_BACK) verwirft die Rückseiten. Dadurch werden nur Vorderseiten gerendert. Um Rückseiten zu rendern, muss stattdessen GL_FRONT verworfen werden.</p></div></details>
        <details class="qa-item"><summary><span>3</span>Wie werden aus dem Dreieck (a,b,c) Linienindizes?</summary><div><p>Die drei Dreieckskanten werden als drei Indexpärchen gespeichert: (a,b), (b,c) und (c,a). Das sind insgesamt sechs Indizes.</p></div></details>
        <details class="qa-item"><summary><span>4</span>Warum besitzt der offene Würfel einen Rand?</summary><div><p>An den beiden Öffnungen gibt es Kanten, die nur zu einer vorhandenen Facette gehören. Die Menge dieser Kanten ist der Rand des offenen Meshes.</p></div></details>
        <details class="qa-item"><summary><span>5</span>Was bedeuten u und v beim Möbiusband?</summary><div><p>u läuft entlang des Bandes einmal um den großen Kreis. v läuft quer über die Breite von einer Randkante zur anderen.</p></div></details>
        <details class="qa-item"><summary><span>6</span>Warum erzeugt u/2 eine halbe Verdrehung?</summary><div><p>Während u von 0 bis 2π einen vollständigen Umlauf macht, verändert sich u/2 nur von 0 bis π. π entspricht einer Drehung um 180 Grad.</p></div></details>
        <details class="qa-item"><summary><span>7</span>Warum ist das Möbiusband nicht orientierbar?</summary><div><p>Eine kontinuierlich mitgeführte Normale kehrt nach einem vollständigen Umlauf am gleichen Ort mit entgegengesetzter Richtung zurück. Daher kann keine widerspruchsfreie globale Vorderseite definiert werden.</p></div></details>
        <details class="qa-item"><summary><span>8</span>Warum werden die Breitenindizes an der Möbiusnaht umgekehrt?</summary><div><p>Durch die 180-Grad-Drehung entspricht die eine Bandkante am Ende der gegenüberliegenden Bandkante am Anfang. Deshalb wird j mit widthSteps − j verbunden.</p></div></details>
      </div>

      <button class="start-btn lesson-quiz-button" onclick="startLessonQuiz()">Quiz zu Blatt 2 starten · 14 Fragen →</button>
    </section>
  </article>`;
