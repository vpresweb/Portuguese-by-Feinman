// A1 Week 7
(function(){



function W7makeGrid(data,id){
  const g=document.getElementById('W7' + id);if(!g)return;
  data.forEach(d=>{
    const el=document.createElement('div');el.className='vocab-card';
    el.innerHTML=`<span class="vc-pt">${d.pt}</span><span class="vc-ipa">${d.ipa}</span><span class="vc-ru">${d.ru}</span><span class="vc-ex">${d.ex}</span>`;
    el.onclick=()=>speak(d.pt);g.appendChild(el);
  });
}

W7makeGrid([
  {pt:'o comboio',ipa:'[u kõˈboju]',ru:'поезд (EP)',ex:'O comboio parte às 16h.'},
  {pt:'o autocarro',ipa:'[u ˈawtukɐʁu]',ru:'автобус (EP)',ex:'Apanho o autocarro 736.'},
  {pt:'o metro',ipa:'[u ˈmɛtɾu]',ru:'метро',ex:'O metro é rápido em Lisboa.'},
  {pt:'o eléctrico',ipa:'[u ɨˈlɛtɾiku]',ru:'трамвай (EP)',ex:'O eléctrico 28 passa na Alfama.'},
  {pt:'o táxi',ipa:'[u ˈtaksi]',ru:'такси',ex:'Chamo um táxi pelo Bolt.'},
  {pt:'o avião',ipa:'[u ɐviˈãw̃]',ru:'самолёт',ex:'O avião parte de Lisboa.'},
  {pt:'a paragem',ipa:'[ɐ pɐˈɾaʒẽj̃]',ru:'остановка (EP)',ex:'A paragem fica ali.'},
  {pt:'a bilheteira',ipa:'[ɐ biʎɨˈtɐjɾɐ]',ru:'касса (EP)',ex:'Compro o bilhete na bilheteira.'},
],'transport-grid');

W7makeGrid([
  {pt:'Portugal',ipa:'[puɾtuˈɡaɫ]',ru:'Португалия',ex:'Moro em Portugal.'},
  {pt:'português/a',ipa:'[puɾtuˈɡeʃ/ɐ]',ru:'португальский/ец',ex:'Falo português.'},
  {pt:'Espanha',ipa:'[ɨʃˈpɐɲɐ]',ru:'Испания',ex:'Vou a Espanha de comboio.'},
  {pt:'França',ipa:'[ˈfɾãsɐ]',ru:'Франция',ex:'Paris fica em França.'},
  {pt:'Alemanha',ipa:'[ɐlɨˈmɐɲɐ]',ru:'Германия',ex:'Viajo para a Alemanha.'},
  {pt:'a Rússia',ipa:'[ɐ ˈʁusiɐ]',ru:'Россия',ex:'Sou da Rússia.'},
  {pt:'o Reino Unido',ipa:'[u ˈʁɐjnu uˈnidu]',ru:'Великобритания',ex:'Ele é do Reino Unido.'},
  {pt:'os Estados Unidos',ipa:'[uʃ ɨʃˈtaduʃ uˈniduʃ]',ru:'США',ex:'Ela vive nos EUA.'},
],'countries-grid');

const lines=[
  {s:'left',av:'🧑',pt:'Bom dia! Queria um bilhete para o Porto no Alfa Pendular.',ipa:'[bõ ˈdi.ɐ | kiˈɾiɐ ũ biˈʎɛtɨ ˈpaɾɐ u ˈpoɾtu]',ru:'Доброе утро! Хотел бы билет до Порту на Alfa Pendular.'},
  {s:'right',av:'👩',pt:'Ida ou ida e volta?',ipa:'[ˈidɐ ow ˈidɐ i ˈvɔɫtɐ]',ru:'В одну сторону или туда-обратно?'},
  {s:'left',av:'🧑',pt:'Só de ida, por favor. A que horas parte o próximo?',ipa:'[sɔ dɨ ˈidɐ puɾ fɐˈvoɾ | ɐ kɨ ˈɔɾɐʃ ˈpaɾtɨ u ˈpɾɔsimu]',ru:'Только туда. Когда отходит следующий?'},
  {s:'right',av:'👩',pt:'O próximo parte às dezasseis e quarenta e chega às dezanove e vinte.',ipa:'[u ˈpɾɔsimu ˈpaɾtɨ aʃ dɨzɐˈsɐjʃ i kwɐˈɾẽntɐ]',ru:'Следующий отходит в 16:40 и прибывает в 19:20.'},
  {s:'left',av:'🧑',pt:'Tem lugares na segunda classe?',ipa:'[tẽj̃ ˈluɡɐɾɨʃ nɐ sɨˈɡũndɐ ˈklasɨ]',ru:'Есть места во втором классе?'},
  {s:'right',av:'👩',pt:'Sim, temos. São vinte e dois euros. Paga em dinheiro ou por multibanco?',ipa:'[sĩ ˈtemuʃ | sãw̃ ˈvĩntɨ i ˈdojʃ ˈewɾuʃ]',ru:'Да, есть. 22 евро. Платите наличными или картой (Multibanco)?'},
  {s:'left',av:'🧑',pt:'Por multibanco, se faz favor. Em que cais parte?',ipa:'[puɾ muɫtiˈbɐŋku | ẽ kɨ ˈkajʃ ˈpaɾtɨ]',ru:'Картой, пожалуйста. С какого пути отходит?'},
  {s:'right',av:'👩',pt:'Cais número três. Não se esqueça de validar o bilhete antes de entrar.',ipa:'[ˈkajʃ ˈnumeɾu tɾeʃ | nãw̃ sɨ ɨʃˈkɛsɐ dɨ vɐlidaɾ]',ru:'Платформа три. Не забудьте прокомпостировать билет перед входом.'},
];
const db=document.getElementById('W7dialogue-box');
lines.forEach(l=>{
  const d=document.createElement('div');d.className='d-line'+(l.s==='right'?' right':'');
  d.innerHTML=`<div class="d-avatar">${l.av}</div><div class="d-bubble" onclick="speak('${l.pt.replace(/'/g,"\\'")}')"><span class="d-pt">${l.pt}</span><span class="d-ipa">${l.ipa}</span><span class="d-ru">${l.ru}</span></div>`;
  db.appendChild(d);
});

const quizData=[
  {q:'Amanhã ___ ao Porto. (я поеду — ir+inf)',opts:['irei','vou ir','vou','fui'],ans:1,exp:'Ir + infinitivo: <em>vou ir</em> ao Porto. Или просто: Vou ao Porto (ir как глагол движения).'},
  {q:'Como se chama o comboio rápido EP de Lisboa ao Porto?',opts:['TGV','Intercity','Alfa Pendular','Regional'],ans:2,exp:'<em>Alfa Pendular</em> — самый быстрый поезд CP. Лиссабон–Порту за ~2ч45.'},
  {q:'Queria um bilhete ___ e volta.',opts:['ida','ido','vinda','volta'],ans:0,exp:'<em>Ida e volta</em> = туда-обратно. Só de <em>ida</em> = только туда.'},
  {q:'Como se diz «автобус» em EP?',opts:['ônibus','autobús','autocarro','camioneta'],ans:2,exp:'EP: <em>autocarro</em>. BP: ônibus. Camioneta — грузовик или туристический автобус.'},
  {q:'O comboio ___ às 16h e ___ às 19h.',opts:['parte / chega','vai / vem','sai / entra','parte / vai'],ans:0,exp:'<em>Partir</em> = отправляться; <em>chegar</em> = прибывать. O comboio <em>parte</em> e <em>chega</em>.'},
  {q:'Em EP: «Em que ___ parte o comboio?» (платформа)',opts:['plataforma','andén','cais','linha'],ans:2,exp:'EP: <em>cais</em> = платформа/путь. «Em que cais parte?» — стандартный вопрос на вокзале.'},
  {q:'Futuro simples: ela ___ amanhã. (falar)',opts:['vai falar','falará','falará-á','falasse'],ans:1,exp:'Futuro simples: ela <em>falará</em>. Инфинитив + á для 3-го лица ед.ч.'},
  {q:'Não se ___ de validar o bilhete! (esquecer)',opts:['esqueça','esqueça-se','esqueças','esquece'],ans:0,exp:'<em>Não se esqueça</em> — форма imperativo (повелительное) + рефлексив. Запомните как фразу целиком.'},
  {q:'Como se chama a paragem em EP?',opts:['parada','ponto','paragem','estação'],ans:2,exp:'EP: <em>paragem</em>. BP: ponto ou parada. Estação — станция (метро, ж/д).'},
  {q:'___ visitar Portugal um dia. (я посещу — futuro simples)',opts:['Vou','Visitarei','Visitava','Visitei'],ans:1,exp:'Мечта / отдалённое будущее → futuro simples: <em>Visitarei</em> Portugal um dia.'},
];
let answers=new Array(quizData.length).fill(null),correct=0;
function W7buildQuiz(){
  const c=document.getElementById('W7quiz-container');c.innerHTML='';
  answers=new Array(quizData.length).fill(null);correct=0;W7updateScore();
  quizData.forEach((q,i)=>{
    const b=document.createElement('div');b.className='quiz-box';b.id='q'+i;
    b.innerHTML=`<div class="q">${i+1}. ${q.q}</div><div class="options">${q.opts.map((o,j)=>`<button class="opt" onclick="W7answer(${i},${j})">${o}</button>`).join('')}</div><div class="quiz-feedback" id="W7qf${i}"></div>`;
    c.appendChild(b);
  });
  document.getElementById('W7reset-btn').style.display='none';
}
function W7answer(qi,oi){
  if(answers[qi]!==null)return;answers[qi]=oi;
  const q=quizData[qi];
  document.querySelectorAll(`#W7q${qi} .opt`).forEach((o,j)=>{o.classList.add('disabled');if(j===q.ans)o.classList.add('correct');else if(j===oi)o.classList.add('wrong');});
  const fb=document.getElementById('W7qf'+qi);
  if(oi===q.ans){correct++;fb.innerHTML='✓ Верно! '+q.exp;fb.className='quiz-feedback show ok';}
  else{fb.innerHTML='✗ Неверно. '+q.exp;fb.className='quiz-feedback show no';}
  W7updateScore();
  if(answers.every(a=>a!==null)){document.getElementById('W7reset-btn').style.display='inline-block';W7updateProgress();}
}
function W7updateScore(){const d=answers.filter(a=>a!==null).length;document.getElementById('W7score-display').textContent=`Отвечено: ${d} / ${quizData.length} · Правильно: ${correct}`;}
function W7resetQuiz(){W7buildQuiz();}
W7buildQuiz();
function W7updateProgress(){
  const pct=Math.round(correct/quizData.length*100);
  document.querySelectorAll('.prog-fill').forEach(f=>{f.style.width=pct+'%';});
  document.querySelectorAll('.prog-pct').forEach(p=>{p.textContent=pct+'%';});
}
const jFB={
  1:{keys:['vou','futuro','amanhã','um dia','мечт','конкретн','разговор','письм'],
     ok:'✓ Отлично! Суть схвачена: vou+inf = конкретный план (как to be going to), futuro simples = отдалённое/формальное.<br><br>Дополнение: в EP разговорной речи futuro simples почти исчез — его заменил vou+inf. Futuro simples живёт в газетах, официальных речах и пословицах.',
     tip:'💡 Ключевая разница: «Vou comer agora» (ем сейчас / вот-вот) vs «Comerei quando tiver fome» (поем когда проголодаюсь — неопределённое). Напишите по 2 примера каждого.'},
  2:{keys:['vou','vamos','vão','visitarei','partirei','mês','agosto','semana','comboio','avião'],
     ok:'✓ Хорошо! Проверьте: использовали оба вида будущего? Есть транспортная лексика (comboio, avião, apanhar)? Добавьте страну назначения с правильным предлогом (a + страна без артикля, ao + страна с артиклем).',
     tip:'💡 Структура: «No próximo mês vou...» (ближайший план, ir+inf). «No próximo ano visitarei...» (мечта, futuro simples). Добавьте транспорт: «Vou de comboio / de avião».'},
  3:{keys:['futuro','falare','falará','comboio','autocarro','bilheir','validar','cais'],
     ok:'✓ Правильно выявленный пробел. Для futuro simples: просто добавляйте окончания к инфинитиву (-ei, -ás, -á, -emos, -ão). Исключения: fazer→farei, dizer→direi, trazer→trarei.',
     tip:'💡 Запишите 5 глаголов в futuro simples (eu/ele/eles) прямо сейчас вслух. Повторение вслух фиксирует быстрее, чем чтение.'},
};
function W7checkJ(n){
  const v=document.getElementById('W7j'+n).value.trim().toLowerCase();
  const fb=document.getElementById('W7jr'+n);const d=jFB[n];
  if(!v||v.length<15){fb.innerHTML='⚠️ Напишите подробнее.';fb.className='response-box show info';return;}
  const has=d.keys.some(k=>v.includes(k));
  fb.innerHTML=has?d.ok:d.tip;fb.className='response-box show '+(has?'ok':'info');
}
window.W7answer = W7answer;
window.W7checkJ = W7checkJ;
window.W7resetQuiz = W7resetQuiz;
})();
