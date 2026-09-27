// A1 Week 10
(function(){



function W10makeGrid(data,id){
  const g=document.getElementById('W10' + id);if(!g)return;
  data.forEach(d=>{
    const el=document.createElement('div');el.className='vocab-card';
    el.innerHTML=`<span class="vc-pt">${d.pt}</span><span class="vc-ipa">${d.ipa}</span><span class="vc-ru">${d.ru}</span><span class="vc-ex">${d.ex}</span>`;
    el.onclick=()=>speak(d.pt);g.appendChild(el);
  });
}

W10makeGrid([
  {pt:'o/a médico/a',ipa:'[u/ɐ ˈmɛdiku/ɐ]',ru:'врач',ex:'Sou médica num hospital público.'},
  {pt:'o/a enfermeiro/a',ipa:'[ẽfɨɾˈmɐjɾu/ɐ]',ru:'медсестра/брат',ex:'Trabalha como enfermeiro.'},
  {pt:'o/a professor/a',ipa:'[pɾufɨˈsoɾ/ɐ]',ru:'учитель',ex:'É professora de matemática.'},
  {pt:'o/a engenheiro/a',ipa:'[ẽʒɨˈɲɐjɾu/ɐ]',ru:'инженер',ex:'Trabalha como engenheiro civil.'},
  {pt:'o/a advogado/a',ipa:'[ɐdvuˈɡadu/ɐ]',ru:'адвокат',ex:'É advogada num escritório.'},
  {pt:'o/a arquiteto/a',ipa:'[aɾkiˈtɛtu/ɐ]',ru:'архитектор',ex:'Sou arquiteto por conta própria.'},
  {pt:'o/a programador/a',ipa:'[pɾuɡɾɐmɐˈdoɾ/ɐ]',ru:'программист',ex:'Trabalha em teletrabalho.'},
  {pt:'o/a gestor/a',ipa:'[ʒɨʃˈtoɾ/ɐ]',ru:'менеджер',ex:'É gestora de projeto.'},
  {pt:'o/a contabilista',ipa:'[kõntɐbiˈliʃtɐ]',ru:'бухгалтер (EP)',ex:'Trabalha como contabilista.'},
  {pt:'o/a jornalista',ipa:'[ʒuɾnɐˈliʃtɐ]',ru:'журналист',ex:'É jornalista na RTP.'},
  {pt:'o/a cozinheiro/a',ipa:'[kuziˈɲɐjɾu/ɐ]',ru:'повар',ex:'É cozinheiro num restaurante.'},
  {pt:'o/a vendedor/a',ipa:'[vẽndɨˈdoɾ/ɐ]',ru:'продавец',ex:'Trabalha como vendedora.'},
],'prof-grid');

// MODAL CARDS
const modals=[
  {name:'poder',ipa:'[puˈdeɾ]',meaning:'мочь (иметь возможность)',ex:'Posso sair mais cedo hoje?\nNão posso vir amanhã — tenho reunião.'},
  {name:'saber',ipa:'[sɐˈbeɾ]',meaning:'уметь / знать',ex:'Sei falar português e inglês.\nNão sei conduzir — nunca aprendi.'},
  {name:'dever',ipa:'[dɨˈveɾ]',meaning:'должен (долг) / наверное',ex:'Devo entregar o relatório hoje.\nEle deve estar no escritório agora.'},
  {name:'ter de',ipa:'[ˈteɾ dɨ]',meaning:'нужно / обязан (необходимость)',ex:'Tenho de trabalhar este sábado.\nTemos de cumprir o prazo.'},
  {name:'precisar de',ipa:'[pɾɨsiˈzaɾ dɨ]',meaning:'нуждаться в / нужно',ex:'Preciso de mais tempo para isto.\nPrecisamos de uma solução.'},
  {name:'conseguir',ipa:'[kõsɨˈɡiɾ]',meaning:'удаваться / справляться',ex:'Consigo trabalhar sob pressão.\nNão consegui terminar a tempo.'},
];
const mg=document.getElementById('W10modal-grid');
modals.forEach(m=>{
  const el=document.createElement('div');el.className='modal-card';
  el.innerHTML=`<h4>${m.name}</h4><span class="modal-ipa">${m.ipa}</span><span class="modal-meaning">${m.meaning}</span><span class="modal-ex">${m.ex.replace(/\n/g,'<br>')}</span>`;
  el.onclick=()=>speak(m.name);mg.appendChild(el);
});

W10makeGrid([
  {pt:'a reunião',ipa:'[ɐ ʁɨuˈniãw̃]',ru:'собрание / встреча',ex:'Tenho reunião às 10h.'},
  {pt:'o prazo',ipa:'[u ˈpɾazu]',ru:'срок / дедлайн',ex:'O prazo é sexta-feira.'},
  {pt:'o relatório',ipa:'[u ʁɨlɐˈtɔɾju]',ru:'отчёт',ex:'Preciso de escrever um relatório.'},
  {pt:'o/a colega',ipa:'[u/ɐ kuˈlɛɡɐ]',ru:'коллега',ex:'Os meus colegas são simpáticos.'},
  {pt:'o/a chefe',ipa:'[u/ɐ ˈʃɛfɨ]',ru:'начальник',ex:'A minha chefe é exigente.'},
  {pt:'o horário',ipa:'[u uˈɾaɾju]',ru:'расписание / график',ex:'O meu horário é das 9 às 18h.'},
  {pt:'o vencimento',ipa:'[u vẽsiˈmẽntu]',ru:'зарплата (EP)',ex:'O vencimento é pago no fim do mês.'},
  {pt:'as horas extra',ipa:'[ɐʃ ˈɔɾɐʃ ˈɛʃtɾɐ]',ru:'сверхурочные',ex:'Faço horas extra esta semana.'},
  {pt:'a candidatura',ipa:'[ɐ kãndidɐˈtuɾɐ]',ru:'заявление / кандидатура',ex:'Enviei a minha candidatura.'},
  {pt:'a entrevista',ipa:'[ɐ ẽntɾɨˈviʃtɐ]',ru:'собеседование',ex:'A entrevista é amanhã às 14h.'},
  {pt:'o teletrabalho',ipa:'[u tɛlɨtɾɐˈbaʎu]',ru:'удалённая работа (EP)',ex:'Faço teletrabalho três dias por semana.'},
  {pt:'a empresa',ipa:'[ɐ ẽˈpɾezɐ]',ru:'компания',ex:'Trabalho numa empresa de tecnologia.'},
],'work-grid');

W10makeGrid([
  {pt:'os pontos fortes',ipa:'[uʃ ˈpõntuʃ ˈfɔɾtɨʃ]',ru:'сильные стороны',ex:'Quais são os seus pontos fortes?'},
  {pt:'a experiência',ipa:'[ɐ ɨʃpɨɾiˈẽsjɐ]',ru:'опыт',ex:'Tenho cinco anos de experiência.'},
  {pt:'as competências',ipa:'[ɐʃ kõpɨˈtẽsjɐʃ]',ru:'компетенции / навыки',ex:'As minhas competências incluem...'},
  {pt:'a vaga',ipa:'[ɐ ˈvaɡɐ]',ru:'вакансия',ex:'Vi a vaga no vosso site.'},
  {pt:'o currículo',ipa:'[u kuˈʁikulu]',ru:'резюме (EP)',ex:'Anexei o meu currículo.'},
  {pt:'a formação',ipa:'[ɐ fuɾmɐˈsãw̃]',ru:'образование / обучение',ex:'A minha formação é em engenharia.'},
],'interview-grid');

// DIALOGUE
const lines=[
  {s:'right',av:'👔',pt:'Bom dia. Sente-se, por favor. Fale-me de si.',ipa:'[bõ ˈdi.ɐ | ˈsẽntɨ sɨ puɾ fɐˈvoɾ | ˈfalɨ mɨ dɨ si]',ru:'Доброе утро. Садитесь, пожалуйста. Расскажите о себе.'},
  {s:'left',av:'🧑',pt:'Bom dia. Chamo-me Ana Silva. Sou gestora de projetos com seis anos de experiência em tecnologia.',ipa:'[bõ ˈdi.ɐ | ˈʃɐmu mɨ ˈɐnɐ ˈsilvɐ | ˈso ʒɨʃˈtoɾɐ dɨ pɾuˈʒɛtuʃ]',ru:'Доброе утро. Меня зовут Ана Силва. Я менеджер проектов с шестилетним опытом в технологиях.'},
  {s:'right',av:'👔',pt:'Qual foi a sua última experiência profissional?',ipa:'[kwaɫ foj ɐ suɐ ˈuɫtimɐ ɨʃpɨɾiˈẽsjɐ pɾufɨʃjuˈnaɫ]',ru:'Каким был ваш последний профессиональный опыт?'},
  {s:'left',av:'🧑',pt:'Trabalhei quatro anos na empresa XTech, onde era responsável por coordenar equipas de desenvolvimento.',ipa:'[tɾɐbɐˈʎɐj ˈkwatɾu ˈɐnuʃ nɐ ẽˈpɾezɐ | ˈõndɨ ˈɛɾɐ ʁɨʃpõˈsɐvɨɫ puɾ]',ru:'Четыре года работала в компании XTech, где отвечала за координацию команд разработки.'},
  {s:'right',av:'👔',pt:'Quais são os seus pontos fortes?',ipa:'[ˈkwajʃ sãw̃ uʃ ˈsɐjʃ ˈpõntuʃ ˈfɔɾtɨʃ]',ru:'Каковы ваши сильные стороны?'},
  {s:'left',av:'🧑',pt:'Consigo trabalhar bem sob pressão e sei comunicar com clareza. Também sou muito organizada.',ipa:'[kõˈsiɡu tɾɐbɐˈʎaɾ bẽj̃ sobu pɾɨˈsãw̃ i ˈsɐj kumuˈnikaɾ kõ klaˈɾezɐ]',ru:'Умею хорошо работать под давлением и умею ясно общаться. Ещё очень организована.'},
  {s:'right',av:'👔',pt:'Porque é que quer trabalhar connosco?',ipa:'[puɾˈkɨ ˈɛ kɨ ˈkɛɾ tɾɐbɐˈʎaɾ kuˈnoʃku]',ru:'Почему вы хотите работать с нами?'},
  {s:'left',av:'🧑',pt:'Admiro a cultura de inovação da vossa empresa. Acredito que posso contribuir muito para os vossos projetos.',ipa:'[ɐdˈmiru ɐ kuɫˈtuɾɐ dɨ inuvɐˈsãw̃ dɐ ˈvosɐ ẽˈpɾezɐ]',ru:'Я восхищаюсь культурой инноваций вашей компании. Верю, что смогу много привнести в ваши проекты.'},
  {s:'right',av:'👔',pt:'Muito bem. Tem alguma questão para nós?',ipa:'[ˈmwitu bẽj̃ | tẽj̃ aɫˈɡũɐ kɨʃˈtãw̃ ˈpaɾɐ nɔʃ]',ru:'Очень хорошо. Есть ли у вас вопросы к нам?'},
  {s:'left',av:'🧑',pt:'Sim. Quais são as perspetivas de crescimento nesta função?',ipa:'[sĩ | ˈkwajʃ sãw̃ ɐʃ pɨɾʃpɛˈtivɐʃ dɨ kɾɨʃiˈmẽntu ˈnɛʃtɐ fũˈsãw̃]',ru:'Да. Каковы перспективы роста на этой должности?'},
];
const db=document.getElementById('W10dialogue-box');
lines.forEach(l=>{
  const d=document.createElement('div');d.className='d-line'+(l.s==='right'?' right':'');
  d.innerHTML=`<div class="d-avatar">${l.av}</div><div class="d-bubble" onclick="speak('${l.pt.replace(/'/g,"\\'")}')"><span class="d-pt">${l.pt}</span><span class="d-ipa">${l.ipa}</span><span class="d-ru">${l.ru}</span></div>`;
  db.appendChild(d);
});

// QUIZ
const quizData=[
  {q:'___ falar português muito bem. (умею)',opts:['Posso','Sei','Devo','Consigo'],ans:1,exp:'Умение → <em>saber</em>: Sei falar português. Posso = есть возможность/разрешение, не умение.'},
  {q:'___ entregar o relatório hoje. (должен — долг)',opts:['Tenho de','Preciso de','Devo','Consigo'],ans:2,exp:'Моральный долг / обязательство → <em>dever</em>: Devo entregar. Tenho de — более жёсткая необходимость.'},
  {q:'Não ___ vir amanhã — tenho reunião. (не смогу)',opts:['sei','devo','posso','quero'],ans:2,exp:'Ситуативная невозможность → <em>poder</em>: Não <em>posso</em> vir.'},
  {q:'Como se diz «резюме» em EP?',opts:['resume','CV','currículo','portfólio'],ans:2,exp:'EP: <em>currículo</em>. CV также используется. Resume — английское слово.'},
  {q:'Sou médica ___ hospital público. (в)',opts:['em','em um','num','no'],ans:2,exp:'em + um → <em>num</em>. Sou médica <em>num</em> hospital público.'},
  {q:'___ mais tempo para este projeto. (мне нужно)',opts:['Devo','Preciso de','Sei','Consigo'],ans:1,exp:'Нуждаться в → <em>precisar de</em>: Preciso <em>de</em> mais tempo.'},
  {q:'Como se chama a 13ª salário em Portugal?',opts:['bónus','subsídio de Natal','décimo terceiro','gratificação'],ans:1,exp:'<em>Subsídio de Natal</em> = рождественская/13-я зарплата. Обязательна по закону в декабре.'},
  {q:'Era responsável ___ coordenar a equipa. (за)',opts:['de','por','para','em'],ans:1,exp:'Responsável <em>por</em> + infinitivo = отвечать за. Era responsável <em>por</em> coordenar.'},
  {q:'Como se diz «удалённая работа» em EP?',opts:['home office','trabalho remoto','teletrabalho','trabalho à distância'],ans:2,exp:'EP: <em>teletrabalho</em>. Trabalho remoto — BP-термин. Home office — заимствование из английского.'},
  {q:'___ trabalhar bem sob pressão. (умею справляться)',opts:['Posso','Sei','Consigo','Devo'],ans:2,exp:'<em>Conseguir</em> = удаваться, справляться. Consigo trabalhar sob pressão — умею работать в условиях стресса.'},
];
let answers=new Array(quizData.length).fill(null),correct=0;
function W10buildQuiz(){
  const c=document.getElementById('W10quiz-container');c.innerHTML='';
  answers=new Array(quizData.length).fill(null);correct=0;W10updateScore();
  quizData.forEach((q,i)=>{
    const b=document.createElement('div');b.className='quiz-box';b.id='q'+i;
    b.innerHTML=`<div class="q">${i+1}. ${q.q}</div><div class="options">${q.opts.map((o,j)=>`<button class="opt" onclick="W10answer(${i},${j})">${o}</button>`).join('')}</div><div class="quiz-feedback" id="W10qf${i}"></div>`;
    c.appendChild(b);
  });
  document.getElementById('W10reset-btn').style.display='none';
}
function W10answer(qi,oi){
  if(answers[qi]!==null)return;answers[qi]=oi;
  const q=quizData[qi];
  document.querySelectorAll(`#W10q${qi} .opt`).forEach((o,j)=>{o.classList.add('disabled');if(j===q.ans)o.classList.add('correct');else if(j===oi)o.classList.add('wrong');});
  const fb=document.getElementById('W10qf'+qi);
  if(oi===q.ans){correct++;fb.innerHTML='✓ Верно! '+q.exp;fb.className='quiz-feedback show ok';}
  else{fb.innerHTML='✗ Неверно. '+q.exp;fb.className='quiz-feedback show no';}
  W10updateScore();
  if(answers.every(a=>a!==null)){document.getElementById('W10reset-btn').style.display='inline-block';W10updateProgress();}
}
function W10updateScore(){const d=answers.filter(a=>a!==null).length;document.getElementById('W10score-display').textContent=`Отвечено: ${d} / ${quizData.length} · Правильно: ${correct}`;}
function W10resetQuiz(){W10buildQuiz();}
W10buildQuiz();
function W10updateProgress(){
  const pct=Math.round(correct/quizData.length*100);
  document.querySelectorAll('.prog-fill').forEach(f=>{f.style.width=pct+'%';});
  document.querySelectorAll('.prog-pct').forEach(p=>{p.textContent=pct+'%';});
}
const jFB={
  1:{keys:['poder','saber','dever','ter de','precis','consegui','умен','возможн','долг','необход'],
     ok:'✓ Отлично! Ключевые различия схвачены.<br><br>Дополнение: <em>conseguir</em> — часто лучше передаёт «справляться» чем poder: «Consigo terminar até sexta» (смогу справиться) vs «Posso terminar» (у меня есть возможность). Для профессиональных достижений — conseguir точнее.',
     tip:'💡 Четыре глагола — четыре смысла: <strong>poder</strong> (есть возможность/разрешение), <strong>saber</strong> (умею/знаю), <strong>dever</strong> (должен по долгу/наверное), <strong>ter de</strong> (необходимо). Напишите по одному предложению каждого о своей работе.'},
  2:{keys:['chamo','sou','trabalhei','experiência','sei','consigo','posso','responsável','empresa','gestor','engenheiro','professor'],
     ok:'✓ Хороший ответ! Три вещи для улучшения:<br>1) Imperfeito для прошлых обязанностей: «era responsável por»?<br>2) Модальные глаголы для навыков: sei/consigo?<br>3) Мотивация в конце: «acredito que posso contribuir para...»?',
     tip:'💡 Структура: [имя + профессия] → [прошлый опыт в imperfeito] → [текущие навыки с sei/consigo] → [мотивация]. Каждый блок — 1-2 предложения. Это стандартный EP-формат «Fale-me de si».'},
  3:{keys:['poder','saber','modal','reunião','prazo','entrevista','currículo','teletrabalho','consigo'],
     ok:'✓ Точно выявленный пробел. Совет по модальным: создайте мини-таблицу из 5 столбцов (poder/saber/dever/ter de/conseguir) и для каждого напишите 2 примера о своей работе. Практика в контексте — лучшее закрепление.',
     tip:'💡 Уточните пробел: если модальные — сфокусируйтесь на паре poder/saber (самая частая ошибка). Если лексика — выберите 10 слов из списка работы и составьте с ними предложения о реальном рабочем дне.'},
};
function W10checkJ(n){
  const v=document.getElementById('W10j'+n).value.trim().toLowerCase();
  const fb=document.getElementById('W10jr'+n);const d=jFB[n];
  if(!v||v.length<15){fb.innerHTML='⚠️ Напишите подробнее.';fb.className='response-box show info';return;}
  const has=d.keys.some(k=>v.includes(k));
  fb.innerHTML=has?d.ok:d.tip;fb.className='response-box show '+(has?'ok':'info');
}
window.W10answer = W10answer;
window.W10checkJ = W10checkJ;
window.W10resetQuiz = W10resetQuiz;
})();
