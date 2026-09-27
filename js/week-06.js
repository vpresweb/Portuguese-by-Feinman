// A1 Week 6
(function(){



// ROOMS
const rooms=[
  {icon:'🛋',pt:'a sala',ipa:'[ɐ ˈsalɐ]',ru:'гостиная'},
  {icon:'🛏',pt:'o quarto',ipa:'[u ˈkwaɾtu]',ru:'спальня / комната'},
  {icon:'🍳',pt:'a cozinha',ipa:'[ɐ kuˈziɲɐ]',ru:'кухня'},
  {icon:'🚿',pt:'a casa de banho',ipa:'[ɐ ˈkazɐ dɨ ˈbɐɲu]',ru:'ванная (EP)'},
  {icon:'🚪',pt:'o corredor',ipa:'[u kuʁɨˈdoɾ]',ru:'коридор'},
  {icon:'🌿',pt:'a varanda',ipa:'[ɐ vɐˈɾãndɐ]',ru:'балкон / веранда'},
  {icon:'🏠',pt:'o sótão',ipa:'[u ˈsɔtãw̃]',ru:'чердак'},
  {icon:'🚗',pt:'a garagem',ipa:'[ɐ ɡɐˈɾaʒẽj̃]',ru:'гараж'},
  {icon:'📦',pt:'a cave',ipa:'[ɐ ˈkavɨ]',ru:'подвал (EP)'},
  {icon:'🪟',pt:'a janela',ipa:'[ɐ ʒɐˈnɛlɐ]',ru:'окно'},
  {icon:'🚪',pt:'a porta',ipa:'[ɐ ˈpɔɾtɐ]',ru:'дверь'},
  {icon:'🧗',pt:'as escadas',ipa:'[ɐʃ ɨʃˈkadɐʃ]',ru:'лестница'},
];
const rg=document.getElementById('W6room-grid');
rooms.forEach(r=>{
  const el=document.createElement('div');el.className='room-card';
  el.innerHTML=`<div class="room-icon">${r.icon}</div><span class="room-pt">${r.pt}</span><span class="room-ipa">${r.ipa}</span><span class="room-ru">${r.ru}</span>`;
  el.onclick=()=>speak(r.pt);rg.appendChild(el);
});

// FURNITURE
const furns=[
  {pt:'o sofá',ipa:'[u suˈfa]',ru:'диван',ex:'O sofá é confortável.'},
  {pt:'a cama',ipa:'[ɐ ˈkɐmɐ]',ru:'кровать',ex:'uma cama de casal'},
  {pt:'a mesa',ipa:'[ɐ ˈmezɐ]',ru:'стол',ex:'a mesa da cozinha'},
  {pt:'a cadeira',ipa:'[ɐ kɐˈdɐjɾɐ]',ru:'стул',ex:'quatro cadeiras'},
  {pt:'o armário',ipa:'[u ɐɾˈmaɾju]',ru:'шкаф',ex:'armário embutido'},
  {pt:'a estante',ipa:'[ɐ ɨʃˈtãntɨ]',ru:'стеллаж / полка',ex:'estante de livros'},
  {pt:'o espelho',ipa:'[u ɨʃˈpɐʎu]',ru:'зеркало',ex:'espelho no corredor'},
  {pt:'o tapete',ipa:'[u tɐˈpɛtɨ]',ru:'ковёр',ex:'tapete persa'},
  {pt:'a cortina',ipa:'[ɐ kuɾˈtinɐ]',ru:'штора',ex:'cortinas brancas'},
  {pt:'o frigorífico',ipa:'[u fɾiɡuˈɾifiku]',ru:'холодильник (EP)',ex:'O frigorífico é novo.'},
  {pt:'o fogão',ipa:'[u fuˈɡãw̃]',ru:'плита',ex:'fogão a gás'},
  {pt:'a máquina de lavar',ipa:'[ɐ ˈmɐkinɐ]',ru:'стиральная машина',ex:'máquina de lavar roupa'},
];
const fg=document.getElementById('W6furn-grid');
furns.forEach(f=>{
  const el=document.createElement('div');el.className='vocab-card';
  el.innerHTML=`<span class="vc-pt">${f.pt}</span><span class="vc-ipa">${f.ipa}</span><span class="vc-ru">${f.ru}</span><span class="vc-ex">${f.ex}</span>`;
  el.onclick=()=>speak(f.pt);fg.appendChild(el);
});

// PREP PLACE
const preps=[
  {pt:'em cima de',ru:'на (сверху)',ex:'O livro está em cima da mesa.'},
  {pt:'em baixo de',ru:'под',ex:'O gato está em baixo da cama.'},
  {pt:'ao lado de',ru:'рядом с',ex:'O sofá fica ao lado da janela.'},
  {pt:'em frente a',ru:'напротив',ex:'A televisão está em frente ao sofá.'},
  {pt:'atrás de',ru:'за (позади)',ex:'O quadro está atrás do armário.'},
  {pt:'dentro de',ru:'внутри',ex:'As chaves estão dentro da mala.'},
  {pt:'fora de',ru:'снаружи',ex:'Os sapatos estão fora do quarto.'},
  {pt:'entre',ru:'между',ex:'A mesa fica entre as duas janelas.'},
  {pt:'à esquerda de',ru:'слева от',ex:'A cozinha fica à esquerda do corredor.'},
  {pt:'à direita de',ru:'справа от',ex:'O quarto fica à direita da sala.'},
  {pt:'perto de',ru:'близко от',ex:'A escola fica perto de casa.'},
  {pt:'longe de',ru:'далеко от',ex:'O trabalho fica longe de casa.'},
];
const pg=document.getElementById('W6prep-grid');
preps.forEach(p=>{
  const el=document.createElement('div');el.className='ppc';
  el.innerHTML=`<span class="ppc-pt">${p.pt}</span><span class="ppc-ru">${p.ru}</span><span class="ppc-ex">${p.ex}</span>`;
  pg.appendChild(el);
});

// DIALOGUE
const lines=[
  {s:'left',av:'🧑',pt:'Bom dia! Estou a ligar sobre o apartamento T2 que vi no anúncio.',ipa:'[bõ ˈdi.ɐ | ɨʃˈtou ɐ liˈɡaɾ ˈsobɾɨ u ɐpɐɾtɐˈmẽntu]',ru:'Доброе утро! Звоню по объявлению о квартире T2.'},
  {s:'right',av:'👩',pt:'Bom dia! Sim, o apartamento ainda está disponível. Tem 75 metros quadrados.',ipa:'[sĩ u ɐpɐɾtɐˈmẽntu ɐˈĩndɐ ɨʃta diʃpuˈniˈvɛɫ]',ru:'Доброе утро! Да, квартира ещё свободна. 75 квадратных метров.'},
  {s:'left',av:'🧑',pt:'Em que andar fica? Tem elevador?',ipa:'[ẽ kɨ ˈãndɐɾ ˈfikɐ | tẽj̃ ɨlɨˈvadoɾ]',ru:'На каком этаже? Есть лифт?'},
  {s:'right',av:'👩',pt:'Fica no terceiro andar e sim, tem elevador. É um prédio moderno.',ipa:'[ˈfikɐ nu tɨɾˈsɐjɾu ˈãndɐɾ | i sĩ tẽj̃ ɨlɨˈvadoɾ]',ru:'На третьем этаже, и да, лифт есть. Современный дом.'},
  {s:'left',av:'🧑',pt:'O apartamento é mobilado? E a renda inclui o condomínio?',ipa:'[u ɐpɐɾtɐˈmẽntu ˈɛ mubiˈladu | i ɐ ˈʁẽndɐ ĩˈklwi u kõnduˈminju]',ru:'Квартира меблирована? И аренда включает плату за обслуживание?'},
  {s:'right',av:'👩',pt:'É mobilado, sim. A renda é de mil euros e o condomínio não está incluído — são mais cinquenta euros por mês.',ipa:'[ˈɛ mubiˈladu sĩ | ɐ ˈʁẽndɐ ˈɛ dɨ miɫ ˈewɾuʃ]',ru:'Да, меблирована. Аренда 1000 €, обслуживание не включено — ещё 50 €/мес.'},
  {s:'left',av:'🧑',pt:'Posso visitar o apartamento esta semana?',ipa:'[ˈposu viziˈtaɾ u ɐpɐɾtɐˈmẽntu ˈɛʃtɐ sɨˈmɐnɐ]',ru:'Могу я осмотреть квартиру на этой неделе?'},
  {s:'right',av:'👩',pt:'Claro! Pode vir amanhã às 18h, se lhe for conveniente.',ipa:'[ˈklaɾu | ˈpɔdɨ viɾ ɐˈmɐɲã aʃ dezoitu]',ru:'Конечно! Можете приехать завтра в 18:00, если удобно.'},
];
const db=document.getElementById('W6dialogue-box');
lines.forEach(l=>{
  const d=document.createElement('div');
  d.className='d-line'+(l.s==='right'?' right':'');
  d.innerHTML=`<div class="d-avatar">${l.av}</div><div class="d-bubble" onclick="speak('${l.pt.replace(/'/g,"\\'")}')"><span class="d-pt">${l.pt}</span><span class="d-ipa">${l.ipa}</span><span class="d-ru">${l.ru}</span></div>`;
  db.appendChild(d);
});

// QUIZ
const quizData=[
  {q:'O banco ___ ao lado do supermercado. (находится — постоянно)',opts:['está','é','fica','tem'],ans:2,exp:'Постоянное местонахождение → <em>ficar</em>. O banco <em>fica</em> ao lado do supermercado.'},
  {q:'O livro está em cima ___ mesa.',opts:['do','da','de','ao'],ans:1,exp:'em cima de + a mesa → <em>da</em> mesa (de+a).'},
  {q:'Em Portugal, um T2 tem ___.',opts:['0 quartos','1 quarto','2 quartos','3 quartos'],ans:1,exp:'T2 = 1 sala + <em>1 quarto</em>. O número indica quartos (T de Tipologia).'},
  {q:'Fiquei muito ___ com a notícia. (обрадовался)',opts:['contente','contento','contentes','conteúdo'],ans:0,exp:'Ficar + adjectivo: fiquei <em>contente</em> (adj. invariável para m/f).'},
  {q:'A casa de banho fica ___ do corredor.',opts:['ao lado','em frente','no fim','em cima'],ans:2,exp:'<em>No fim do corredor</em> — в конце коридора. Типичное расположение ванной.'},
  {q:'Em Portugal, a palavra para «холодильник» é ___.',opts:['geladeira','frigorífico','refrigerador','geleira'],ans:1,exp:'EP: <em>frigorífico</em>. BP: geladeira. Não confunda com geleira (glacier).'},
  {q:'___ em casa hoje porque está a chover. (остаюсь)',opts:['Estou','Fico','Sou','Tenho'],ans:1,exp:'Оставаться → <em>ficar</em>. Fico em casa hoje.'},
  {q:'O sofá está ___ a janela e a televisão.',opts:['entre','dentro de','atrás de','em cima de'],ans:0,exp:'<em>Entre</em> = между. O sofá está <em>entre</em> a janela e a televisão.'},
  {q:'Em EP, «снимать квартиру» é ___.',opts:['alugar','arrendar','comprar','reservar'],ans:1,exp:'EP: <em>arrendar</em>. BP: alugar. Ambos existem, mas arrendar é o termo standard em Portugal.'},
  {q:'Há ___ espelho no corredor. (есть зеркало)',opts:['um','uma','uns','umas'],ans:0,exp:'Espelho — мужской род → <em>um</em> espelho.'},
];
let answers=new Array(quizData.length).fill(null),correct=0;
function W6buildQuiz(){
  const c=document.getElementById('W6quiz-container');c.innerHTML='';
  answers=new Array(quizData.length).fill(null);correct=0;W6updateScore();
  quizData.forEach((q,i)=>{
    const b=document.createElement('div');b.className='quiz-box';b.id='q'+i;
    b.innerHTML=`<div class="q">${i+1}. ${q.q}</div><div class="options">${q.opts.map((o,j)=>`<button class="opt" onclick="W6answer(${i},${j})">${o}</button>`).join('')}</div><div class="quiz-feedback" id="W6qf${i}"></div>`;
    c.appendChild(b);
  });
  document.getElementById('W6reset-btn').style.display='none';
}
function W6answer(qi,oi){
  if(answers[qi]!==null)return;answers[qi]=oi;
  const q=quizData[qi];
  document.querySelectorAll(`#W6q${qi} .opt`).forEach((o,j)=>{o.classList.add('disabled');if(j===q.ans)o.classList.add('correct');else if(j===oi)o.classList.add('wrong');});
  const fb=document.getElementById('W6qf'+qi);
  if(oi===q.ans){correct++;fb.innerHTML='✓ Верно! '+q.exp;fb.className='quiz-feedback show ok';}
  else{fb.innerHTML='✗ Неверно. '+q.exp;fb.className='quiz-feedback show no';}
  W6updateScore();
  if(answers.every(a=>a!==null)){document.getElementById('W6reset-btn').style.display='inline-block';W6updateProgress();}
}
function W6updateScore(){const d=answers.filter(a=>a!==null).length;document.getElementById('W6score-display').textContent=`Отвечено: ${d} / ${quizData.length} · Правильно: ${correct}`;}
function W6resetQuiz(){W6buildQuiz();}
W6buildQuiz();
function W6updateProgress(){
  const pct=Math.round(correct/quizData.length*100);
  document.querySelectorAll('.prog-fill').forEach(f=>{f.style.width=pct+'%';});
  document.querySelectorAll('.prog-pct').forEach(p=>{p.textContent=pct+'%';});
}
const jFB={
  1:{keys:['находит','остает','становит','fica','localiz','permane','resulta'],
     ok:'✓ Три значения схвачены верно!<br><br>Тонкий момент: <em>ficar</em> vs <em>estar</em> для местонахождения. Правило: <em>ficar</em> для постоянного («банк всегда здесь»), <em>estar</em> для временного («книга сейчас здесь»). Но в разговорном EP их часто смешивают — <em>ficar</em> побеждает.',
     tip:'💡 Три значения: 1) местонахождение (O banco fica...) 2) оставаться (Fico em casa) 3) становиться (Fiquei contente). Напишите по 2 примера каждого.'},
  2:{keys:['quarto','sala','cozinha','fica','está','há','em cima','ao lado','atrás'],
     ok:'✓ Хорошее описание! Проверьте контракции предлогов места: em cima DA mesa (не «de a»), ao lado DO sofá (не «de o»). Это частая ошибка — предлог сливается с артиклем.',
     tip:'💡 Структура описания: тип квартиры → комнаты → мебель → расположение предметов. Используйте: tem, há, fica, está + предлоги места.'},
  3:{keys:['ficar','estar','предлог','контракц','arrendar','mobilad','andar'],
     ok:'✓ Отличная рефлексия. Самый частый пробел здесь — ficar vs estar. Совет: каждый раз когда пишете о местонахождении, задайте вопрос «это постоянно?» — да → ficar, нет/временно → estar.',
     tip:'💡 Уточните пробел. Предлоги места + контракции: составьте таблицу em cima de + o/a = do/da для всех предлогов. Повторите 3 раза вслух с реальными предметами вокруг вас.'},
};
function W6checkJ(n){
  const v=document.getElementById('W6j'+n).value.trim().toLowerCase();
  const fb=document.getElementById('W6jr'+n);const d=jFB[n];
  if(!v||v.length<15){fb.innerHTML='⚠️ Напишите подробнее.';fb.className='response-box show info';return;}
  const has=d.keys.some(k=>v.includes(k));
  fb.innerHTML=has?d.ok:d.tip;fb.className='response-box show '+(has?'ok':'info');
}
window.W6answer = W6answer;
window.W6checkJ = W6checkJ;
window.W6resetQuiz = W6resetQuiz;
})();
