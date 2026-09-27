// A1 Week 4
(function(){



// ADJ GRID
const adjs=[
  {pt:'bom / boa',ipa:'[bõ/ˈboɐ]',ru:'хороший/ая',ex:'um bom vinho / uma boa ideia'},
  {pt:'mau / má',ipa:'[maw/ma]',ru:'плохой/ая',ex:'um mau dia / má sorte'},
  {pt:'grande',ipa:'[ˈɡɾãndɨ]',ru:'большой',ex:'uma grande casa'},
  {pt:'pequeno/a',ipa:'[pɨˈkenu/ɐ]',ru:'маленький',ex:'um copo pequeno'},
  {pt:'caro/a',ipa:'[ˈkaɾu/ɐ]',ru:'дорогой',ex:'É muito caro!'},
  {pt:'barato/a',ipa:'[bɐˈɾatu/ɐ]',ru:'дешёвый',ex:'Está barato hoje.'},
  {pt:'fresco/a',ipa:'[ˈfɾɛʃku/ɐ]',ru:'свежий',ex:'pão fresco'},
  {pt:'saboroso/a',ipa:'[sɐbuˈɾozu/ɐ]',ru:'вкусный',ex:'um bolo saboroso'},
  {pt:'bonito/a',ipa:'[buˈnitu/ɐ]',ru:'красивый',ex:'uma cidade bonita'},
  {pt:'novo/a',ipa:'[ˈnovu/ɐ]',ru:'новый / молодой',ex:'um carro novo'},
  {pt:'velho/a',ipa:'[ˈveʎu/ɐ]',ru:'старый',ex:'um edifício velho'},
  {pt:'cheio/a',ipa:'[ˈʃɐju/ɐ]',ru:'полный',ex:'o copo está cheio'},
];
const ag=document.getElementById('W4adj-grid');
adjs.forEach(a=>{
  const el=document.createElement('div');
  el.className='vocab-card';
  el.innerHTML=`<span class="vc-pt">${a.pt}</span><span class="vc-ipa">${a.ipa}</span><span class="vc-ru">${a.ru}</span><span class="vc-ex">${a.ex}</span>`;
  el.onclick=()=>speak(a.pt.split('/')[0]);
  ag.appendChild(el);
});

// FOOD GRID
const foods=[
  {pt:'o pão',ipa:'[u pãw̃]',ru:'хлеб',ex:'Queria um pão de forma.'},
  {pt:'o leite',ipa:'[u ˈlɐjtɨ]',ru:'молоко',ex:'um litro de leite'},
  {pt:'os ovos',ipa:'[uʃ ˈovuʃ]',ru:'яйца',ex:'uma dúzia de ovos'},
  {pt:'a carne',ipa:'[ɐ ˈkaɾnɨ]',ru:'мясо',ex:'meio quilo de carne'},
  {pt:'o peixe',ipa:'[u ˈpɐjʃɨ]',ru:'рыба',ex:'peixe fresco do dia'},
  {pt:'o bacalhau',ipa:'[u bɐkɐˈʎaw]',ru:'треска (солёная)',ex:'bacalhau à Brás'},
  {pt:'o queijo',ipa:'[u ˈkɐjʒu]',ru:'сыр',ex:'queijo da Serra'},
  {pt:'as maçãs',ipa:'[ɐʃ mɐˈsãʃ]',ru:'яблоки',ex:'um quilo de maçãs'},
  {pt:'as laranjas',ipa:'[ɐʃ lɐˈɾãʒɐʃ]',ru:'апельсины',ex:'sumo de laranja'},
  {pt:'o vinho',ipa:'[u ˈviɲu]',ru:'вино',ex:'vinho tinto / branco'},
  {pt:'a bica',ipa:'[ɐ ˈbikɐ]',ru:'эспрессо (Лиссабон)',ex:'Uma bica, se faz favor.'},
  {pt:'o pastel de nata',ipa:'[u pɐʃˈtɛɫ dɨ ˈnatɐ]',ru:'заварное пирожное',ex:'Dois pastéis de nata.'},
];
const fg=document.getElementById('W4food-grid');
foods.forEach(f=>{
  const el=document.createElement('div');
  el.className='vocab-card';
  el.innerHTML=`<span class="vc-pt">${f.pt}</span><span class="vc-ipa">${f.ipa}</span><span class="vc-ru">${f.ru}</span><span class="vc-ex">${f.ex}</span>`;
  el.onclick=()=>speak(f.pt);
  fg.appendChild(el);
});

// DIALOGUE
const lines=[
  {s:'left',av:'🧑',pt:'Bom dia! Queria um quilo de maçãs e meio quilo de uvas.',ipa:'[ˈboɐ ˈdi.ɐ | kiˈɾiɐ ũ ˈkilu dɨ mɐˈsãʃ]',ru:'Доброе утро! Хотел бы кило яблок и полкило винограда.'},
  {s:'right',av:'👩',pt:'Pois! As maçãs estão muito frescas hoje. Mais alguma coisa?',ipa:'[pɔjʃ | ɐʃ mɐˈsãʃ ɨʃˈtãw̃ ˈmwitu ˈfɾɛʃkɐʃ ˈoʒɨ]',ru:'Конечно! Яблоки сегодня очень свежие. Что-нибудь ещё?'},
  {s:'left',av:'🧑',pt:'Sim. Quanto custa o bacalhau fresco?',ipa:'[sĩ | ˈkwãntu ˈkuʃtɐ u bɐkɐˈʎaw ˈfɾɛʃku]',ru:'Да. Сколько стоит свежая треска?'},
  {s:'right',av:'👩',pt:'Fica a doze euros o quilo. É muito bom, veio hoje de manhã.',ipa:'[ˈfikɐ ɐ ˈdozɨ ˈewɾuʃ u ˈkilu]',ru:'12 евро за кило. Очень хорошая, привезли сегодня утром.'},
  {s:'left',av:'🧑',pt:'Está um pouco caro. Pode dar-me trezentos gramas?',ipa:'[ɨʃˈta ũ ˈpoku ˈkaɾu | ˈpɔdɨ daɾ mɨ tɾɨˈzẽntuʃ ˈɡɾɐmɐʃ]',ru:'Немного дорого. Можете дать мне 300 граммов?'},
  {s:'right',av:'👩',pt:'Claro! São três euros e sessenta. Mais alguma coisa?',ipa:'[ˈklaɾu | sãw̃ tɾeʃ ˈewɾuʃ i sɨˈsẽntɐ]',ru:'Конечно! Итого 3,60 €. Ещё что-нибудь?'},
  {s:'left',av:'🧑',pt:'Não, obrigado. Aceita cartão de crédito?',ipa:'[nãw̃ obɾiˈɡadu | ɐˈsɐjtɐ kɐɾˈtãw̃ dɨ ˈkɾɛditu]',ru:'Нет, спасибо. Принимаете кредитную карту?'},
  {s:'right',av:'👩',pt:'Sim, aceitamos. Aqui tem o talão.',ipa:'[sĩ ɐsɐjˈtɐmuʃ | ɐˈki tẽj̃ u tɐˈlãw̃]',ru:'Да, принимаем. Вот ваш чек.'},
];
const db=document.getElementById('W4dialogue-box');
lines.forEach(l=>{
  const d=document.createElement('div');
  d.className='d-line'+(l.s==='right'?' right':'');
  d.innerHTML=`<div class="d-avatar">${l.av}</div><div class="d-bubble" onclick="speak('${l.pt.replace(/'/g,"\\'")}')"><span class="d-pt">${l.pt}</span><span class="d-ipa">${l.ipa}</span><span class="d-ru">${l.ru}</span></div>`;
  db.appendChild(d);
});

// QUIZ
const quizData=[
  {q:'Uma casa ___ (большая — ж.р.)',opts:['grande','grandes','grando','grandas'],ans:0,exp:'<em>Grande</em> — тип 2, не меняется по роду. Uma casa <em>grande</em>.'},
  {q:'Quanto ___ este queijo? (стоит)',opts:['é','fica','custa','tem'],ans:2,exp:'<em>Custa</em> — стандартный вопрос о цене. Quanto <em>custa</em>?'},
  {q:'Queria ___ quilo de maçãs. (один)',opts:['um','uma','uns','umas'],ans:0,exp:'Quilo — мужской род → <em>um</em> quilo.'},
  {q:'O vinho é muito ___. (дорогое)',opts:['cara','caro','caros','caras'],ans:1,exp:'Vinho — мужской род → <em>caro</em>.'},
  {q:'___ duzentos gramas de queijo. (я бы хотел)',opts:['Quero','Queria','Quero ter','Quereria'],ans:1,exp:'Вежливая просьба в EP: imperfeito → <em>Queria</em>.'},
  {q:'Cem vs Cento: ___ e vinte euros',opts:['Cem','Cento','Centos','Cents'],ans:1,exp:'Перед другим числом: <em>cento</em> e vinte. <em>Cem</em> только отдельно = ровно 100.'},
  {q:'As maçãs estão muito ___. (свежие — мн.ч. ж.р.)',opts:['fresco','fresca','frescos','frescas'],ans:3,exp:'Maçãs — ж.р. мн.ч. → <em>frescas</em>.'},
  {q:'___ cartão? (принимаете карту?)',opts:['Tem','Aceita','Fica','Custa'],ans:1,exp:'<em>Aceita cartão?</em> — стандартный вопрос при оплате.'},
  {q:'Quinhentos euros — это сколько?',opts:['400 €','500 €','600 €','1500 €'],ans:1,exp:'<em>Quinhentos</em> = 500. Неправильное, нужно запомнить.'},
  {q:'Uma ___ de ovos (дюжина)',opts:['litro','garrafa','dúzia','fatia'],ans:2,exp:'<em>Uma dúzia de ovos</em> — дюжина яиц (12 штук).'},
];
let answers=new Array(quizData.length).fill(null),correct=0;
function W4buildQuiz(){
  const c=document.getElementById('W4quiz-container');c.innerHTML='';
  answers=new Array(quizData.length).fill(null);correct=0;W4updateScore();
  quizData.forEach((q,i)=>{
    const b=document.createElement('div');b.className='quiz-box';b.id='q'+i;
    b.innerHTML=`<div class="q">${i+1}. ${q.q}</div><div class="options">${q.opts.map((o,j)=>`<button class="opt" onclick="W4answer(${i},${j})">${o}</button>`).join('')}</div><div class="quiz-feedback" id="W4qf${i}"></div>`;
    c.appendChild(b);
  });
  document.getElementById('W4reset-btn').style.display='none';
}
function W4answer(qi,oi){
  if(answers[qi]!==null)return;answers[qi]=oi;
  const q=quizData[qi];
  document.querySelectorAll(`#W4q${qi} .opt`).forEach((o,j)=>{o.classList.add('disabled');if(j===q.ans)o.classList.add('correct');else if(j===oi)o.classList.add('wrong');});
  const fb=document.getElementById('W4qf'+qi);
  if(oi===q.ans){correct++;fb.innerHTML='✓ Верно! '+q.exp;fb.className='quiz-feedback show ok';}
  else{fb.innerHTML='✗ Неверно. '+q.exp;fb.className='quiz-feedback show no';}
  W4updateScore();
  if(answers.every(a=>a!==null)){document.getElementById('W4reset-btn').style.display='inline-block';W4updateProgress();}
}
function W4updateScore(){const d=answers.filter(a=>a!==null).length;document.getElementById('W4score-display').textContent=`Отвечено: ${d} / ${quizData.length} · Правильно: ${correct}`;}
function W4resetQuiz(){W4buildQuiz();}
W4buildQuiz();
function W4updateProgress(){
  const pct=Math.round(correct/quizData.length*100);
  document.querySelectorAll('.prog-fill').forEach(f=>{f.style.width=pct+'%';});
  document.querySelectorAll('.prog-pct').forEach(p=>{p.textContent=pct+'%';});
}

// FEYNMAN
const jFB={
  1:{keys:['согласован','род','окончан','-o','-a','bom','boa','grande'],
     ok:'✓ Отлично! Три типа схвачены верно.<br><br>Частая ошибка: <em>um grande vinho</em> (великолепное вино) vs <em>um vinho grande</em> (большая бутылка). Место прилагательного меняет смысл!<br><br>Пробел: попробуйте объяснить, почему <em>quinhentos</em> — особое слово для 500.',
     tip:'💡 Ключ: прилагательные на -o меняются (bonito→bonita), на -e не меняются (grande→grande). Напишите по 2 примера каждого типа с реальными продуктами.'},
  2:{keys:['queria','custa','quanto','tem','pode','aceita','obrigad'],
     ok:'✓ Хороший диалог! Проверьте: вы использовали <em>queria</em> (не quero)? Согласовали прилагательные? Добавили цены? Это три главных критерия реального диалога в магазине EP.',
     tip:'💡 Начните с: «Bom dia! Queria...» Добавьте: цену (Quanto custa?), количество (meio quilo de / uma dúzia de), вежливое завершение (Mais alguma coisa? / Aqui tem o troco).'},
  3:{keys:['числ','quinhentos','согласован','queria','custa','fresco','bacalhau'],
     ok:'✓ Отличная рефлексия. Конкретный пробел = конкретное решение.<br><br>Для чисел: создайте в Anki карточки 200–900. Для согласования: читайте рекламу португальских магазинов — там всегда прилагательные при ценах.',
     tip:'💡 Будьте конкретнее. Не «числа трудные», а «quinhentos (500) я забываю». Точный пробел решается точным упражнением — повторите 3 раза вслух прямо сейчас.'},
};
function W4checkJ(n){
  const v=document.getElementById('W4j'+n).value.trim().toLowerCase();
  const fb=document.getElementById('W4jr'+n);
  const d=jFB[n];
  if(!v||v.length<15){fb.innerHTML='⚠️ Напишите подробнее.';fb.className='response-box show info';return;}
  const has=d.keys.some(k=>v.includes(k));
  fb.innerHTML=has?d.ok:d.tip;
  fb.className='response-box show '+(has?'ok':'info');
}
window.W4answer = W4answer;
window.W4checkJ = W4checkJ;
window.W4resetQuiz = W4resetQuiz;
})();
