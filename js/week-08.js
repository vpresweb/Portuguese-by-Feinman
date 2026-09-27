// A1 Week 8
(function(){



// BODY
const bodyParts=[
  {icon:'🧠',pt:'a cabeça',ipa:'[ɐ kɐˈbɛsɐ]',ru:'голова'},
  {icon:'👁',pt:'o olho',ipa:'[u ˈoʎu]',ru:'глаз'},
  {icon:'👂',pt:'o ouvido',ipa:'[u oˈvidu]',ru:'ухо'},
  {icon:'👃',pt:'o nariz',ipa:'[u nɐˈɾiʃ]',ru:'нос'},
  {icon:'🦷',pt:'o dente',ipa:'[u ˈdẽntɨ]',ru:'зуб'},
  {icon:'🗣',pt:'a garganta',ipa:'[ɐ ɡɐɾˈɡãntɐ]',ru:'горло'},
  {icon:'🫁',pt:'o peito',ipa:'[u ˈpɐjtu]',ru:'грудь'},
  {icon:'🫀',pt:'o coração',ipa:'[u kuɾɐˈsãw̃]',ru:'сердце'},
  {icon:'🫃',pt:'o estômago',ipa:'[u ɨʃˈtomɐɡu]',ru:'желудок'},
  {icon:'💪',pt:'o braço',ipa:'[u ˈbɾasu]',ru:'рука (рука от плеча)'},
  {icon:'🖐',pt:'a mão',ipa:'[ɐ mãw̃]',ru:'кисть руки'},
  {icon:'🦵',pt:'a perna',ipa:'[ɐ ˈpɛɾnɐ]',ru:'нога'},
  {icon:'🦶',pt:'o pé',ipa:'[u ˈpɛ]',ru:'стопа'},
  {icon:'🦴',pt:'o joelho',ipa:'[u ʒuˈɐʎu]',ru:'колено'},
  {icon:'🔙',pt:'as costas',ipa:'[ɐʃ ˈkɔʃtɐʃ]',ru:'спина'},
];
const bg=document.getElementById('W8body-grid');
bodyParts.forEach(b=>{
  const el=document.createElement('div');el.className='body-part';
  el.innerHTML=`<span class="body-icon">${b.icon}</span><div class="body-info"><span class="bp-pt">${b.pt}</span><span class="bp-ipa">${b.ipa}</span><span class="bp-ru">${b.ru}</span></div>`;
  el.onclick=()=>speak(b.pt);bg.appendChild(el);
});

// SYMPTOMS
const symptoms=[
  {pt:'a febre',ipa:'[ɐ ˈfɛbɾɨ]',ru:'температура',ex:'Tenho febre alta.'},
  {pt:'a tosse',ipa:'[ɐ ˈtɔsɨ]',ru:'кашель',ex:'Tenho muita tosse.'},
  {pt:'o nariz entupido',ipa:'[u nɐˈɾiʃ ẽntuˈpidu]',ru:'заложенный нос',ex:'Tenho o nariz entupido.'},
  {pt:'a dor de cabeça',ipa:'[ɐ doɾ dɨ kɐˈbɛsɐ]',ru:'головная боль',ex:'Tenho dores de cabeça.'},
  {pt:'a gripe',ipa:'[ɐ ˈɡɾipɨ]',ru:'грипп',ex:'Estou com gripe.'},
  {pt:'constipado/a',ipa:'[kõʃtiˈpadu/ɐ]',ru:'простуда / насморк (EP)',ex:'Estou constipado.'},
  {pt:'as náuseas',ipa:'[ɐʃ ˈnawzɨɐʃ]',ru:'тошнота',ex:'Estou com náuseas.'},
  {pt:'a tonturas',ipa:'[ɐʃ tõˈtuɾɐʃ]',ru:'головокружение',ex:'Tenho tonturas.'},
  {pt:'a diarreia',ipa:'[ɐ diɐˈʁɐjɐ]',ru:'диарея',ex:'Tenho diarreia há dois dias.'},
  {pt:'a alergia',ipa:'[ɐ ɐlɨɾˈʒiɐ]',ru:'аллергия',ex:'Tenho alergia ao pólen.'},
  {pt:'a infecção',ipa:'[ɐ ĩfɛˈsãw̃]',ru:'инфекция',ex:'É uma infecção bacteriana.'},
  {pt:'o enjoo',ipa:'[u ẽˈʒoo]',ru:'укачивание / тошнота',ex:'Tenho enjoo no carro.'},
];
function W8makeGrid(data,id){
  const g=document.getElementById('W8' + id);if(!g)return;
  data.forEach(d=>{
    const el=document.createElement('div');el.className='vocab-card';
    el.innerHTML=`<span class="vc-pt">${d.pt}</span><span class="vc-ipa">${d.ipa}</span><span class="vc-ru">${d.ru}</span><span class="vc-ex">${d.ex}</span>`;
    el.onclick=()=>speak(d.pt);g.appendChild(el);
  });
}
W8makeGrid(symptoms,'symptoms-grid');

const pharmacy=[
  {pt:'o comprimido',ipa:'[u kõpɾiˈmidu]',ru:'таблетка',ex:'Tome dois comprimidos.'},
  {pt:'o xarope',ipa:'[u ʃɐˈɾɔpɨ]',ru:'сироп',ex:'Xarope para a tosse.'},
  {pt:'a pomada',ipa:'[ɐ puˈmadɐ]',ru:'мазь',ex:'Aplique a pomada duas vezes.'},
  {pt:'a receita',ipa:'[ɐ ʁɨˈsɐjtɐ]',ru:'рецепт (медицинский)',ex:'Precisa de receita médica.'},
  {pt:'em jejum',ipa:'[ẽ ʒɨˈʒũ]',ru:'натощак',ex:'Tome em jejum de manhã.'},
  {pt:'o antibiótico',ipa:'[u ãntibɨˈɔtiku]',ru:'антибиотик',ex:'Vou receitar um antibiótico.'},
];
W8makeGrid(pharmacy,'pharmacy-grid');

// DIALOGUE
const lines=[
  {s:'left',av:'🧑',pt:'Bom dia, doutor. Não me sinto bem há três dias.',ipa:'[bõ ˈdi.ɐ ˈdotoɾ | nãw̃ mɨ ˈsĩntu bẽj̃ a tɾeʃ ˈdiɐʃ]',ru:'Доброе утро, доктор. Я плохо себя чувствую три дня.'},
  {s:'right',av:'👨‍⚕️',pt:'O que sente exatamente?',ipa:'[u kɨ ˈsẽntɨ izɐtɐˈmẽntɨ]',ru:'Что именно вас беспокоит?'},
  {s:'left',av:'🧑',pt:'Dói-me muito o peito e tenho febre e tosse seca.',ipa:'[ˈdɔj mɨ ˈmwitu u ˈpɐjtu i ˈteɲu ˈfɛbɾɨ i ˈtɔsɨ ˈsɛkɐ]',ru:'У меня сильно болит грудь, есть температура и сухой кашель.'},
  {s:'right',av:'👨‍⚕️',pt:'Tem alguma alergia a medicamentos?',ipa:'[tẽj̃ aɫˈɡũɐ ɐlɨɾˈʒiɐ ɐ mɨdikɐˈmẽntuʃ]',ru:'Есть аллергия на какие-нибудь лекарства?'},
  {s:'left',av:'🧑',pt:'Não, não tenho nenhuma alergia conhecida.',ipa:'[nãw̃ | nãw̃ ˈteɲu nɨˈɲũɐ ɐlɨɾˈʒiɐ kuˈɲɨsidɐ]',ru:'Нет, нет никакой известной аллергии.'},
  {s:'right',av:'👨‍⚕️',pt:'Vou receitar-lhe um antibiótico. Tome um comprimido de manhã em jejum.',ipa:'[vow ʁɨsɐjˈtaɾ ʎɨ ũ ãntibɨˈɔtiku | ˈtomɨ ũ kõpɾiˈmidu]',ru:'Выпишу вам антибиотик. Принимайте по 1 таблетке утром натощак.'},
  {s:'left',av:'🧑',pt:'Durante quantos dias?',ipa:'[duˈɾãntɨ ˈkwãntuʃ ˈdiɐʃ]',ru:'В течение скольких дней?'},
  {s:'right',av:'👨‍⚕️',pt:'Durante sete dias. Se não melhorar em três dias, volte cá.',ipa:'[duˈɾãntɨ ˈsɛtɨ ˈdiɐʃ | sɨ nãw̃ mɨˈʎoɾaɾ ẽ tɾeʃ ˈdiɐʃ]',ru:'Семь дней. Если не улучшится за три дня — возвращайтесь.'},
];
const db=document.getElementById('W8dialogue-box');
lines.forEach(l=>{
  const d=document.createElement('div');d.className='d-line'+(l.s==='right'?' right':'');
  d.innerHTML=`<div class="d-avatar">${l.av}</div><div class="d-bubble" onclick="speak('${l.pt.replace(/'/g,"\\'")}')"><span class="d-pt">${l.pt}</span><span class="d-ipa">${l.ipa}</span><span class="d-ru">${l.ru}</span></div>`;
  db.appendChild(d);
});

// QUIZ
const quizData=[
  {q:'___ a cabeça. (у меня болит голова)',opts:['Dói-me','Me dói','Dói-lhe','Doem-me'],ans:0,exp:'<em>Dói-me</em> + часть тела. EP-порядок: глагол-местоимение.'},
  {q:'Doem-___ os pés. (у меня болят ноги)',opts:['lhe','me','te','nos'],ans:1,exp:'Мн.ч. части тела → doem. Для «меня» → <em>doem-me</em>.'},
  {q:'Estou ___. (у меня простуда — EP)',opts:['resfriado','gripado','constipado','doente'],ans:2,exp:'EP: <em>constipado</em> = насморк/простуда. Resfriado — BP. Doente = больной (общее).'},
  {q:'O médico viu-___. (осмотрел меня)',opts:['me','o','lhe','nos'],ans:0,exp:'Прямое дополнение 1-го лица: <em>me</em>. O médico viu-<em>me</em>.'},
  {q:'Vou receitar-___ um antibiótico. (вам)',opts:['lhe','te','o','se'],ans:0,exp:'Косвенное дополнение «вам» = <em>lhe</em>. Vou receitar-<em>lhe</em>.'},
  {q:'Tome o comprimido ___. (натощак)',opts:['de noite','após as refeições','em jejum','com leite'],ans:2,exp:'<em>Em jejum</em> = натощак, до еды.'},
  {q:'Queria ___ uma consulta. (записаться)',opts:['fazer','marcar','ter','pedir'],ans:1,exp:'<em>Marcar uma consulta</em> = записаться на приём. Стандартная EP-формулировка.'},
  {q:'ver + o → ___',opts:['ver-o','vê-o','vê-lo','vei-lo'],ans:2,exp:'Глагол теряет -r, o→lo: ver + o = <em>vê-lo</em>.'},
  {q:'Tenho ___ há dois dias. (дiarreia)',opts:['febre','diarreia','alergia','enjoo'],ans:1,exp:'«Tenho diarreia há dois dias» — у меня диарея два дня. Há + период = «назад/уже».'},
  {q:'Como se diz «рецепт» em EP?',opts:['prescrição','receita','bilhete','nota'],ans:1,exp:'EP: <em>receita</em> = рецепт (медицинский и кулинарный). Prescrição — формальный медицинский термин.'},
];
let answers=new Array(quizData.length).fill(null),correct=0;
function W8buildQuiz(){
  const c=document.getElementById('W8quiz-container');c.innerHTML='';
  answers=new Array(quizData.length).fill(null);correct=0;W8updateScore();
  quizData.forEach((q,i)=>{
    const b=document.createElement('div');b.className='quiz-box';b.id='q'+i;
    b.innerHTML=`<div class="q">${i+1}. ${q.q}</div><div class="options">${q.opts.map((o,j)=>`<button class="opt" onclick="W8answer(${i},${j})">${o}</button>`).join('')}</div><div class="quiz-feedback" id="W8qf${i}"></div>`;
    c.appendChild(b);
  });
  document.getElementById('W8reset-btn').style.display='none';
}
function W8answer(qi,oi){
  if(answers[qi]!==null)return;answers[qi]=oi;
  const q=quizData[qi];
  document.querySelectorAll(`#W8q${qi} .opt`).forEach((o,j)=>{o.classList.add('disabled');if(j===q.ans)o.classList.add('correct');else if(j===oi)o.classList.add('wrong');});
  const fb=document.getElementById('W8qf'+qi);
  if(oi===q.ans){correct++;fb.innerHTML='✓ Верно! '+q.exp;fb.className='quiz-feedback show ok';}
  else{fb.innerHTML='✗ Неверно. '+q.exp;fb.className='quiz-feedback show no';}
  W8updateScore();
  if(answers.every(a=>a!==null)){document.getElementById('W8reset-btn').style.display='inline-block';W8updateProgress();}
}
function W8updateScore(){const d=answers.filter(a=>a!==null).length;document.getElementById('W8score-display').textContent=`Отвечено: ${d} / ${quizData.length} · Правильно: ${correct}`;}
function W8resetQuiz(){W8buildQuiz();}
W8buildQuiz();
function W8updateProgress(){
  const pct=Math.round(correct/quizData.length*100);
  document.querySelectorAll('.prog-fill').forEach(f=>{f.style.width=pct+'%';});
  document.querySelectorAll('.prog-pct').forEach(p=>{p.textContent=pct+'%';});
}
const jFB={
  1:{keys:['субъект','часть тела','dói','doem','косвенн','lhe','нравится','нравится','мне','doer'],
     ok:'✓ Отлично! Аналогия с «мне нравится» — именно она. Doer — непереходный глагол, субъект — то, что болит, а носитель боли — косвенное дополнение.<br><br>Продвинутое: «Dói-me muito» (сильно болит) vs «Dói-me um pouco» (немного). Попробуйте составить 3 предложения с разной степенью боли.',
     tip:'💡 Ключ: «Dói-me a cabeça» — буквально «болит мне голова». Голова — субъект глагола doer. «Мне» — кому болит (косвенное дополнение). Это как «мне нравится фильм» — фильм субъект, «мне» — объект.'},
  2:{keys:['dói','doutor','febre','tosse','receitar','comprimido','consulta','sinto','tenho'],
     ok:'✓ Хороший диалог! Проверьте три вещи: 1) Использовали doer-me/lhe правильно? 2) Вопрос «Há quanto tempo?» присутствует? 3) Врач выписал лекарство через «Vou receitar-lhe»?',
     tip:'💡 Структура диалога: пациент→симптомы (doer + tenho + estou com) → врач→вопросы (há quanto tempo? tem alergia?) → диагноз + рецепт (vou receitar-lhe + tome X vezes por dia).'},
  3:{keys:['doer','dói','местоимен','lhe','receita','comprimido','alergia','constipado'],
     ok:'✓ Конкретный пробел — отличная рефлексия. Совет: если сложно doer — повторяйте как мантру: «Dói-me, dói-te, dói-lhe, dói-nos, dói-lhes» + одна часть тела. Мышечная память языка решает.',
     tip:'💡 Конкретизируйте: что именно сложно? Если doer — учите его как исключение вместе с gostar (оба требуют косвенного дополнения). Если местоимения — сделайте карточки: me/te/o/a/lhe/nos/os/as/lhes.'},
};
function W8checkJ(n){
  const v=document.getElementById('W8j'+n).value.trim().toLowerCase();
  const fb=document.getElementById('W8jr'+n);const d=jFB[n];
  if(!v||v.length<15){fb.innerHTML='⚠️ Напишите подробнее.';fb.className='response-box show info';return;}
  const has=d.keys.some(k=>v.includes(k));
  fb.innerHTML=has?d.ok:d.tip;fb.className='response-box show '+(has?'ok':'info');
}
window.W8answer = W8answer;
window.W8checkJ = W8checkJ;
window.W8resetQuiz = W8resetQuiz;
})();
