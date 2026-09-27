// A1 Week 2
(function(){
// ── TABS ──


// ── SPEAK ──


// ── NUMBERS ──
const nums20 = [
  {n:1, pt:'um/uma', ipa:'[ũ/ˈũmɐ]', ru:'один/одна'},
  {n:2, pt:'dois/duas', ipa:'[doiʃ/ˈduɐʃ]', ru:'два/две'},
  {n:3, pt:'três', ipa:'[treʃ]', ru:'три'},
  {n:4, pt:'quatro', ipa:'[ˈkwatɾu]', ru:'четыре'},
  {n:5, pt:'cinco', ipa:'[ˈsĩku]', ru:'пять'},
  {n:6, pt:'seis', ipa:'[sɐjʃ]', ru:'шесть'},
  {n:7, pt:'sete', ipa:'[ˈsɛtɨ]', ru:'семь'},
  {n:8, pt:'oito', ipa:'[ˈojtu]', ru:'восемь'},
  {n:9, pt:'nove', ipa:'[ˈnɔvɨ]', ru:'девять'},
  {n:10, pt:'dez', ipa:'[dɛʃ]', ru:'десять'},
  {n:11, pt:'onze', ipa:'[ˈõzɨ]', ru:'одиннадцать'},
  {n:12, pt:'doze', ipa:'[ˈdozɨ]', ru:'двенадцать'},
  {n:13, pt:'treze', ipa:'[ˈtɾezɨ]', ru:'тринадцать'},
  {n:14, pt:'catorze', ipa:'[kɐˈtɔɾzɨ]', ru:'четырнадцать'},
  {n:15, pt:'quinze', ipa:'[ˈkĩzɨ]', ru:'пятнадцать'},
  {n:16, pt:'dezasseis', ipa:'[dɨzɐˈsɐjʃ]', ru:'шестнадцать'},
  {n:17, pt:'dezassete', ipa:'[dɨzɐˈsɛtɨ]', ru:'семнадцать'},
  {n:18, pt:'dezoito', ipa:'[dɨˈzojtu]', ru:'восемнадцать'},
  {n:19, pt:'dezanove', ipa:'[dɨzɐˈnɔvɨ]', ru:'девятнадцать'},
  {n:20, pt:'vinte', ipa:'[ˈvĩntɨ]', ru:'двадцать'},
];

const tens = [
  {n:30, pt:'trinta', ipa:'[ˈtɾĩntɐ]', ru:'тридцать'},
  {n:40, pt:'quarenta', ipa:'[kwɐˈɾẽntɐ]', ru:'сорок'},
  {n:50, pt:'cinquenta', ipa:'[sĩˈkwẽntɐ]', ru:'пятьдесят'},
  {n:60, pt:'sessenta', ipa:'[sɨˈsẽntɐ]', ru:'шестьдесят'},
  {n:70, pt:'setenta', ipa:'[sɨˈtẽntɐ]', ru:'семьдесят'},
  {n:80, pt:'oitenta', ipa:'[ojˈtẽntɐ]', ru:'восемьдесят'},
  {n:90, pt:'noventa', ipa:'[nuˈvẽntɐ]', ru:'девяносто'},
  {n:100, pt:'cem/cento', ipa:'[sẽ/ˈsẽntu]', ru:'сто'},
  {n:1000, pt:'mil', ipa:'[miɫ]', ru:'тысяча'},
];

function W2buildGrid(data, containerId) {
  const g = document.getElementById('W2' + containerId);
  data.forEach(d => {
    const el = document.createElement('div');
    el.className = 'num-cell';
    el.innerHTML = `<span class="n">${d.n}</span><span class="pt-n">${d.pt}</span><span class="ipa-n">${d.ipa}</span><span class="ru-n">${d.ru}</span>`;
    el.onclick = () => {
      speak(d.pt.split('/')[0]);
      el.classList.toggle('revealed');
    };
    g.appendChild(el);
  });
}

W2buildGrid(nums20, 'grid-1-20');
W2buildGrid(tens, 'grid-tens');

// ── TIME ──
const times = [
  {t:'01:00', pt:'É uma hora', ipa:'[ˈɛ ˈũmɐ ˈɔɾɐ]', ru:'Час дня'},
  {t:'02:00', pt:'São duas horas', ipa:'[sãw̃ ˈduɐʃ ˈɔɾɐʃ]', ru:'Два часа'},
  {t:'03:30', pt:'São três e meia', ipa:'[sãw̃ treʃ i ˈmɐjɐ]', ru:'Половина четвёртого'},
  {t:'06:15', pt:'São seis e um quarto', ipa:'[sãw̃ sɐjʃ i ũ ˈkwaɾtu]', ru:'Шесть пятнадцать'},
  {t:'08:45', pt:'São nove menos um quarto', ipa:'[sãw̃ ˈnɔvɨ ˈmenuʃ ũ ˈkwaɾtu]', ru:'Без четверти девять'},
  {t:'12:00', pt:'É meio-dia', ipa:'[ˈɛ ˈmɐju ˈdi.ɐ]', ru:'Полдень'},
  {t:'00:00', pt:'É meia-noite', ipa:'[ˈɛ ˈmɐjɐ ˈnɔitɨ]', ru:'Полночь'},
  {t:'19:00', pt:'São sete da tarde', ipa:'[sãw̃ ˈsɛtɨ dɐ ˈtaɾdɨ]', ru:'Семь вечера'},
];

const cd = document.getElementById('W2clock-demo');
times.forEach(t => {
  const el = document.createElement('div');
  el.className = 'time-card';
  el.innerHTML = `<span class="clock-time">${t.t}</span><span class="pt-time">${t.pt}</span><span class="ipa-time">${t.ipa}</span><span class="ru-time">${t.ru}</span>`;
  el.onclick = () => speak(t.pt);
  cd.appendChild(el);
});

// ── FAMILY ──
const family = [
  {icon:'👨', pt:'o pai', ipa:'[u ˈpaj]', ru:'отец'},
  {icon:'👩', pt:'a mãe', ipa:'[ɐ ˈmãj]', ru:'мать'},
  {icon:'👦', pt:'o filho', ipa:'[u ˈfiʎu]', ru:'сын'},
  {icon:'👧', pt:'a filha', ipa:'[ɐ ˈfiʎɐ]', ru:'дочь'},
  {icon:'👱‍♂️', pt:'o irmão', ipa:'[u iɾˈmãw̃]', ru:'брат'},
  {icon:'👱‍♀️', pt:'a irmã', ipa:'[ɐ iɾˈmã]', ru:'сестра'},
  {icon:'👴', pt:'o avô', ipa:'[u ɐˈvo]', ru:'дедушка'},
  {icon:'👵', pt:'a avó', ipa:'[ɐ ɐˈvɔ]', ru:'бабушка'},
  {icon:'👨‍👩‍👧', pt:'o marido', ipa:'[u mɐˈɾidu]', ru:'муж'},
  {icon:'💍', pt:'a mulher', ipa:'[ɐ muˈʎeɾ]', ru:'жена'},
  {icon:'👶', pt:'o bebé', ipa:'[u bɨˈbɛ]', ru:'малыш (EP)'},
  {icon:'🧑', pt:'o primo', ipa:'[u ˈpɾimu]', ru:'двоюродный брат'},
];

const fg = document.getElementById('W2family-grid');
family.forEach(f => {
  const el = document.createElement('div');
  el.className = 'fam-card';
  el.innerHTML = `<span class="fam-icon">${f.icon}</span><div class="fam-info"><span class="pt-fam">${f.pt}</span><span class="ipa-fam">${f.ipa}</span><span class="ru-fam">${f.ru}</span></div>`;
  el.onclick = () => speak(f.pt);
  fg.appendChild(el);
});

// ── QUESTION WORDS ──
const qwords = [
  {qw:'Onde', ipa:'[ˈõndɨ]', ru:'Где / Куда', ex:'Onde mora? — Где живёте?'},
  {qw:'Quando', ipa:'[ˈkwãndu]', ru:'Когда', ex:'Quando chega? — Когда приедете?'},
  {qw:'Como', ipa:'[ˈkomu]', ru:'Как', ex:'Como se chama? — Как зовут?'},
  {qw:'Quem', ipa:'[kẽj̃]', ru:'Кто', ex:'Quem é? — Кто это?'},
  {qw:'O que', ipa:'[u kɨ]', ru:'Что', ex:'O que quer? — Что хотите?'},
  {qw:'Porque', ipa:'[puɾˈkɨ]', ru:'Почему', ex:'Porque estuda? — Почему учитесь?'},
  {qw:'Qual', ipa:'[kwaɫ]', ru:'Какой / Который', ex:'Qual prefere? — Какой предпочитаете?'},
  {qw:'Quanto', ipa:'[ˈkwãntu]', ru:'Сколько', ex:'Quanto custa? — Сколько стоит?'},
];

const qg = document.getElementById('W2qwords-grid');
qwords.forEach(q => {
  const el = document.createElement('div');
  el.className = 'qword-card';
  el.innerHTML = `<span class="qw">${q.qw}</span><span class="qw-ipa">${q.ipa}</span><span class="qw-ru">${q.ru}</span><span class="qw-ex">${q.ex}</span>`;
  el.onclick = () => speak(q.qw);
  qg.appendChild(el);
});

// ── QUIZ ──
const quizData = [
  {q:'Eu ___ professor. (постоянная профессия)', opts:['sou','estou','tenho','falo'], ans:0, exp:'Профессия — постоянное свойство → <em>ser</em>. Eu <em>sou</em> professor.'},
  {q:'Ela ___ cansada hoje. (временное состояние)', opts:['é','está','tem','fala'], ans:1, exp:'Временное состояние → <em>estar</em>. Ela <em>está</em> cansada hoje.'},
  {q:'São ___ horas. (2:00)', opts:['um','dois','duas','uma'], ans:2, exp:'<em>Horas</em> — женский род, поэтому <em>duas</em> (не dois).'},
  {q:'Eu ___ dois irmãos.', opts:['sou','estou','tenho','falo'], ans:2, exp:'Возраст и родство — глагол <em>ter</em>. Eu <em>tenho</em> dois irmãos.'},
  {q:'___ mora? (Где живёте?)', opts:['Quando','Como','Onde','Quem'], ans:2, exp:'<em>Onde</em> = где. Onde mora?'},
  {q:'Eles ___ a trabalhar. (они работают сейчас, EP)', opts:['são','estão','têm','falam'], ans:1, exp:'EP-прогрессив: estar + a + infinitivo. Eles <em>estão</em> a trabalhar.'},
  {q:'O avô ___ setenta anos.', opts:['é','está','tem','fala'], ans:2, exp:'Возраст всегда через <em>ter</em>. O avô <em>tem</em> setenta anos.'},
  {q:'Vinte e ___ (25)', opts:['cinco','cinquenta','quinze','seis'], ans:0, exp:'20 + 5 = vinte e <em>cinco</em>.'},
  {q:'___ se chama? (Как зовут?)', opts:['Onde','Quando','Porque','Como'], ans:3, exp:'<em>Como</em> = как. Como se chama?'},
  {q:'Lisboa ___ em Portugal. (местонахождение)', opts:['é','são','está','estão'], ans:2, exp:'Местонахождение → <em>estar</em>. Lisboa <em>está</em> em Portugal.'},
];

let answers = new Array(quizData.length).fill(null);
let correct = 0;

function W2buildQuiz() {
  const c = document.getElementById('W2quiz-container');
  c.innerHTML = '';
  answers = new Array(quizData.length).fill(null);
  correct = 0;
  W2updateScore();
  quizData.forEach((q, i) => {
    const box = document.createElement('div');
    box.className = 'quiz-box';
    box.id = 'W2q' + i;
    box.innerHTML = `<div class="q">${i+1}. ${q.q}</div>
      <div class="options">${q.opts.map((o,j)=>`<button class="opt" onclick="W2answer(${i},${j})">${o}</button>`).join('')}</div>
      <div class="quiz-feedback" id="W2qf${i}"></div>`;
    c.appendChild(box);
  });
  document.getElementById('W2reset-btn').style.display = 'none';
}

function W2answer(qi, oi) {
  if (answers[qi] !== null) return;
  answers[qi] = oi;
  const q = quizData[qi];
  const opts = document.querySelectorAll(`#W2q${qi} .opt`);
  opts.forEach((o,j) => {
    o.classList.add('disabled');
    if (j === q.ans) o.classList.add('correct');
    else if (j === oi && oi !== q.ans) o.classList.add('wrong');
  });
  const fb = document.getElementById('W2qf' + qi);
  if (oi === q.ans) {
    correct++;
    fb.innerHTML = '✓ Верно! ' + q.exp;
    fb.className = 'quiz-feedback show ok';
  } else {
    fb.innerHTML = '✗ Неверно. ' + q.exp;
    fb.className = 'quiz-feedback show no';
  }
  W2updateScore();
  if (answers.every(a => a !== null)) {
    document.getElementById('W2reset-btn').style.display = 'inline-block';
    W2updateProgress(correct);
  }
}

function W2updateScore() {
  const done = answers.filter(a => a !== null).length;
  document.getElementById('W2score-display').textContent = `Отвечено: ${done} / ${quizData.length} · Правильно: ${correct}`;
}

function W2resetQuiz() { W2buildQuiz(); }

W2buildQuiz();

// ── UPDATE PROGRESS ──
function W2updateProgress(score) {
  const pct = Math.round((score / quizData.length) * 100);
  const rows = document.querySelectorAll('#wpanel2 .prog-row');
  const vals = [pct, pct, pct, pct, pct, pct];
  rows.forEach((r, i) => {
    const fill = r.querySelector('.prog-fill');
    const label = r.querySelector('.prog-pct');
    if (fill && vals[i] !== undefined) {
      fill.style.width = vals[i] + '%';
      label.textContent = vals[i] + '%';
    }
  });
}

// ── FEYNMAN JOURNAL ──
const jFeedback = {
  1: {
    keywords: ['постоянн','временн','состоян','ser','estar','профессия','происхожден','местонахожден'],
    ok: `✓ Хорошо! Ключевое — ser для постоянного (паспорт), estar для временного (GPS). <br><br>
    Классический пример смены смысла:<br>
    • <em>Ele é chato</em> — он зануда (по характеру, постоянно)<br>
    • <em>Ele está chato</em> — он сейчас нудит (временное состояние)<br><br>
    Пробел для углубления: когда используется ser для местонахождения? (Подсказка: мероприятия и события — <em>O concerto é no Porto</em>)`,
    tip: `💡 Попробуйте ещё. Ключевая идея: ser = кем/чем что-то является в своей сути, estar = где находится или как ощущается в данный момент. Придумайте одно предложение с ser и одно с estar про одно и то же существительное.`
  },
  2: {
    ok: `✓ Отлично, вы практикуете production! Несколько советов по частым ошибкам русскоязычных:<br><br>
    • Не забывайте артикли: <em>o livro, a semana, os dias</em><br>
    • <em>Gostar</em> требует предлога <em>de</em>: <em>Gosto <strong>de</strong> música</em><br>
    • EP-прогрессив: <em>estou <strong>a</strong> estudar</em> (не <em>estudando</em>)<br>
    • Конец слова <em>-am</em> назализованный: <em>falam</em> [ˈfalãw̃]<br><br>
    Запишите этот текст вслух — это важнее, чем писать.`,
    tip: `💡 Начните с малого: 3 предложения. Eu sou... / Estou a aprender... / Tenho... Главное — думать на португальском, не переводить.`
  },
  3: {
    ok: `✓ Отличная рефлексия — именно так работает метод Фейнмана! Пробел = следующая задача.<br><br>
    Универсальные советы по работе с пробелами:<br>
    • <strong>Звуки</strong>: запишите себя → сравните с Forvo.com → повторите 10×<br>
    • <strong>Грамматика</strong>: найдите 5 примеров этой конструкции в живом тексте<br>
    • <strong>Слова</strong>: добавьте в Anki с аудио от носителя<br>
    • <strong>Понимание на слух</strong>: Practice Portuguese — slow mode + транскрипт<br><br>
    Ваш пробел — это не слабость, это карта следующего шага.`,
    tip: `💡 Будьте конкретнее: не «мне трудно произношение», а «мне трудно [ɨ] в слове <em>de</em>». Точный пробел → точное решение.`
  }
};

function W2checkJ(n) {
  const v = document.getElementById('W2j'+n).value.trim();
  const fb = document.getElementById('W2jr'+n);
  const data = jFeedback[n];
  if (!v || v.length < 20) {
    fb.innerHTML = '⚠️ Напишите подробнее — минимум 2–3 предложения.';
    fb.className = 'response-box show info';
    return;
  }
  const lower = v.toLowerCase();
  const hasKey = data.keywords ? data.keywords.some(k => lower.includes(k)) : true;
  fb.innerHTML = hasKey ? data.ok : data.tip;
  fb.className = 'response-box show ' + (hasKey ? 'ok' : 'info');
}
window.W2answer = W2answer;
window.W2checkJ = W2checkJ;
window.W2resetQuiz = W2resetQuiz;
})();
