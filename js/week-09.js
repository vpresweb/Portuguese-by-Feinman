// A1 Week 9
(function(){



function W9makeGrid(data,id){
  const g=document.getElementById('W9' + id);if(!g)return;
  data.forEach(d=>{
    const el=document.createElement('div');el.className='vocab-card';
    el.innerHTML=`<span class="vc-pt">${d.pt}</span><span class="vc-ipa">${d.ipa}</span><span class="vc-ru">${d.ru}</span><span class="vc-ex">${d.ex}</span>`;
    el.onclick=()=>speak(d.pt);g.appendChild(el);
  });
}

W9makeGrid([
  {pt:'a chuva',ipa:'[ɐ ˈʃuvɐ]',ru:'дождь',ex:'Está a chover muito.'},
  {pt:'o sol',ipa:'[u sɔɫ]',ru:'солнце',ex:'Faz sol hoje.'},
  {pt:'o vento',ipa:'[u ˈvẽntu]',ru:'ветер',ex:'Faz muito vento na costa.'},
  {pt:'a neve',ipa:'[ɐ ˈnɛvɨ]',ru:'снег',ex:'Há neve na Serra da Estrela.'},
  {pt:'o nevoeiro',ipa:'[u nɨˈvwɐjɾu]',ru:'туман',ex:'Há nevoeiro de manhã.'},
  {pt:'a trovoada',ipa:'[ɐ tɾoˈvwadɐ]',ru:'гроза',ex:'Há trovoada à tarde.'},
  {pt:'a temperatura',ipa:'[ɐ tẽpɨɾɐˈtuɾɐ]',ru:'температура',ex:'A temperatura está a subir.'},
  {pt:'nublado',ipa:'[nuˈbladu]',ru:'облачно',ex:'Está nublado mas não chove.'},
  {pt:'húmido',ipa:'[ˈumidu]',ru:'влажный',ex:'O ar está muito húmido.'},
  {pt:'a geada',ipa:'[ɐ ʒɨˈadɐ]',ru:'иней / заморозки',ex:'Há geada esta manhã.'},
  {pt:'o arco-íris',ipa:'[u ˈaɾku ˈiɾiʃ]',ru:'радуга',ex:'Que arco-íris bonito!'},
  {pt:'o céu',ipa:'[u ˈsɛw]',ru:'небо',ex:'O céu está limpo hoje.'},
],'weather-grid');

W9makeGrid([
  {pt:'janeiro',ipa:'[ʒɐˈnɐjɾu]',ru:'январь',ex:'Em janeiro faz frio.'},
  {pt:'fevereiro',ipa:'[fɨvɨˈɾɐjɾu]',ru:'февраль',ex:'Fevereiro é o mês mais curto.'},
  {pt:'março',ipa:'[ˈmaɾsu]',ru:'март',ex:'Em março começa a primavera.'},
  {pt:'abril',ipa:'[ɐˈbɾiɫ]',ru:'апрель',ex:'Em abril chove muito.'},
  {pt:'maio',ipa:'[ˈmaju]',ru:'май',ex:'Maio é lindo em Portugal.'},
  {pt:'junho',ipa:'[ˈʒuɲu]',ru:'июнь',ex:'Em junho começa o verão.'},
  {pt:'julho',ipa:'[ˈʒuʎu]',ru:'июль',ex:'Julho é o mês mais quente.'},
  {pt:'agosto',ipa:'[ɐˈɡoʃtu]',ru:'август',ex:'Em agosto há muitos turistas.'},
  {pt:'setembro',ipa:'[sɨˈtẽbɾu]',ru:'сентябрь',ex:'Setembro ainda é quente.'},
  {pt:'outubro',ipa:'[oˈtubɾu]',ru:'октябрь',ex:'Em outubro começa a chover.'},
  {pt:'novembro',ipa:'[nuˈvẽbɾu]',ru:'ноябрь',ex:'Novembro é muito chuvoso.'},
  {pt:'dezembro',ipa:'[dɨˈzẽbɾu]',ru:'декабрь',ex:'Em dezembro há o Natal.'},
],'months-grid');

W9makeGrid([
  {pt:'o mar',ipa:'[u maɾ]',ru:'море',ex:'O mar está calmo hoje.'},
  {pt:'a praia',ipa:'[ɐ ˈpɾɐjɐ]',ru:'пляж',ex:'Vou à praia no verão.'},
  {pt:'a montanha',ipa:'[ɐ mõˈtɐɲɐ]',ru:'гора',ex:'A Serra da Estrela é alta.'},
  {pt:'o rio',ipa:'[u ˈʁiu]',ru:'река',ex:'O Tejo passa em Lisboa.'},
  {pt:'a floresta',ipa:'[ɐ fluˈɾɛʃtɐ]',ru:'лес',ex:'A floresta está verde.'},
  {pt:'o campo',ipa:'[u ˈkãpu]',ru:'поле / сельская местность',ex:'No Alentejo há muito campo.'},
  {pt:'a serra',ipa:'[ɐ ˈsɛʁɐ]',ru:'горная гряда',ex:'A Serra da Estrela tem neve.'},
  {pt:'a costa',ipa:'[ɐ ˈkɔʃtɐ]',ru:'побережье',ex:'A costa portuguesa é bonita.'},
  {pt:'a ilha',ipa:'[ɐ ˈiʎɐ]',ru:'остров',ex:'Os Açores são ilhas no Atlântico.'},
  {pt:'a onda',ipa:'[ɐ ˈõndɐ]',ru:'волна',ex:'As ondas são grandes no inverno.'},
  {pt:'a nuvem',ipa:'[ɐ ˈnuvẽj̃]',ru:'облако',ex:'Há muitas nuvens hoje.'},
  {pt:'a areia',ipa:'[ɐ ɐˈɾɐjɐ]',ru:'песок',ex:'A areia do Algarve é dourada.'},
],'nature-grid');

// DIALOGUE
const lines=[
  {s:'left',av:'🧑',pt:'Que tempo faz aí em Lisboa hoje?',ipa:'[kɨ ˈtẽpu faʃ ɐˈi ẽ liʒˈboɐ ˈoʒɨ]',ru:'Какая там сегодня погода в Лиссабоне?'},
  {s:'right',av:'👩',pt:'Está a chover desde de manhã. Faz muito frio também.',ipa:'[ɨʃˈta ɐ ʃuˈveɾ dɨʃdɨ dɨ mɐˈɲã | faʃ ˈmwitu ˈfɾiu tɐˈbẽj̃]',ru:'Дождь идёт с утра. И очень холодно тоже.'},
  {s:'left',av:'🧑',pt:'Aqui no Porto também. Há muita chuva e vento.',ipa:'[ɐˈki nu ˈpoɾtu tɐˈbẽj̃ | a ˈmwjtɐ ˈʃuvɐ i ˈvẽntu]',ru:'Здесь в Порту тоже. Много дождя и ветра.'},
  {s:'right',av:'👩',pt:'Sabes, no fim de semana passado fazia muito calor e fomos à praia.',ipa:'[ˈsabɨʃ | nu fĩ dɨ sɨˈmɐnɐ pɐˈsadu ˈfɐziɐ ˈmwitu kɐˈloɾ]',ru:'Знаешь, в прошлые выходные было очень жарко и мы ездили на пляж.'},
  {s:'left',av:'🧑',pt:'Que sorte! O céu estava limpo?',ipa:'[kɨ ˈsɔɾtɨ | u ˈsɛw ɨʃˈtavɐ ˈlĩpu]',ru:'Как повезло! Небо было ясное?'},
  {s:'right',av:'👩',pt:'Sim, não havia uma nuvem. O sol brilhava o dia todo.',ipa:'[sĩ | nãw̃ ɐˈviɐ ˈũɐ ˈnuvẽj̃ | u sɔɫ bɾiˈʎavɐ u ˈdiɐ ˈtodu]',ru:'Да, ни облачка. Солнце светило весь день.'},
  {s:'left',av:'🧑',pt:'E para este fim de semana, qual é a previsão do tempo?',ipa:'[i ˈpaɾɐ ˈɛʃtɨ fĩ dɨ sɨˈmɐnɐ | kwaɫ ˈɛ ɐ pɾɨviˈzãw̃ du ˈtẽpu]',ru:'А на эти выходные какой прогноз погоды?'},
  {s:'right',av:'👩',pt:'Tomara que faça bom tempo! Dizem que vai melhorar no sábado.',ipa:'[tuˈmaɾɐ kɨ ˈfasɐ bõ ˈtẽpu | ˈdizẽj̃ kɨ vaj mɨˈʎoɾaɾ nu ˈsabɐdu]',ru:'Хотелось бы хорошей погоды! Говорят, в субботу улучшится.'},
];
const db=document.getElementById('W9dialogue-box');
lines.forEach(l=>{
  const d=document.createElement('div');d.className='d-line'+(l.s==='right'?' right':'');
  d.innerHTML=`<div class="d-avatar">${l.av}</div><div class="d-bubble" onclick="speak('${l.pt.replace(/'/g,"\\'")}')"><span class="d-pt">${l.pt}</span><span class="d-ipa">${l.ipa}</span><span class="d-ru">${l.ru}</span></div>`;
  db.appendChild(d);
});

// QUIZ
const quizData=[
  {q:'___ muito calor no verão em Portugal.',opts:['Está','Há','Faz','É'],ans:2,exp:'<em>Fazer</em> + calor/frio/vento/sol: <em>Faz</em> muito calor. Está для прилагательных (nublado, frio), há для явлений (nevoeiro).'},
  {q:'___ a chover desde ontem. (EP-прогрессив)',opts:['Faz','Há','Está','Chove'],ans:2,exp:'EP-прогрессив: <em>Está a chover</em>. Estar + a + infinitivo = действие в процессе.'},
  {q:'___ nevoeiro de manhã no vale.',opts:['Está','Faz','Há','Chove'],ans:2,exp:'Туман — явление природы → <em>há nevoeiro</em>.'},
  {q:'Quando eu ___,  estava a chover. (я вышел)',opts:['saía','sai','saí','saia'],ans:2,exp:'Однократное завершённое действие → perfeito: <em>saí</em>. «Estava a chover» — фон (imperfeito).'},
  {q:'Como se diz «лето» em português?',opts:['primavera','outono','inverno','verão'],ans:3,exp:'<em>Verão</em> = лето. Primavera = весна, outono = осень, inverno = зима.'},
  {q:'No ___ faz muito frio em Portugal. (зимой)',opts:['verão','primavera','inverno','outono'],ans:2,exp:'<em>No inverno</em> faz frio. Предлог no (em+o) для verão e inverno; na для primavera e outono.'},
  {q:'O sol ___ o dia todo. (светило — imperfeito)',opts:['brilhou','brilha','brilhava','brilhasse'],ans:2,exp:'Описание состояния весь день → imperfeito: <em>brilhava</em>. Brilhou = однократно вспыхнул.'},
  {q:'Em ___ começa o outono. (сентябрь)',opts:['agosto','outubro','setembro','novembro'],ans:2,exp:'<em>Setembro</em> = сентябрь. Outono (осень) начинается в setembro.'},
  {q:'A ___ do Algarve é dourada. (песок)',opts:['onda','areia','praia','costa'],ans:1,exp:'<em>Areia</em> = песок. Onda = волна, praia = пляж, costa = побережье.'},
  {q:'Fazia frio e ___ muita chuva quando chegámos. (был)',opts:['foi','era','havia','houve'],ans:2,exp:'Фоновое состояние прошлого → <em>havia</em> (imperfeito de haver). Houve = perfeito (одноразовое).'},
];
let answers=new Array(quizData.length).fill(null),correct=0;
function W9buildQuiz(){
  const c=document.getElementById('W9quiz-container');c.innerHTML='';
  answers=new Array(quizData.length).fill(null);correct=0;W9updateScore();
  quizData.forEach((q,i)=>{
    const b=document.createElement('div');b.className='quiz-box';b.id='q'+i;
    b.innerHTML=`<div class="q">${i+1}. ${q.q}</div><div class="options">${q.opts.map((o,j)=>`<button class="opt" onclick="W9answer(${i},${j})">${o}</button>`).join('')}</div><div class="quiz-feedback" id="W9qf${i}"></div>`;
    c.appendChild(b);
  });
  document.getElementById('W9reset-btn').style.display='none';
}
function W9answer(qi,oi){
  if(answers[qi]!==null)return;answers[qi]=oi;
  const q=quizData[qi];
  document.querySelectorAll(`#W9q${qi} .opt`).forEach((o,j)=>{o.classList.add('disabled');if(j===q.ans)o.classList.add('correct');else if(j===oi)o.classList.add('wrong');});
  const fb=document.getElementById('W9qf'+qi);
  if(oi===q.ans){correct++;fb.innerHTML='✓ Верно! '+q.exp;fb.className='quiz-feedback show ok';}
  else{fb.innerHTML='✗ Неверно. '+q.exp;fb.className='quiz-feedback show no';}
  W9updateScore();
  if(answers.every(a=>a!==null)){document.getElementById('W9reset-btn').style.display='inline-block';W9updateProgress();}
}
function W9updateScore(){const d=answers.filter(a=>a!==null).length;document.getElementById('W9score-display').textContent=`Отвечено: ${d} / ${quizData.length} · Правильно: ${correct}`;}
function W9resetQuiz(){W9buildQuiz();}
W9buildQuiz();
function W9updateProgress(){
  const pct=Math.round(correct/quizData.length*100);
  document.querySelectorAll('.prog-fill').forEach(f=>{f.style.width=pct+'%';});
  document.querySelectorAll('.prog-pct').forEach(p=>{p.textContent=pct+'%';});
}

const jFB={
  1:{keys:['estar','fazer','calor','frio','vento','sol','nevoeiro','trovoada','há'],
     ok:'✓ Отлично! Три конструкции освоены.<br><br>Дополнение: fazer нельзя использовать для личных состояний — «faz sede» не говорят, только «tenho sede» (хочу пить). Fazer только для внешних погодных явлений. А estar — для состояний, которые можно «пощупать» (холодно снаружи, облачно).',
     tip:'💡 Три правила: <strong>Fazer</strong> + существительное (calor, frio, vento, sol). <strong>Estar</strong> + прилагательное (nublado, húmido) или estar a + inf (chover, nevar). <strong>Há</strong> + явление (nevoeiro, trovoada, neve). Напишите по 2 примера каждого.'},
  2:{keys:['fazia','estava','chovia','era','imperfeito','фон','saí','chegou','de repente','quando'],
     ok:'✓ Хороший нарратив! Проверьте формулу: imperfeito (фон) + perfeito (событие). Есть ли у вас хотя бы одна смена: «фон → событие → новое состояние»? Это делает рассказ живым.',
     tip:'💡 Попробуйте формулу: «Era uma tarde de [сезон]. [Погода imperfeito]. De repente, [событие perfeito]. [Реакция/состояние imperfeito].» Это классическая нарративная дуга португальского рассказа.'},
  3:{keys:['estar','fazer','há','imperfeito','chovia','estava','nevoeiro','floresta','praia','verão'],
     ok:'✓ Точный пробел — половина решения. Если сложна нарративная функция imperfeito — перечитайте три роли (фон, прерванное действие, привычка) и напишите по одному примеру каждой прямо сейчас.',
     tip:'💡 Конкретизируйте: три конструкции погоды (estar/fazer/há) — выучите как три отдельные формулы, не смешивайте. Нарративный imperfeito — думайте о нём как о «фоновой музыке» к фильму, а perfeito — это «действие в кадре».'},
};
function W9checkJ(n){
  const v=document.getElementById('W9j'+n).value.trim().toLowerCase();
  const fb=document.getElementById('W9jr'+n);const d=jFB[n];
  if(!v||v.length<15){fb.innerHTML='⚠️ Напишите подробнее.';fb.className='response-box show info';return;}
  const has=d.keys.some(k=>v.includes(k));
  fb.innerHTML=has?d.ok:d.tip;fb.className='response-box show '+(has?'ok':'info');
}
window.W9answer = W9answer;
window.W9checkJ = W9checkJ;
window.W9resetQuiz = W9resetQuiz;
})();
