// A1 Week 11
(function(){



function W11makeGrid(data,id){
  const g=document.getElementById('W11' + id);if(!g)return;
  data.forEach(d=>{
    const el=document.createElement('div');el.className='vocab-card';
    el.innerHTML=`<span class="vc-pt">${d.pt}</span><span class="vc-ipa">${d.ipa}</span><span class="vc-ru">${d.ru}</span><span class="vc-ex">${d.ex}</span>`;
    el.onclick=()=>speak(d.pt);g.appendChild(el);
  });
}

W11makeGrid([
  {pt:'ler',ipa:'[leɾ]',ru:'читать',ex:'Gosto muito de ler romances.'},
  {pt:'ouvir música',ipa:'[oˈviɾ ˈmuzikɐ]',ru:'слушать музыку',ex:'Ouço música todos os dias.'},
  {pt:'cozinhar',ipa:'[kuziˈɲaɾ]',ru:'готовить',ex:'Adoro cozinhar ao fim de semana.'},
  {pt:'fazer desporto',ipa:'[fɐˈzeɾ dɨʃˈpɔɾtu]',ru:'заниматься спортом',ex:'Faço desporto três vezes por semana.'},
  {pt:'viajar',ipa:'[viɐˈʒaɾ]',ru:'путешествовать',ex:'O meu hobby preferido é viajar.'},
  {pt:'fotografar',ipa:'[futɨɡɾɐˈfaɾ]',ru:'фотографировать',ex:'Gosto de fotografar paisagens.'},
  {pt:'pintar',ipa:'[pĩˈtaɾ]',ru:'рисовать / красить',ex:'Pinto quadros ao fim de semana.'},
  {pt:'jogar futebol',ipa:'[ʒuˈɡaɾ futɨˈbɔɫ]',ru:'играть в футбол',ex:'Jogo futebol com os amigos.'},
  {pt:'nadar',ipa:'[nɐˈdaɾ]',ru:'плавать',ex:'Nado na piscina três vezes por semana.'},
  {pt:'ver filmes',ipa:'[veɾ ˈfiɫmɨʃ]',ru:'смотреть фильмы',ex:'Gosto de ver filmes de ficção científica.'},
  {pt:'tocar guitarra',ipa:'[tuˈkaɾ ɡiˈtaɾɐ]',ru:'играть на гитаре',ex:'Toco guitarra clássica há cinco anos.'},
  {pt:'fazer caminhadas',ipa:'[fɐˈzeɾ kɐmiˈɲadɐʃ]',ru:'ходить в походы',ex:'Faço caminhadas na serra.'},
  {pt:'jogar videojogos',ipa:'[ʒuˈɡaɾ ˈvidiuˈʒoɡuʃ]',ru:'играть в видеоигры',ex:'Jogo videojogos à noite.'},
  {pt:'meditar',ipa:'[mɨdiˈtaɾ]',ru:'медитировать',ex:'Medito todas as manhãs.'},
  {pt:'ir ao cinema',ipa:'[iɾ aw ˈsinemɐ]',ru:'ходить в кино',ex:'Vou ao cinema uma vez por semana.'},
  {pt:'dançar',ipa:'[dãˈsaɾ]',ru:'танцевать',ex:'Adoro dançar fado e salsa.'},
],'hobbies-grid');

// OPINIONS
const opinions=[
  {pt:'Acho que…',ru:'Я думаю, что…',ex:'Acho que Lisboa é a cidade mais bonita do mundo.'},
  {pt:'Penso que…',ru:'Я полагаю, что…',ex:'Penso que o fado é muito emocionante.'},
  {pt:'Na minha opinião…',ru:'На мой взгляд…',ex:'Na minha opinião, o Porto é melhor para viver.'},
  {pt:'Acredito que…',ru:'Я верю, что…',ex:'Acredito que aprender línguas é muito útil.'},
  {pt:'Para mim…',ru:'Для меня…',ex:'Para mim, o verão é a melhor estação do ano.'},
  {pt:'Prefiro… a…',ru:'Я предпочитаю… чем…',ex:'Prefiro o cinema ao teatro.'},
  {pt:'Gosto mais de…',ru:'Больше нравится…',ex:'Gosto mais de ler do que de ver televisão.'},
  {pt:'Não me parece que…',ru:'Мне не кажется, что…',ex:'Não me parece que seja a melhor opção.'},
];
const og=document.getElementById('W11opinion-grid');
opinions.forEach(o=>{
  const el=document.createElement('div');el.className='opinion-card';
  el.innerHTML=`<span class="op-pt">${o.pt}</span><span class="op-ru">${o.ru}</span><span class="op-ex">${o.ex}</span>`;
  el.onclick=()=>speak(o.pt);og.appendChild(el);
});

// DIALOGUE
const lines=[
  {s:'left',av:'🧑',pt:'Que gostas de fazer nos tempos livres?',ipa:'[kɨ ˈɡoʃtɐʃ dɨ fɐˈzeɾ nuʃ ˈtẽpuʃ ˈlivɾɨʃ]',ru:'Что ты любишь делать в свободное время?'},
  {s:'right',av:'👩',pt:'Gosto muito de ler e de fazer caminhadas. E tu?',ipa:'[ˈɡoʃtu ˈmwitu dɨ leɾ i dɨ fɐˈzeɾ kɐmiˈɲadɐʃ]',ru:'Люблю читать и ходить в походы. А ты?'},
  {s:'left',av:'🧑',pt:'Prefiro ficar em casa a ver filmes. Acho que o cinema é melhor do que os livros.',ipa:'[pɾɨˈfiɾu fikɐɾ ẽ ˈkazɐ ɐ veɾ ˈfiɫmɨʃ]',ru:'Предпочитаю сидеть дома и смотреть фильмы. Думаю, кино лучше, чем книги.'},
  {s:'right',av:'👩',pt:'Não concordo! Os livros são muito mais ricos do que os filmes.',ipa:'[nãw̃ kõˈkoɾdu | uʃ ˈlivɾuʃ sãw̃ ˈmwitu mɐjʃ ˈʁikuʃ]',ru:'Не согласна! Книги намного богаче, чем фильмы.'},
  {s:'left',av:'🧑',pt:'Depende. Já viste o último filme do Pedro Almodóvar?',ipa:'[dɨˈpẽndɨ | ʒa ˈviʃtɨ u ˈuɫtimu ˈfiɫmɨ]',ru:'Зависит. Ты уже видела последний фильм Педро Альмодовара?'},
  {s:'right',av:'👩',pt:'Não, ainda não vi. É bom?',ipa:'[nãw̃ | ɐˈĩndɐ nãw̃ ˈvi | ˈɛ bõ]',ru:'Нет, ещё не видела. Он хороший?'},
  {s:'left',av:'🧑',pt:'Achei boníssimo! Na minha opinião, é o melhor filme do ano.',ipa:'[ɐˈʃɐj buˈnisimu | nɐ ˈmiɲɐ upiˈniãw̃ ˈɛ u mɨˈʎoɾ ˈfiɫmɨ du ˈɐnu]',ru:'Мне показался великолепным! На мой взгляд, лучший фильм года.'},
  {s:'right',av:'👩',pt:'Então vou ver! É melhor do que ir ao teatro este fim de semana.',ipa:'[ẽˈtãw̃ vow veɾ | ˈɛ mɨˈʎoɾ dɨ ˈkɨ iɾ aw tɨˈatɾu]',ru:'Тогда посмотрю! Это лучше, чем идти в театр в эти выходные.'},
];
const db=document.getElementById('W11dialogue-box');
lines.forEach(l=>{
  const d=document.createElement('div');d.className='d-line'+(l.s==='right'?' right':'');
  d.innerHTML=`<div class="d-avatar">${l.av}</div><div class="d-bubble" onclick="speak('${l.pt.replace(/'/g,"\\'")}')"><span class="d-pt">${l.pt}</span><span class="d-ipa">${l.ipa}</span><span class="d-ru">${l.ru}</span></div>`;
  db.appendChild(d);
});

// QUIZ
const quizData=[
  {q:'O Porto é ___ Lisboa. (tão bonito como)',opts:['mais bonito do que','menos bonito do que','tão bonito como','o mais bonito de'],ans:2,exp:'Равенство: <em>tão… como</em>. O Porto é <em>tão bonito como</em> Lisboa.'},
  {q:'Este livro é ___ do que aquele. (лучше)',opts:['mais bom','melhor','mais bem','ótimo'],ans:1,exp:'Неправильная сравнительная: bom → <em>melhor</em>. Mais bom — ошибка.'},
  {q:'Gosto ___ de ler do que de ver televisão. (больше)',opts:['muito','tão','mais','menos'],ans:2,exp:'Gostar <em>mais</em> de A do que de B = предпочитать А перед Б.'},
  {q:'É o ___ restaurante da cidade. (лучший)',opts:['mais bom','melhor','boníssimo','ótimo'],ans:1,exp:'Превосходная: o <em>melhor</em>. (não «o mais bom»)'},
  {q:'___ que o fado é muito bonito. (я думаю)',opts:['Penso','Acredito','Acho','Para mim'],ans:2,exp:'<em>Acho que</em> — самая разговорная форма мнения в EP. Penso que тоже верно.'},
  {q:'Prefiro o cinema ___ teatro.',opts:['do que','como','ao','que'],ans:2,exp:'Preferir A <em>a</em> B: Prefiro o cinema <em>ao</em> teatro (a + o = ao).'},
  {q:'Este bolo é ___! (очень вкусный — абсолютная)',opts:['saboroso','muito saboroso','saborosíssimo','o mais saboroso'],ans:2,exp:'Абсолютная превосходная: -íssimo/a. <em>Saborosíssimo</em> = очень-очень вкусный.'},
  {q:'O Brasil é ___ do que Portugal. (больше)',opts:['mais grande','grandíssimo','maior','o maior'],ans:2,exp:'Неправильная сравнительная: grande → <em>maior</em>. Mais grande — менее точно.'},
  {q:'___ (Не согласен) contigo nesse ponto.',opts:['Concordo','Discordo','Tens razão','Exatamente'],ans:1,exp:'<em>Discordo</em> = не согласен. Concordo = согласен, Tens razão = ты прав.'},
  {q:'Como se chama o género musical símbolo de Portugal?',opts:['samba','flamenco','fado','pimba'],ans:2,exp:'<em>Fado</em> — португальский музыкальный жанр, нематериальное наследие UNESCO с 2011 года.'},
];
let answers=new Array(quizData.length).fill(null),correct=0;
function W11buildQuiz(){
  const c=document.getElementById('W11quiz-container');c.innerHTML='';
  answers=new Array(quizData.length).fill(null);correct=0;W11updateScore();
  quizData.forEach((q,i)=>{
    const b=document.createElement('div');b.className='quiz-box';b.id='q'+i;
    b.innerHTML=`<div class="q">${i+1}. ${q.q}</div><div class="options">${q.opts.map((o,j)=>`<button class="opt" onclick="W11answer(${i},${j})">${o}</button>`).join('')}</div><div class="quiz-feedback" id="W11qf${i}"></div>`;
    c.appendChild(b);
  });
  document.getElementById('W11reset-btn').style.display='none';
}
function W11answer(qi,oi){
  if(answers[qi]!==null)return;answers[qi]=oi;
  const q=quizData[qi];
  document.querySelectorAll(`#W11q${qi} .opt`).forEach((o,j)=>{o.classList.add('disabled');if(j===q.ans)o.classList.add('correct');else if(j===oi)o.classList.add('wrong');});
  const fb=document.getElementById('W11qf'+qi);
  if(oi===q.ans){correct++;fb.innerHTML='✓ Верно! '+q.exp;fb.className='quiz-feedback show ok';}
  else{fb.innerHTML='✗ Неверно. '+q.exp;fb.className='quiz-feedback show no';}
  W11updateScore();
  if(answers.every(a=>a!==null)){document.getElementById('W11reset-btn').style.display='inline-block';W11updateProgress();}
}
function W11updateScore(){const d=answers.filter(a=>a!==null).length;document.getElementById('W11score-display').textContent=`Отвечено: ${d} / ${quizData.length} · Правильно: ${correct}`;}
function W11resetQuiz(){W11buildQuiz();}
W11buildQuiz();
function W11updateProgress(){
  const pct=Math.round(correct/quizData.length*100);
  document.querySelectorAll('.prog-fill').forEach(f=>{f.style.width=pct+'%';});
  document.querySelectorAll('.prog-pct').forEach(p=>{p.textContent=pct+'%';});
}
const jFB={
  1:{keys:['mais','do que','tão','como','menos','maior','melhor','grande','igual'],
     ok:'✓ Отлично! Три конструкции схвачены верно.<br><br>Тонкость: «mais grande» не совсем ошибка, но в EP предпочитают <em>maior</em> для физического размера. «Mais grande» используют для переносного смысла: «um sonho mais grande» (большая мечта).<br><br>Пробел для углубления: попробуйте составить цепочку сравнений: A é mais X do que B, B é tão X como C, C é menos X do que D.',
     tip:'💡 Три формулы: <strong>mais + adj + do que</strong> (больше чем), <strong>tão + adj + como</strong> (так же как), <strong>menos + adj + do que</strong> (меньше чем). Неправильные: bom→melhor, mau→pior, grande→maior, pequeno→menor. Напишите по 2 примера каждой формулы.'},
  2:{keys:['gosto','adoro','prefiro','acho','opinião','melhor','mais','do que','tão','como'],
     ok:'✓ Хороший текст о хобби! Проверьте три вещи: 1) Используете preferir A a B (не «A do que B»)? 2) Есть минимум 2 выражения мнения (acho que / na minha opinião)? 3) Есть сравнение с melhor/maior или mais… do que?',
     tip:'💡 Структура: [что люблю + gostar de/adorar] → [что предпочитаю + preferir A a B] → [сравнение + mais X do que Y] → [мнение + acho que / na minha opinião]. Попробуйте следовать этому порядку.'},
  3:{keys:['повторить','неделя','пробел','сложно','трудно','глагол','местоимен','прошедш','ser','estar','comparat'],
     ok:'✓ Отличная рефлексия! Конкретный план повторения — это то, что отличает метод Фейнмана от зубрёжки.<br><br>Совет на выходные: возьмите свой список пробелов и для каждого пункта напишите 3 предложения. Не читайте теорию — только производите язык. Это лучшая подготовка к тесту недели 12.',
     tip:'💡 Подготовка к тесту недели 12: пройдитесь по темам 1–11 и для каждой составьте одно предложение о себе. 11 предложений = мини-автобиография на EP. Если какое-то предложение не получается без словаря — это ваш главный пробел.'},
};
function W11checkJ(n){
  const v=document.getElementById('W11j'+n).value.trim().toLowerCase();
  const fb=document.getElementById('W11jr'+n);const d=jFB[n];
  if(!v||v.length<15){fb.innerHTML='⚠️ Напишите подробнее.';fb.className='response-box show info';return;}
  const has=d.keys.some(k=>v.includes(k));
  fb.innerHTML=has?d.ok:d.tip;fb.className='response-box show '+(has?'ok':'info');
}
window.W11answer = W11answer;
window.W11checkJ = W11checkJ;
window.W11resetQuiz = W11resetQuiz;
})();
