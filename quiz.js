// ════════════════════════════════════════════
//  KONFIGURATION DER BLÖCKE
// ════════════════════════════════════════════
const BLOCKS = {
  block1: { title: "Block 1", sub: "Socket Programming", questions: BLOCK1, cats: ["All","Sockets","asyncio","Distributed Systems","Python"] },
  block2: { title: "Block 2", sub: "Web Services", questions: BLOCK2, cats: ["All","Flask","REST","RPyC","RPC & Architecture","Sockets & asyncio"] },
  block3: { title: "Block 3", sub: "Containerization", questions: BLOCK3, cats: ["All"] },
};

function getAllQuestions() {
  return [...BLOCK1, ...BLOCK2, ...BLOCK3];
}

// ════════════════════════════════════════════
//  QUIZ LOGIK
// ════════════════════════════════════════════
function shuffle(a){const r=[...a];for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]]}return r}
function shuffleOpts(q){const s=shuffle([0,1,2,3]);return{...q,opts:s.map(i=>q.opts[i]),ans:s.indexOf(q.ans)}}

let activeBlock=null, activePool=[], activeCats=["All"], questions=[], idx=0, score=0, sel=null, answered=false, phase='blockselect', filterCat='All';

function poolForBlock(key){
  if(key==='all') return getAllQuestions();
  return BLOCKS[key].questions;
}

function render(){
  const app=document.getElementById('app');

  // ── PHASE 1: Block-Auswahl ──
  if(phase==='blockselect'){
    const b1=BLOCK1.length, b2=BLOCK2.length, b3=BLOCK3.length, all=b1+b2+b3;
    app.innerHTML=`
      <div class="block-grid">
        <button class="block-card ${b1===0?'disabled':''}" ${b1===0?'':'onclick="selectBlock(\'block1\')"'}>
          ${b1===0?'<span class="bc-badge">in Arbeit</span>':''}
          <div class="bc-title">Block 1</div>
          <div class="bc-sub">Socket Programming</div>
          <span class="bc-count">${b1===0?'kommt noch':b1+' Fragen'}</span>
        </button>
        <button class="block-card" onclick="selectBlock('block2')">
          <div class="bc-title">Block 2</div>
          <div class="bc-sub">Web Services</div>
          <span class="bc-count">${b2} Fragen</span>
        </button>
        <button class="block-card ${b3===0?'disabled':''}" ${b3===0?'':'onclick="selectBlock(\'block3\')"'}>
          ${b3===0?'<span class="bc-badge">in Arbeit</span>':''}
          <div class="bc-title">Block 3</div>
          <div class="bc-sub">Containerization</div>
          <span class="bc-count">${b3===0?'kommt noch':b3+' Fragen'}</span>
        </button>
        <button class="block-card" onclick="selectBlock('all')">
          <div class="bc-title">🎓 Ganze Klausur</div>
          <div class="bc-sub">Alle verfügbaren Blöcke gemischt</div>
          <span class="bc-count">${all} Fragen</span>
        </button>
      </div>`;
    return;
  }

  // ── PHASE 2: Kategorie + Start ──
  if(phase==='start'){
    if(activePool.length===0){
      app.innerHTML=`
        <button class="back-link" onclick="phase='blockselect';render()">← Zurück zur Block-Auswahl</button>
        <div class="empty-note">Für diesen Block sind noch keine Fragen vorhanden.<br>Sie sind noch in Arbeit und kommen bald! 🚧</div>`;
      return;
    }
    const cnt=filterCat==='All'?activePool.length:activePool.filter(q=>q.cat===filterCat).length;
    app.innerHTML=`
      <button class="back-link" onclick="phase='blockselect';filterCat='All';render()">← Zurück zur Block-Auswahl</button>
      <div class="cat-filter">${activeCats.map(c=>`<button class="cat-btn${filterCat===c?' active':''}" onclick="setF('${c.replace(/'/g,"\\'")}')">${c}</button>`).join('')}</div>
      <p class="start-count">${cnt} Fragen ausgewählt</p>
      <button class="start-btn" ${cnt===0?'disabled':''} onclick="start()">Quiz starten →</button>`;
    return;
  }

  // ── PHASE 3: Ergebnis ──
  if(phase==='done'){
    const pct=Math.round(score/questions.length*100);
    const msg=pct>=80?'Sehr gut!':pct>=60?'Gut gemacht!':'Nochmal üben!';
    app.innerHTML=`
      <div class="score-wrap">
        <div class="score-ring"><div class="score-pct">${pct}%</div><div class="score-pct-label">Score</div></div>
        <div class="score-title">${msg}</div>
        <div class="score-sub">${score} von ${questions.length} Fragen richtig</div>
        <div class="score-grid">
          <div class="score-card"><div class="sc-label">Richtig</div><div class="sc-val sc-green">${score}</div></div>
          <div class="score-card"><div class="sc-label">Falsch</div><div class="sc-val sc-red">${questions.length-score}</div></div>
          <div class="score-card"><div class="sc-label">Gesamt</div><div class="sc-val">${questions.length}</div></div>
        </div>
        <div class="action-row">
          <button class="btn" onclick="phase='blockselect';filterCat='All';render()">Block wechseln</button>
          <button class="btn btn-accent" onclick="start()">Nochmal</button>
        </div>
      </div>`;
    return;
  }

  // ── PHASE 4: Frage ──
  const q=questions[idx];
  const pct=(idx/questions.length*100).toFixed(1);
  const keys=['A','B','C','D'];
  app.innerHTML=`
    <div class="progress-wrap">
      <div class="progress-row"><span>Frage ${idx+1} / ${questions.length}</span><span class="q-cat">${q.cat}</span></div>
      <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
    </div>
    <div class="q-card">
      <div class="q-text">${q.q}</div>
      ${q.code?`<div class="code-block">${q.code}</div>`:''}
      ${q.opts.map((o,i)=>{
        let cls='option-btn';
        if(answered){cls+=(i===q.ans)?' correct':(sel===i)?' wrong':'';}
        else if(sel===i) cls+=' selected';
        return `<button class="${cls}" ${answered?'disabled':''} onclick="pick(${i})"><span class="option-key">${keys[i]}</span><span>${o}</span></button>`;
      }).join('')}
    </div>
    ${answered?`<div class="feedback ${sel===q.ans?'ok':'bad'}">${sel===q.ans?'✓ Richtig':'✗ Falsch'} — ${q.exp}</div>`:''}
    <div class="action-row">
      ${!answered?`<button class="btn btn-accent" onclick="submit()">Antwort prüfen</button>`:''}
      ${answered?`<button class="btn btn-accent" onclick="next()">${idx+1<questions.length?'Nächste Frage →':'Ergebnis anzeigen'}</button>`:''}
    </div>`;
}

function selectBlock(key){
  activeBlock=key;
  activePool=poolForBlock(key);
  activeCats = key==='all' ? ["All"] : BLOCKS[key].cats;
  filterCat='All';
  phase='start';
  render();
}
function setF(c){filterCat=c;render()}
function getQ(){const p=filterCat==='All'?activePool:activePool.filter(q=>q.cat===filterCat);return shuffle(p).map(shuffleOpts);}
function start(){questions=getQ();idx=0;score=0;sel=null;answered=false;phase='quiz';render()}
function pick(i){if(answered)return;sel=i;render()}
function submit(){if(sel===null)return;answered=true;if(sel===questions[idx].ans)score++;render()}
function next(){idx++;sel=null;answered=false;if(idx>=questions.length)phase='done';render()}
render();
