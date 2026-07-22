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
