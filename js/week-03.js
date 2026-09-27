// A1 Week 3
(function(){
// ── TABS ──


// ── SPEAK ──


// ── PREPOSITIONS ──
const preps = [
  { prep:'em', art:'o → no, a → na', ex:'Estou no café. / Ela está na escola.', ru:'в/на' },
  { prep:'em', art:'os → nos, as → nas', ex:'Nos jardins há flores.', ru:'в/на (мн.ч.)' },
  { prep:'de', art:'o → do, a → da', ex:'Sou do Porto. / A chave da porta.', ru:'из/от/о' },
  { prep:'de', art:'os → dos, as → das', ex:'A lista dos alunos.', ru:'из/от (мн.ч.)' },
  { prep:'a', art:'o → ao, a → à', ex:'Vou ao banco. / Estou à porta.', ru:'к/в/на' },
  { prep:'a', art:'os → aos, as → às', ex:'Falei aos amigos.', ru:'к/в (мн.ч.)' },
  { prep:'por', art:'o → pelo, a → pela', ex:'Passei pelo parque. / Obrigado pela ajuda.', ru:'через/по/за' },
  { prep:'por', art:'os → pelos, as → pelas', ex:'Andar pelas ruas.', ru:'через/по (мн.ч.)' },
];

const pg = document.getElementById('W3prep-grid');
preps.forEach(p => {
  const el = document.createElement('div');
  el.className = 'prep-card';
  el.innerHTML = `
    <span class="prep-word">${p.prep} + artigo</span>
    <span class="prep-contract">${p.art}</span>
    <span class="prep-ru">${p.ru}</span>
    <span class="prep-ex">${p.ex}</span>`;
  pg.appendChild(el);
});

// ── PLACES ──
const places = [
  { pt:'a farmácia', ipa:'[fɐɾˈmasjɐ]', ru:'аптека', ex:'Preciso de ir à farmácia.' },
  { pt:'o supermercado', ipa:'[supɨɾmɨɾˈkadu]', ru:'супермаркет', ex:'Compro comida no supermercado.' },
  { pt:'a padaria', ipa:'[pɐdɐˈɾiɐ]', ru:'пекарня', ex:'Compro pão na padaria.' },
  { pt:'a estação', ipa:'[ɨʃtɐˈsãw̃]', ru:'вокзал / станция', ex:'O metro está na estação.' },
  { pt:'o museu', ipa:'[muˈzew]', ru:'музей', ex:'Fui ao museu ontem.' },
  { pt:'a praça', ipa:'[ˈpɾasɐ]', ru:'площадь', ex:'Encontro-me na praça.' },
  { pt:'o hospital', ipa:'[oʃpiˈtaɫ]', ru:'больница', ex:'O hospital fica longe.' },
  { pt:'o aeroporto', ipa:'[ɐɨɾuˈpɔɾtu]', ru:'аэропорт', ex:'Apanho o táxi no aeroporto.' },
  { pt:'a biblioteca', ipa:'[biblioˈtɛkɐ]', ru:'библиотека', ex:'Leio na biblioteca.' },
  { pt:'o restaurante', ipa:'[ʁɨʃtɐwˈɾãntɨ]', ru:'ресторан', ex:'Comemos num restaurante.' },
  { pt:'a rua', ipa:'[ˈʁuɐ]', ru:'улица', ex:'Moro nesta rua.' },
  { pt:'o banco', ipa:'[ˈbãku]', ru:'банк', ex:'Vou ao banco levantar dinheiro.' },
];

const plg = document.getElementById('W3places-grid');
places.forEach(p => {
  const el = document.createElement('div');
  el.className = 'vocab-card';
  el.innerHTML = `<span class="vc-pt">${p.pt}</span><span class="vc-ipa">${p.ipa}</span><span class="vc-ru">${p.ru}</span><span class="vc-ex">${p.ex}</span>`;
  el.onclick = () => speak(p.pt);
  plg.appendChild(el);
});

// ── DIALOGUE ──
const dialogueLines = [
  { side:'left',  avatar:'🧑', pt:'Desculpe, pode ajudar-me?', ipa:'[dɨʃˈkulpɨ | ˈpɔdɨ ɐʒuˈdaɾ mɨ]', ru:'Извините, вы можете мне помочь?' },
  { side:'right', avatar:'👩', pt:'Claro! Diga.', ipa:'[ˈklaɾu | ˈdiɡɐ]', ru:'Конечно! Говорите.' },
  { side:'left',  avatar:'🧑', pt:'Onde fica a estação de metro mais próxima?', ipa:'[ˈõndɨ ˈfikɐ ɐ ɨʃtɐˈsãw̃ dɨ ˈmɛtɾu mɐjʃ ˈpɾɔsimɐ]', ru:'Где ближайшая станция метро?' },
  { side:'right', avatar:'👩', pt:'Siga sempre em frente até ao semáforo, depois vire à esquerda.', ipa:'[ˈsiɡɐ ˈsẽpɾɨ ẽ ˈfɾẽntɨ ɐˈtɛ aw sɨˈmɐfuɾu | dɨˈpojʃ ˈviɾɨ ɐ ɨʃˈkɛɾdɐ]', ru:'Идите прямо до светофора, затем поверните налево.' },
  { side:'left',  avatar:'🧑', pt:'E fica longe daqui?', ipa:'[i ˈfikɐ ˈlõʒɨ dɐˈki]', ru:'А это далеко отсюда?' },
  { side:'right', avatar:'👩', pt:'Não, fica a dois minutos a pé. É muito perto.', ipa:'[nãw̃ | ˈfikɐ ɐ dojʃ miˈnutuʃ ɐ ˈpɛ | ˈɛ ˈmwitu ˈpɛɾtu]', ru:'Нет, в двух минутах пешком. Совсем рядом.' },
  { side:'left',  avatar:'🧑', pt:'Que metro devo apanhar para o Marquês?', ipa:'[kɨ ˈmɛtɾu ˈdevu ɐpɐˈɲaɾ ˈpaɾɐ u mɐɾˈkeʃ]', ru:'Какое метро брать до Маркиза?' },
  { side:'right', avatar:'👩', pt:'A linha amarela. Fui lá ontem, é muito bonito.', ipa:'[ɐ ˈliɲɐ ɐmɐˈɾɛlɐ | ˈfwi la ˈõntẽj̃ | ˈɛ ˈmwitu buˈnitu]', ru:'Жёлтая ветка. Я была там вчера — очень красиво.' },
  { side:'left',  avatar:'🧑', pt:'Muito obrigado pela ajuda!', ipa:'[ˈmwitu obɾiˈɡadu ˈpelɐ ɐˈʒudɐ]', ru:'Большое спасибо за помощь!' },
  { side:'right', avatar:'👩', pt:'De nada! Boa visita!', ipa:'[dɨ ˈnadɐ | ˈboɐ viˈzitɐ]', ru:'Пожалуйста! Приятной прогулки!' },
];

const db = document.getElementById('W3dialogue-box');
dialogueLines.forEach(l => {
  const div = document.createElement('div');
  div.className = 'd-line' + (l.side === 'right' ? ' right' : '');
  div.innerHTML = `<div class="d-avatar">${l.avatar}</div>
    <div class="d-bubble" onclick="speak('${l.pt.replace(/'/g,"\\'")}')">
      <span class="d-pt">${l.pt}</span>
      <span class="d-ipa">${l.ipa}</span>
      <span class="d-ru">${l.ru}</span>
    </div>`;
  db.appendChild(div);
});

// ── QUIZ ──
const quizData = [
  { q:'Ontem ___ ao cinema. (я пошёл — perfeito)', opts:['ia','fui','vou','iria'], ans:1, exp:'Perfeito глагола ir: eu <em>fui</em>. Ontem — маркер perfeito.' },
  { q:'Quando era criança, ___ muito. (я играл — привычка)', opts:['joguei','jogo','jogava','jogaria'], ans:2, exp:'Привычка в прошлом → imperfeito: eu <em>jogava</em>.' },
  { q:'___ ao mercado todos os dias. (она ходила — привычка)', opts:['foi','vai','ia','irá'], ans:2, exp:'Регулярное действие в прошлом → imperfeito: ela <em>ia</em>.' },
  { q:'Eles ___ muito ontem à noite. (они пили — perfeito)', opts:['bebiam','beberam','bebem','beberiam'], ans:1, exp:'Perfeito глагола beber: eles <em>beberam</em>.' },
  { q:'Vou ___ banco. (я иду в банк — контракция)', opts:['a o','ao','no','para o'], ans:1, exp:'a + o = <em>ao</em>. Vou ao banco.' },
  { q:'Ela vive ___ Porto. (в Порту — контракция em+o)', opts:['em Porto','no Porto','do Porto','ao Porto'], ans:1, exp:'em + o = <em>no</em>. Ela vive no Porto.' },
  { q:'Eu ___ peixe ao almoço. (я ел рыбу — perfeito)', opts:['comia','como','comi','comerei'], ans:2, exp:'Perfeito глагола comer: eu <em>comi</em>.' },
  { q:'___ sempre em frente e depois vire à ___. (направление)', opts:['Siga / esquerda','Vire / frente','Siga / siga','Fica / direita'], ans:0, exp:'<em>Siga</em> (imperatif de seguir) + <em>esquerda</em> (налево). Стандартная инструкция маршрута.' },
  { q:'Eu ___ muito cansado quando trabalhei. (чувствовал — imperfeito)', opts:['sinto','senti','sentia','sentiu'], ans:2, exp:'Состояние-фон → imperfeito: eu <em>sentia</em>.' },
  { q:'Obrigado ___ ajuda! (предлог por + artigo)', opts:['pela','pela a','para a','da'], ans:0, exp:'por + a = <em>pela</em>. Obrigado <em>pela</em> ajuda!' },
];

let answers = new Array(quizData.length).fill(null);
let correct = 0;

function W3buildQuiz() {
  const c = document.getElementById('W3quiz-container');
  c.innerHTML = '';
  answers = new Array(quizData.length).fill(null);
  correct = 0;
  W3updateScore();
  quizData.forEach((q, i) => {
    const box = document.createElement('div');
    box.className = 'quiz-box';
    box.id = 'W3q' + i;
    box.innerHTML = `<div class="q">${i+1}. ${q.q}</div>
      <div class="options">${q.opts.map((o,j) => `<button class="opt" onclick="W3answer(${i},${j})">${o}</button>`).join('')}</div>
      <div class="quiz-feedback" id="W3qf${i}"></div>`;
    c.appendChild(box);
  });
  document.getElementById('W3reset-btn').style.display = 'none';
}

function W3answer(qi, oi) {
  if (answers[qi] !== null) return;
  answers[qi] = oi;
  const q = quizData[qi];
  document.querySelectorAll(`#W3q${qi} .opt`).forEach((o, j) => {
    o.classList.add('disabled');
    if (j === q.ans) o.classList.add('correct');
    else if (j === oi) o.classList.add('wrong');
  });
  const fb = document.getElementById('W3qf' + qi);
  if (oi === q.ans) { correct++; fb.innerHTML = '✓ Верно! ' + q.exp; fb.className = 'quiz-feedback show ok'; }
  else              { fb.innerHTML = '✗ Неверно. ' + q.exp; fb.className = 'quiz-feedback show no'; }
  W3updateScore();
  if (answers.every(a => a !== null)) {
    document.getElementById('W3reset-btn').style.display = 'inline-block';
    W3updateProgress();
  }
}

function W3updateScore() {
  const done = answers.filter(a => a !== null).length;
  document.getElementById('W3score-display').textContent = `Отвечено: ${done} / ${quizData.length} · Правильно: ${correct}`;
}

function W3resetQuiz() { W3buildQuiz(); }

W3buildQuiz();

function W3updateProgress() {
  const pct = Math.round((correct / quizData.length) * 100);
  const ids = ['pp-pct','pi-pct','erir-pct','prep-pct','place-pct'];
  document.querySelectorAll('.prog-fill').forEach((f, i) => {
    f.style.width = pct + '%';
    if (ids[i]) document.getElementById('W3' + ids[i]).textContent = pct + '%';
  });
}

// ── FEYNMAN ──
const jFeedback = {
  1: {
    keys: ['perfeito','imperfeito','завершил','привычк','продолжал','фон','однажды','всегда','когда'],
    ok: `✓ Отлично! Ключевое различие схвачено верно.<br><br>
      Классическая пара:<br>
      • <em>Comia peixe</em> = я ел рыбу (регулярно, в детстве, обычно)<br>
      • <em>Comi peixe</em> = я поел рыбы (вчера, за обедом, один раз)<br><br>
      Пробел для углубления: что такое <strong>pretérito mais-que-perfeito</strong> (pluperfect)? — действие, которое случилось ДО другого прошлого действия. Неделя 5+.`,
    tip: `💡 Попробуйте ещё. Ключ: perfeito — это <strong>точка</strong> (завершилось), imperfeito — это <strong>линия</strong> (тянулось). Напишите хотя бы одну пару предложений с одним глаголом в обеих формах.`
  },
  2: {
    keys: ['estava','fui','tinha','vim','comia','comi','bebia','bebi','queria'],
    ok: `✓ Хороший текст! Несколько советов по типичным ошибкам:<br><br>
      • Предлог em + o → <em>no</em> (не «em o»)<br>
      • Perfeito 1л. ед.ч. глаголов -er/-ir: comi, bebi, parti (не «comei»)<br>
      • Нарратив EP: «Estive a...» для длительного действия, «Estava a...» для фона<br><br>
      Запишите этот текст вслух — это следующий шаг.`,
    tip: `💡 Напишите хотя бы 4–5 предложений. Начните с: «Naquele dia, estava...» (imperfeito для фона), потом «De repente, fui...» (perfeito — событие). Чередование создаёт живой рассказ.`
  },
  3: {
    keys: ['sigo','viro','esquerda','direita','frente','depois','até','fica','minuto','rua'],
    ok: `✓ Отличный маршрут! Проверьте контракции:<br><br>
      • «até ao semáforo» (a + o = ao) ✓<br>
      • «depois da rotunda» (de + a = da) ✓<br>
      • «vire à esquerda» (a + a = à) ✓<br><br>
      Продвинутый уровень: добавьте ориентиры — <em>«Em frente ao banco, há uma padaria...»</em>`,
    tip: `💡 Используйте структуру: Saio de casa → Sigo em frente → Depois viro → Fico a X minutos. Добавьте хотя бы один предлог с контракцией (ao/na/pela…).`
  }
};

function W3checkJ(n) {
  const v = document.getElementById('W3j'+n).value.trim().toLowerCase();
  const fb = document.getElementById('W3jr'+n);
  const d = jFeedback[n];
  if (!v || v.length < 20) {
    fb.innerHTML = '⚠️ Напишите подробнее.'; fb.className = 'response-box show info'; return;
  }
  const has = d.keys.some(k => v.includes(k));
  fb.innerHTML = has ? d.ok : d.tip;
  fb.className = 'response-box show ' + (has ? 'ok' : 'info');
}
window.W3answer = W3answer;
window.W3checkJ = W3checkJ;
window.W3resetQuiz = W3resetQuiz;
})();
