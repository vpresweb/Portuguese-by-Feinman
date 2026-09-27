// A1 Week 5
(function(){



// TIMELINE
const timeline=[
  {t:'07:00',pt:'Levanto-me e lavo-me.',ru:'Встаю и умываюсь.'},
  {t:'07:15',pt:'Visto-me e penteio-me.',ru:'Одеваюсь и причёсываюсь.'},
  {t:'07:30',pt:'Tomo o pequeno-almoço.',ru:'Завтракаю.'},
  {t:'08:00',pt:'Saio de casa e apanho o metro.',ru:'Выхожу из дома и сажусь на метро.'},
  {t:'09:00',pt:'Chego ao trabalho.',ru:'Прихожу на работу.'},
  {t:'13:00',pt:'Costumo almoçar com os colegas.',ru:'Обычно обедаю с коллегами.'},
  {t:'18:30',pt:'Saio do trabalho e volto para casa.',ru:'Ухожу с работы и возвращаюсь домой.'},
  {t:'19:30',pt:'Janto e vejo televisão.',ru:'Ужинаю и смотрю телевизор.'},
  {t:'22:30',pt:'Tomo banho e leio um pouco.',ru:'Принимаю душ и немного читаю.'},
  {t:'23:30',pt:'Deito-me e adormeço.',ru:'Ложусь спать и засыпаю.'},
];
const tl=document.getElementById('W5timeline');
timeline.forEach(e=>{
  const d=document.createElement('div');
  d.className='timeline-day';
  d.innerHTML=`<span class="tl-time">${e.t}</span><div><span class="tl-pt">${e.pt}</span><div class="tl-ru">${e.ru}</div></div>`;
  d.onclick=()=>speak(e.pt);
  tl.appendChild(d);
});

// ADVERBS
const advs=[
  {pt:'sempre',ipa:'[ˈsẽpɾɨ]',ru:'всегда',ex:'Sempre tomo café de manhã.'},
  {pt:'nunca',ipa:'[ˈnũkɐ]',ru:'никогда',ex:'Nunca me deito antes da meia-noite.'},
  {pt:'às vezes',ipa:'[aʃ ˈvezɨʃ]',ru:'иногда',ex:'Às vezes vou ao ginásio.'},
  {pt:'normalmente',ipa:'[noɾmɐɫˈmẽntɨ]',ru:'обычно',ex:'Normalmente almoço às 13h.'},
  {pt:'frequentemente',ipa:'[fɾɨkwẽntɨˈmẽntɨ]',ru:'часто',ex:'Frequentemente leio à noite.'},
  {pt:'raramente',ipa:'[ʁɐɾɐˈmẽntɨ]',ru:'редко',ex:'Raramente como fast food.'},
  {pt:'de manhã',ipa:'[dɨ mɐˈɲã]',ru:'утром',ex:'De manhã, levanto-me cedo.'},
  {pt:'à tarde',ipa:'[a ˈtaɾdɨ]',ru:'после полудня',ex:'À tarde trabalho em casa.'},
  {pt:'à noite',ipa:'[a ˈnɔitɨ]',ru:'вечером',ex:'À noite vejo séries.'},
  {pt:'ao fim de semana',ipa:'[aw fĩ dɨ sɨˈmɐnɐ]',ru:'на выходных (EP)',ex:'Ao fim de semana descanso.'},
  {pt:'antes de',ipa:'[ˈãntɨʃ dɨ]',ru:'перед тем как',ex:'Antes de sair, tomo café.'},
  {pt:'depois de',ipa:'[dɨˈpojʃ dɨ]',ru:'после того как',ex:'Depois de jantar, leio.'},
];
const ag=document.getElementById('W5adv-grid');
advs.forEach(a=>{
  const el=document.createElement('div');el.className='vocab-card';
  el.innerHTML=`<span class="vc-pt">${a.pt}</span><span class="vc-ipa">${a.ipa}</span><span class="vc-ru">${a.ru}</span><span class="vc-ex">${a.ex}</span>`;
  el.onclick=()=>speak(a.pt);ag.appendChild(el);
});

// MOVEMENT
const moves=[
  {pt:'ir a pé',ipa:'[iɾ ɐ ˈpɛ]',ru:'идти пешком',ex:'Vou a pé ao trabalho.'},
  {pt:'apanhar o metro',ipa:'[ɐpɐˈɲaɾ u ˈmɛtɾu]',ru:'сесть на метро (EP)',ex:'Apanho o metro na Marquês.'},
  {pt:'apanhar o autocarro',ipa:'[u ˈawtukɐʁu]',ru:'сесть на автобус (EP)',ex:'Apanho o 28 na Baixa.'},
  {pt:'conduzir',ipa:'[kõnduˈziɾ]',ru:'водить машину (EP)',ex:'Conduzo até ao escritório.'},
  {pt:'chegar a',ipa:'[ʃɨˈɡaɾ ɐ]',ru:'прибыть в/на',ex:'Chego ao trabalho às 9h.'},
  {pt:'sair de',ipa:'[sɐˈiɾ dɨ]',ru:'выходить из',ex:'Saio de casa às 8h.'},
  {pt:'voltar para',ipa:'[vɔɫˈtaɾ ˈpaɾɐ]',ru:'возвращаться в',ex:'Volto para casa às 19h.'},
  {pt:'passar por',ipa:'[pɐˈsaɾ puɾ]',ru:'проходить мимо',ex:'Passo pelo parque.'},
];
const mg=document.getElementById('W5move-grid');
moves.forEach(m=>{
  const el=document.createElement('div');el.className='vocab-card';
  el.innerHTML=`<span class="vc-pt">${m.pt}</span><span class="vc-ipa">${m.ipa}</span><span class="vc-ru">${m.ru}</span><span class="vc-ex">${m.ex}</span>`;
  el.onclick=()=>speak(m.pt);mg.appendChild(el);
});

// DIALOGUE
const lines=[
  {s:'left',av:'🧑',pt:'A que horas te levantas normalmente?',ipa:'[ɐ kɨ ˈɔɾɐʃ tɨ lɨˈvãntɐʃ noɾmɐɫˈmẽntɨ]',ru:'В котором часу ты обычно встаёшь?'},
  {s:'right',av:'👩',pt:'Levanto-me às sete. Primeiro lavo-me e depois tomo o pequeno-almoço.',ipa:'[lɨˈvãntu mɨ aʃ ˈsɛtɨ | pɾiˈmɐjɾu ˈlavu mɨ]',ru:'Встаю в семь. Сначала умываюсь, потом завтракаю.'},
  {s:'left',av:'🧑',pt:'Como vais para o trabalho? Apanhas o metro?',ipa:'[ˈkomu vɐjʃ ˈpaɾɐ u tɾɐˈbaʎu | ɐˈpɐɲɐʃ u ˈmɛtɾu]',ru:'Как добираешься на работу? На метро?'},
  {s:'right',av:'👩',pt:'Sim, apanho o metro na Picoas. Chego ao escritório às nove.',ipa:'[sĩ ɐˈpɐɲu u ˈmɛtɾu nɐ piˈkoɐʃ | ˈʃɨɡu aw ɨʃkɾiˈtɔɾju aʃ ˈnɔvɨ]',ru:'Да, сажусь на метро на Пикоаш. Прихожу в офис в девять.'},
  {s:'left',av:'🧑',pt:'E ao fim de semana? Costumas sair?',ipa:'[i aw fĩ dɨ sɨˈmɐnɐ | kuʃˈtumɐʃ sɐˈiɾ]',ru:'А на выходных? Обычно выходишь куда-нибудь?'},
  {s:'right',av:'👩',pt:'Às vezes. Normalmente fico em casa e leio. Raramente me deito antes da meia-noite ao fim de semana.',ipa:'[aʃ ˈvezɨʃ | noɾmɐɫˈmẽntɨ ˈfiku ẽ ˈkazɐ]',ru:'Иногда. Обычно остаюсь дома и читаю. Редко ложусь до полуночи на выходных.'},
];
const db=document.getElementById('W5dialogue-box');
lines.forEach(l=>{
  const d=document.createElement('div');
  d.className='d-line'+(l.s==='right'?' right':'');
  d.innerHTML=`<div class="d-avatar">${l.av}</div><div class="d-bubble" onclick="speak('${l.pt.replace(/'/g,"\\'")}')"><span class="d-pt">${l.pt}</span><span class="d-ipa">${l.ipa}</span><span class="d-ru">${l.ru}</span></div>`;
  db.appendChild(d);
});

// QUIZ
const quizData=[
  {q:'Eu ___ às sete. (встаю — EP-порядок)',opts:['me levanto','levanto-me','levante-me','me levante'],ans:1,exp:'В EP рефлексив после глагола: <em>levanto-me</em>. BP: me levanto.'},
  {q:'Não ___ antes da meia-noite. (не ложусь)',opts:['deito-me','me deito','deite-me','me deite'],ans:1,exp:'После отрицания <em>não</em> в EP местоимение идёт перед глаголом: Não <em>me deito</em>.'},
  {q:'___ o autocarro número 28. (сажусь на автобус — EP)',opts:['Pego','Tomo','Apanho','Conduzo'],ans:2,exp:'EP-глагол для транспорта: <em>apanhar</em>. Apanho o autocarro.'},
  {q:'___ almoço às 13h. (обычно обедаю)',opts:['Sempre','Nunca','Normalmente','Raramente'],ans:2,exp:'<em>Normalmente</em> = обычно. Normalmente almoço às 13h.'},
  {q:'___ de casa às oito. (выхожу из дома)',opts:['Chego','Saio','Volto','Passo'],ans:1,exp:'<em>Sair de</em> = выходить из. Saio de casa às oito.'},
  {q:'Depois de ___, vejo televisão. (поужинать)',opts:['janto','jantar','jantei','jantava'],ans:1,exp:'Depois de + <em>infinitivo</em>: depois de <em>jantar</em>.'},
  {q:'Ao ___ de semana descanso. (EP — на выходных)',opts:['fim','final','fundo','fim de'],ans:0,exp:'EP: <em>ao fim de semana</em>. BP: no fim de semana.'},
  {q:'___ ao trabalho a pé. (иду на работу)',opts:['Venho','Chego','Vou','Passo'],ans:2,exp:'Движение от говорящего → <em>ir</em>. Vou ao trabalho a pé.'},
  {q:'Ela ___ às 23h. (ложится спать)',opts:['deita-se','se deita','deitou-se','deitar-se'],ans:0,exp:'3-е лицо ед.ч., EP-порядок: <em>deita-se</em> às 23h.'},
  {q:'___ leio um pouco antes de dormir. (всегда)',opts:['Nunca','Às vezes','Raramente','Sempre'],ans:3,exp:'<em>Sempre</em> = всегда. Sempre leio antes de dormir.'},
];
let answers=new Array(quizData.length).fill(null),correct=0;
function W5buildQuiz(){
  const c=document.getElementById('W5quiz-container');c.innerHTML='';
  answers=new Array(quizData.length).fill(null);correct=0;W5updateScore();
  quizData.forEach((q,i)=>{
    const b=document.createElement('div');b.className='quiz-box';b.id='q'+i;
    b.innerHTML=`<div class="q">${i+1}. ${q.q}</div><div class="options">${q.opts.map((o,j)=>`<button class="opt" onclick="W5answer(${i},${j})">${o}</button>`).join('')}</div><div class="quiz-feedback" id="W5qf${i}"></div>`;
    c.appendChild(b);
  });
  document.getElementById('W5reset-btn').style.display='none';
}
function W5answer(qi,oi){
  if(answers[qi]!==null)return;answers[qi]=oi;
  const q=quizData[qi];
  document.querySelectorAll(`#W5q${qi} .opt`).forEach((o,j)=>{o.classList.add('disabled');if(j===q.ans)o.classList.add('correct');else if(j===oi)o.classList.add('wrong');});
  const fb=document.getElementById('W5qf'+qi);
  if(oi===q.ans){correct++;fb.innerHTML='✓ Верно! '+q.exp;fb.className='quiz-feedback show ok';}
  else{fb.innerHTML='✗ Неверно. '+q.exp;fb.className='quiz-feedback show no';}
  W5updateScore();
  if(answers.every(a=>a!==null)){document.getElementById('W5reset-btn').style.display='inline-block';W5updateProgress();}
}
function W5updateScore(){const d=answers.filter(a=>a!==null).length;document.getElementById('W5score-display').textContent=`Отвечено: ${d} / ${quizData.length} · Правильно: ${correct}`;}
function W5resetQuiz(){W5buildQuiz();}
W5buildQuiz();
function W5updateProgress(){
  const pct=Math.round(correct/quizData.length*100);
  document.querySelectorAll('.prog-fill').forEach(f=>{f.style.width=pct+'%';});
  document.querySelectorAll('.prog-pct').forEach(p=>{p.textContent=pct+'%';});
}
const jFB={
  1:{keys:['после','энклиз','дефис','levanto-me','deito-me','não','отрицан'],
     ok:'✓ Отлично! Главное правило EP схвачено.<br><br>Дополнительный нюанс: в сложном времени местоимение «встраивается» между вспомогательным и основным глаголом: <em>Tenho-me levantado</em> cedo. (Я последнее время встаю рано.) Это перфект непрерывного действия — изучим в неделе 9.',
     tip:'💡 Ключевое: в EP глагол-местоимение (levanto-ME). Исключение: после não/que/quando — местоимение перед глаголом (Não ME levanto cedo). Напишите 3 примера каждого случая.'},
  2:{keys:['levanto-me','deito-me','apanho','normalmente','depois de','antes de','às'],
     ok:'✓ Хороший распорядок! Проверьте три вещи: 1) все рефлексивы в EP-порядке? 2) есть antes de / depois de + infinitivo? 3) использовали ao fim de semana (не no fim de semana)?',
     tip:'💡 Структура: час → рефлексив → наречие. Например: «Às sete levanto-me. Depois lavo-me. Normalmente tomo café antes de sair.» Добавьте antes de / depois de для связности.'},
  3:{keys:['местоимен','рефлексив','apanhar','conduzi','наречи','levanto','deito'],
     ok:'✓ Отличная рефлексия. Конкретный пробел = точное решение. Совет: повторяйте проблемный рефлексив 10 раз вслух в EP-порядке — мышечная память языка важна не меньше, чем теория.',
     tip:'💡 Уточните пробел: если это позиция местоимения — повторите правило с отрицанием. Если конкретные глаголы — добавьте их в Anki с примером предложения.'},
};
function W5checkJ(n){
  const v=document.getElementById('W5j'+n).value.trim().toLowerCase();
  const fb=document.getElementById('W5jr'+n);const d=jFB[n];
  if(!v||v.length<15){fb.innerHTML='⚠️ Напишите подробнее.';fb.className='response-box show info';return;}
  const has=d.keys.some(k=>v.includes(k));
  fb.innerHTML=has?d.ok:d.tip;fb.className='response-box show '+(has?'ok':'info');
}
window.W5answer = W5answer;
window.W5checkJ = W5checkJ;
window.W5resetQuiz = W5resetQuiz;
})();
