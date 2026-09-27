// A1 Week 1
(function(){
// ── TABS ──


// ── SPEAK ──


// ── DIALOGUE ──
const dialogueLines = [
  { side:'left',  av:'🧑', pt:'Olá! Bom dia!', ipa:'[ɔˈla | bõ ˈdi.ɐ]', ru:'Привет! Доброе утро!' },
  { side:'right', av:'👩', pt:'Bom dia! Como está?', ipa:'[bõ ˈdi.ɐ | ˈkomu ɨʃˈta]', ru:'Доброе утро! Как вы поживаете?' },
  { side:'left',  av:'🧑', pt:'Estou bem, obrigado. E a senhora?', ipa:'[ɨʃˈto bẽj | obɾiˈɡadu | i ɐ sɨˈɲoɾɐ]', ru:'Хорошо, спасибо. А вы?' },
  { side:'right', av:'👩', pt:'Muito bem, obrigada. Como se chama?', ipa:'[ˈmwitu bẽj | obɾiˈɡadɐ | ˈkomu sɨ ˈʃɐmɐ]', ru:'Очень хорошо, спасибо. Как вас зовут?' },
  { side:'left',  av:'🧑', pt:'Chamo-me Aleksei. Sou da Rússia. E a senhora?', ipa:'[ˈʃɐmu mɨ aleksej | ˈso dɐ ˈʁusiɐ]', ru:'Меня зовут Алексей. Я из России. А вы?' },
  { side:'right', av:'👩', pt:'Chamo-me Ana. Sou de Lisboa. Prazer em conhecê-lo!', ipa:'[ˈʃɐmu mɨ ˈɐnɐ | ˈso dɨ liʒˈboɐ | pɾɐˈzeɾ ẽ kuɲɨˈselʊ]', ru:'Меня зовут Ана. Я из Лиссабона. Приятно познакомиться!' },
  { side:'left',  av:'🧑', pt:'Igualmente! Fala inglês?', ipa:'[iɡwɐɫˈmẽntɨ | ˈfalɐ ĩˈɡleʃ]', ru:'Взаимно! Вы говорите по-английски?' },
  { side:'right', av:'👩', pt:'Sim, falo um pouco. Mas prefiro falar português!', ipa:'[sĩ | ˈfalu ũ ˈpoku | mɐʃ pɾɨˈfiɾu fɐˈlaɾ puɾtuˈɡeʃ]', ru:'Да, немного. Но предпочитаю говорить по-португальски!' },
  { side:'left',  av:'🧑', pt:'Óptimo! Estou a aprender português. Pode falar mais devagar?', ipa:'[ˈɔtimu | ɨʃˈto ɐ ɐpɾẽˈdeɾ | ˈpɔdɨ fɐˈlaɾ mɐjʃ dɨˈvaɡɐɾ]', ru:'Отлично! Я учу португальский. Можете говорить медленнее?' },
  { side:'right', av:'👩', pt:'Claro! Com todo o gosto.', ipa:'[ˈklaɾu | kõ ˈtodu u ˈɡoʃtu]', ru:'Конечно! С удовольствием.' },
];

const db = document.getElementById('W1dialogue-box');
dialogueLines.forEach(l => {
  const div = document.createElement('div');
  div.className = 'd-line' + (l.side === 'right' ? ' right' : '');
  div.innerHTML = `<div class="d-avatar">${l.av}</div>
    <div class="d-bubble" onclick="speak('${l.pt.replace(/'/g,"\\'")}')">
      <span class="d-pt">${l.pt}</span>
      <span class="d-ipa">${l.ipa}</span>
      <span class="d-ru">${l.ru}</span>
    </div>`;
  db.appendChild(div);
});

// ── FLIP CARDS ──
const cardData = [
  { pt:'Olá',          ipa:'[ɔˈla]',           ru:'Привет' },
  { pt:'obrigado',     ipa:'[obɾiˈɡadu]',       ru:'спасибо (м)' },
  { pt:'por favor',    ipa:'[puɾ fɐˈvoɾ]',      ru:'пожалуйста' },
  { pt:'sim',          ipa:'[sĩ]',              ru:'да' },
  { pt:'não',          ipa:'[nãw̃]',             ru:'нет' },
  { pt:'Lisboa',       ipa:'[liʒˈboɐ]',         ru:'Лиссабон' },
  { pt:'falar',        ipa:'[fɐˈlaɾ]',          ru:'говорить' },
  { pt:'aprender',     ipa:'[ɐpɾẽˈdeɾ]',        ru:'учить' },
  { pt:'bom dia',      ipa:'[bõ ˈdi.ɐ]',        ru:'доброе утро' },
  { pt:'boa noite',    ipa:'[ˈboɐ ˈnɔitɨ]',     ru:'спокойной ночи' },
  { pt:'prazer',       ipa:'[pɾɐˈzeɾ]',         ru:'удовольствие' },
  { pt:'devagar',      ipa:'[dɨˈvaɡɐɾ]',        ru:'медленно' },
];

const row = document.getElementById('W1cards-row');
cardData.forEach(c => {
  const el = document.createElement('div');
  el.className = 'flip-card';
  el.innerHTML = `<div class="flip-inner">
    <div class="flip-front">${c.pt}<small>${c.ipa}</small></div>
    <div class="flip-back"><strong>${c.ru}</strong></div>
  </div>`;
  el.onclick = () => { el.classList.toggle('flipped'); speak(c.pt); };
  row.appendChild(el);
});

// ── EXERCISES ──
let exercisesDone = 0;

function W1showFeedback(id, html, type) {
  const el = document.getElementById('W1' + id);
  el.innerHTML = html;
  el.className = 'feedback show ' + type;
  exercisesDone = Math.min(4, exercisesDone + 1);
  W1updateProgress();
}

function W1checkEx1() {
  const v = document.getElementById('W1ex1').value.trim();
  if (!v) { W1showFeedback('fb1','⚠️ Напишите хотя бы несколько слов!','tip'); return; }
  const keys = ['гласн','безударн','редукц','произнос','проглат','слог','ударен'];
  const has = keys.some(k => v.toLowerCase().includes(k));
  if (has) {
    W1showFeedback('fb1','✅ Верно! Ключевое: безударные <strong>e</strong> → [ɨ], безударные <strong>o</strong> → [u]. Эта редукция делает EP характерным. Следующий пробел: назовите 3 конкретных слова с редукцией.','good');
  } else {
    W1showFeedback('fb1','💡 Подсказка: EP «проглатывает» гласные в безударных слогах. Слово <em>telefone</em> в EP: [tɫɨˈfɔnɨ] — три из пяти гласных почти исчезают, потому что ударение сильно выделяется.','tip');
  }
}

function W1checkEx2() {
  const v = document.getElementById('W1ex2').value.trim();
  if (!v) { W1showFeedback('fb2','⚠️ Напишите перевод!','tip'); return; }
  W1showFeedback('fb2',`✅ <strong>Образец:</strong> <em>Olá! Chamo-me [имя]. Sou de [город]. Estou a aprender português. Prazer em conhecê-lo/a!</em><br><br>
    <strong>Разбор:</strong><ul style="margin-top:0.5rem;padding-left:1.2rem;line-height:1.8">
    <li><em>Chamo-me</em> (не <em>Meu nome é</em>) — EP предпочитает рефлексивную конструкцию</li>
    <li><em>Sou de</em> + город — без артикля для большинства городов</li>
    <li><em>Estou a aprender</em> — EP прогрессив (BP: <em>estou aprendendo</em>)</li>
    <li><em>conhecê-lo/-la</em> — согласуется с полом собеседника</li>
    </ul>`,'good');
}

function W1checkEx3() {
  const v = document.getElementById('W1ex3').value.trim();
  if (!v) { W1showFeedback('fb3','⚠️ Опишите ваши трудности!','tip'); return; }
  W1showFeedback('fb3',`💡 <strong>Разбор «Lisboa é a capital de Portugal»:</strong><br><br>
    <ul style="margin-top:0.5rem;padding-left:1.2rem;line-height:1.8">
    <li><strong>[liʒˈboɐ]</strong> — «s» перед звонким «b» → [ʒ] «ж». Конечная «a» → шва [ɐ]</li>
    <li><strong>[kɐpiˈtaɫ]</strong> — финальное «l» → тёмное [ɫ] (велярное)</li>
    <li><strong>[dɨ puɾtuˈɡaɫ]</strong> — «de» редуцируется до [dɨ]; «l» тёмное снова</li>
    </ul>
    Самое частое затруднение — тёмное [ɫ]. Совет: скажите «полк» по-русски, запомните ощущение — именно так звучит EP [ɫ].`,'tip');
}

function W1checkEx4() {
  const v = document.getElementById('W1ex4').value.trim();
  if (!v) { W1showFeedback('fb4','⚠️ Напишите аналогию!','tip'); return; }
  W1showFeedback('fb4',`✅ <strong>Анализ «Estou a aprender»:</strong><br><br>
    В EP для «прямо сейчас» используется <em>estar + a + infinitivo</em> — как английское <em>I am learning</em>.<br><br>
    Отличие от русского: в русском нет специальной формы «прямо сейчас».<br>
    • <em>Aprendo português</em> = учу (вообще, в принципе)<br>
    • <em>Estou a aprender português</em> = учу прямо сейчас<br><br>
    Ваш пробел Фейнмана: придумайте 3 пары таких предложений про себя.`,'good');
}

// ── PROGRESS ──
function W1updateProgress() {
  const pct = Math.round((exercisesDone / 4) * 100);
  const fills = ['pf1','pf2','pf3','pf4'];
  const labels = ['pp1','pp2','pp3','pp4'];
  fills.forEach((id, i) => {
    document.getElementById('W1' + id).style.width = pct + '%';
    document.getElementById('W1' + labels[i]).textContent = pct + '%';
  });
}
window.W1checkEx1 = W1checkEx1;
window.W1checkEx2 = W1checkEx2;
window.W1checkEx3 = W1checkEx3;
window.W1checkEx4 = W1checkEx4;
window.W1showFeedback = W1showFeedback;
})();
