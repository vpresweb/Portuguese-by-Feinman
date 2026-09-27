// A1 Week 12
(function(){



const grammarQ=[
  {q:'Eu ___ às sete de manhã. (встаю — EP)',opts:['me levanto','levanto-me','levante-me','levanto'],ans:1,exp:'EP-энклизис: <em>levanto-me</em>. Местоимение после глагола.'},
  {q:'Ontem ___ ao cinema com a família.',opts:['vou','ia','fui','irei'],ans:2,exp:'Завершённое вчерашнее действие → perfeito: <em>fui</em>.'},
  {q:'Quando era criança, ___ muito no jardim.',opts:['brinquei','brinco','brincava','brincarei'],ans:2,exp:'Регулярная привычка в детстве → imperfeito: <em>brincava</em>.'},
  {q:'Amanhã ___ ao Porto de comboio. (конкретный план)',opts:['fui','ia','vou','iria'],ans:2,exp:'Конкретный план → ir presente: <em>vou</em> ao Porto.'},
  {q:'___ muito a cabeça. (у меня болит)',opts:['Dói-me','Me dói','Dói-lhe','Tenho'],ans:0,exp:'Doer + EP-энклизис: <em>Dói-me</em> a cabeça.'},
  {q:'Não ___ antes da meia-noite. (не ложусь — EP)',opts:['deito-me','me deito','deite-me','deitei-me'],ans:1,exp:'После <em>não</em> в EP → местоимение перед глаголом: Não <em>me deito</em>.'},
  {q:'Lisboa é ___ cosmopolita ___ o Porto.',opts:['mais / que','mais / do que','tão / como','menos / do que'],ans:1,exp:'Превышение: <em>mais … do que</em>. «Do que» обязательно в EP.'},
  {q:'___ um elevador neste prédio?',opts:['Existe','Há','Existem','Tem'],ans:1,exp:'Разговорное наличие → <em>Há</em> — всегда неизменяемо.'},
  {q:'Ela ___ responsável por coordenar a equipa. (была)',opts:['foi','era','estava','ficou'],ans:1,exp:'Продолжительная роль → imperfeito: <em>era</em>.'},
  {q:'___ falar português muito bem. (умею)',opts:['Posso','Devo','Sei','Consigo'],ans:2,exp:'Умение → <em>saber</em>: Sei falar.'},
  {q:'ver + o → ___ (EP трансформация)',opts:['ver-o','vê-o','vê-lo','vei-lo'],ans:2,exp:'Глагол теряет -r, o→lo: <em>vê-lo</em>.'},
  {q:'Estava a ___ quando saí de casa.',opts:['chovar','chover','chovendo','chuva'],ans:1,exp:'EP-прогрессив прошедшего: estava a <em>chover</em>.'},
  {q:'___ nevoeiro de manhã nesta época.',opts:['Está','Faz','Há','Chove'],ans:2,exp:'Явление природы → <em>Há nevoeiro</em>.'},
  {q:'Não ___ de sair tarde à noite.',opts:['gosto','gosto de','gosto nada','gosto nada de'],ans:3,exp:'<em>Não gosto nada de</em> + inf — предлог de обязателен.'},
  {q:'Queria ___ uma consulta.',opts:['fazer','marcar','ter','pedir'],ans:1,exp:'<em>Marcar uma consulta</em> = записаться на приём.'},
  {q:'Em ___ faz muito calor em Portugal.',opts:['na primavera','no verão','no outono','no inverno'],ans:1,exp:'<em>No verão</em> — лето (мужской род → no).'},
  {q:'Este filme é o ___ do ano.',opts:['mais bom','melhor','boníssimo','ótimo'],ans:1,exp:'Относительная превосходная bom → <em>o melhor</em> + de.'},
  {q:'Comprei ___ quilo de maçãs.',opts:['um','uma','uns','umas'],ans:0,exp:'Quilo — мужской род → <em>um</em> quilo.'},
  {q:'O meu apartamento tem duas ___ de banho.',opts:['casas','quartos','salas','divisões'],ans:0,exp:'EP: <em>casa de banho</em>, мн.ч. <em>casas</em> de banho.'},
  {q:'___ trabalhar bem sob pressão. (умею справляться)',opts:['Posso','Sei','Consigo','Devo'],ans:2,exp:'Справляться → <em>conseguir</em>: Consigo trabalhar sob pressão.'},
];

const vocabQ=[
  {q:'Como se diz «поезд» em EP?',opts:['trem','comboio','autocarro','eléctrico'],ans:1,exp:'EP: <em>comboio</em>. BP: trem.'},
  {q:'O que significa «estou constipado» em EP?',opts:['Я в замешательстве','У меня насморк','У меня запор','Я устал'],ans:1,exp:'EP: <em>constipado</em> = насморк/простуда. Классическая ловушка!'},
  {q:'Como se diz «холодильник» em EP?',opts:['geladeira','nevera','frigorífico','refrigerador'],ans:2,exp:'EP: <em>frigorífico</em>. BP: geladeira.'},
  {q:'«Ao fim de semana» significa:',opts:['в конце недели','на выходных','в пятницу','после работы'],ans:1,exp:'EP: <em>ao fim de semana</em> = на выходных. BP: no fim de semana.'},
  {q:'O que é «a renda» num anúncio?',opts:['скидка','арендная плата','депозит','налог'],ans:1,exp:'EP: <em>renda</em> = арендная плата. BP: aluguel.'},
  {q:'«Apanhar o autocarro» significa:',opts:['остановить автобус','сесть на автобус','ждать автобус','пропустить автобус'],ans:1,exp:'EP: <em>apanhar</em> = сесть на транспорт. BP: pegar.'},
  {q:'Como se diz «удалённая работа» em EP?',opts:['home office','trabalho remoto','teletrabalho','trabalho à distância'],ans:2,exp:'EP: <em>teletrabalho</em>. BP: trabalho remoto.'},
  {q:'«Faz favor» em EP serve para:',opts:['сказать спасибо','попросить счёт','привлечь внимание','попрощаться'],ans:2,exp:'EP: <em>Faz favor</em> = «будьте добры» — привлечение внимания.'},
  {q:'«Tenho saudades de ti» significa:',opts:['Я злюсь на тебя','Я скучаю по тебе','Я думаю о тебе','Я рад тебя видеть'],ans:1,exp:'<em>Ter saudades de</em> = скучать с нежностью.'},
  {q:'Como se diz «вакансия» em EP?',opts:['trabalho','oferta','vaga','emprego'],ans:2,exp:'EP: <em>vaga</em> = вакансия. Emprego = работа вообще.'},
];

let gAnswers=new Array(grammarQ.length).fill(null),gCorrect=0;
let vAnswers=new Array(vocabQ.length).fill(null),vCorrect=0;

function W12buildGrammar(){
  const c=document.getElementById('W12quiz-grammar');c.innerHTML='';
  gAnswers=new Array(grammarQ.length).fill(null);gCorrect=0;W12updateGScore();
  grammarQ.forEach((q,i)=>{
    const b=document.createElement('div');b.className='quiz-box';b.id='qg'+i;
    b.innerHTML=`<div class="q">${i+1}. ${q.q}</div><div class="options">${q.opts.map((o,j)=>`<button class="opt" onclick="W12answerG(${i},${j})">${o}</button>`).join('')}</div><div class="quiz-feedback" id="qgf${i}"></div>`;
    c.appendChild(b);
  });
  document.getElementById('W12reset-g').style.display='none';
}
function W12answerG(qi,oi){
  if(gAnswers[qi]!==null)return;gAnswers[qi]=oi;
  const q=grammarQ[qi];
  document.querySelectorAll(`#W12qg${qi} .opt`).forEach((o,j)=>{o.classList.add('disabled');if(j===q.ans)o.classList.add('correct');else if(j===oi)o.classList.add('wrong');});
  const fb=document.getElementById('qgf'+qi);
  if(oi===q.ans){gCorrect++;fb.innerHTML='✓ '+q.exp;fb.className='quiz-feedback show ok';}
  else{fb.innerHTML='✗ '+q.exp;fb.className='quiz-feedback show no';}
  W12updateGScore();
  if(gAnswers.every(a=>a!==null)){document.getElementById('W12reset-g').style.display='inline-block';W12tryUpdateResult();}
}
function W12updateGScore(){const d=gAnswers.filter(a=>a!==null).length;document.getElementById('W12score-g').textContent=`Отвечено: ${d} / ${grammarQ.length} · Правильно: ${gCorrect}`;}
function W12resetGrammar(){W12buildGrammar();}

function W12buildVocab(){
  const c=document.getElementById('W12quiz-vocab');c.innerHTML='';
  vAnswers=new Array(vocabQ.length).fill(null);vCorrect=0;W12updateVScore();
  vocabQ.forEach((q,i)=>{
    const b=document.createElement('div');b.className='quiz-box';b.id='qv'+i;
    b.innerHTML=`<div class="q">${i+1}. ${q.q}</div><div class="options">${q.opts.map((o,j)=>`<button class="opt" onclick="W12answerV(${i},${j})">${o}</button>`).join('')}</div><div class="quiz-feedback" id="qvf${i}"></div>`;
    c.appendChild(b);
  });
  document.getElementById('W12reset-v').style.display='none';
}
function W12answerV(qi,oi){
  if(vAnswers[qi]!==null)return;vAnswers[qi]=oi;
  const q=vocabQ[qi];
  document.querySelectorAll(`#W12qv${qi} .opt`).forEach((o,j)=>{o.classList.add('disabled');if(j===q.ans)o.classList.add('correct');else if(j===oi)o.classList.add('wrong');});
  const fb=document.getElementById('qvf'+qi);
  if(oi===q.ans){vCorrect++;fb.innerHTML='✓ '+q.exp;fb.className='quiz-feedback show ok';}
  else{fb.innerHTML='✗ '+q.exp;fb.className='quiz-feedback show no';}
  W12updateVScore();
  if(vAnswers.every(a=>a!==null)){document.getElementById('W12reset-v').style.display='inline-block';W12tryUpdateResult();}
}
function W12updateVScore(){const d=vAnswers.filter(a=>a!==null).length;document.getElementById('W12score-v').textContent=`Отвечено: ${d} / ${vocabQ.length} · Правильно: ${vCorrect}`;}
function W12resetVocab(){W12buildVocab();}

function W12tryUpdateResult(){
  if(!gAnswers.every(a=>a!==null)||!vAnswers.every(a=>a!==null))return;
  const total=grammarQ.length+vocabQ.length;
  const correct=gCorrect+vCorrect;
  const pct=Math.round(correct/total*100);
  const box=document.getElementById('W12final-result');
  box.classList.add('show');
  document.getElementById('W12res-score').textContent=correct+' / '+total;
  const lvl=document.getElementById('W12res-level');
  const cmt=document.getElementById('W12res-comment');
  if(pct>=80){lvl.textContent='A1 Confirmado ✓';lvl.className='result-level level-pass';cmt.textContent='Отличный результат! Уровень A1 подтверждён. Вы готовы к A2. Начните с Pretérito Mais-que-Perfeito и Conjuntivo Presente — см. дорожную карту.';}
  else if(pct>=60){lvl.textContent='A1 (почти) ≈';lvl.className='result-level level-partial';cmt.textContent='Хорошая основа A1. Повторите темы с ошибками — особенно EP-энклизис и perfeito/imperfeito. Затем двигайтесь к A2.';}
  else{lvl.textContent='A1 — ещё немного';lvl.className='result-level level-retry';cmt.textContent='Не расстраивайтесь! Пробел — следующая задача (метод Фейнмана). Выберите 3 слабые темы, проработайте неделю и повторите тест.';}
  const ids=['pr1','pr2','pr3','pr4','pr5','pr6'];
  ids.forEach((id,i)=>{const f=document.getElementById('W12' + id);const p=document.getElementById('W12pp'+(i+1));if(f){f.style.width=pct+'%';}if(p){p.textContent=pct+'%';}});
}

W12buildGrammar();W12buildVocab();

const wFB={
  1:{k:['chamo','sou','vivo','trabalho','tenho','gosto','levanto','vou','falo','estudo'],ok:'✓ Boa apresentação! Verifique: gostar <strong>de</strong> + inf (предлог не пропущен?)  рефлексивы в EP-порядке (levanto-me)? планы через ir+inf?',no:'💡 Estrutura: [nome+origem] → [localização] → [profissão] → [família] → [hobbies] → [rotina] → [planos futuros]. Минимум 3 разных глагола.'},
  2:{k:['olá','semana','fui','estava','fazia','chovia','vou','abraço','querido'],ok:'✓ Boa carta! Приветствие + подпись есть? Perfeito для событий + imperfeito для фона? Ir+inf для планов?',no:'💡 Структура carta: [Olá/Querido Nome,] → [Как дела?] → [события perfeito] → [погода/фон imperfeito] → [планы ir+inf] → [Um abraço, Nome]'},
  3:{k:['fica','há','mais','do que','está','bonito','grande','perto','lado','frente','melhor'],ok:'✓ Boa descrição! Проверьте согласование прилагательных и предлоги с контракциями. Есть сравнение (mais…do que)?',no:'💡 Estrutura: [название + localização] → [o que há] → [descrição com adjectivos] → [comparação: mais X do que Y] → [o que mais gosto]'},
};
function W12checkWriting(n){
  const v=document.getElementById('W12w'+n).value.trim().toLowerCase();
  const fb=document.getElementById('W12wf'+n);const d=wFB[n];
  if(!v||v.length<30){fb.innerHTML='⚠️ Напишите больше — минимум 4–5 предложений.';fb.className='quiz-feedback show no';return;}
  const has=d.k.some(k=>v.includes(k));
  fb.innerHTML=has?d.ok:d.no;fb.className='quiz-feedback show '+(has?'ok':'no');
}

const finalLines=[
  {s:'left',av:'🧑',pt:'Olá! Bom dia. Chamo-me Aleksei. Sou o novo colega.',ipa:'[ɔˈla | bõ ˈdi.ɐ | ˈʃɐmu mɨ aleksej]',ru:'Привет! Доброе утро. Меня зовут Алексей. Я новый коллега.'},
  {s:'right',av:'👩',pt:'Olá, Aleksei! Bem-vindo! Chamo-me Ana. De onde és?',ipa:'[ɔˈla | bẽj̃ ˈvĩndu | ˈʃɐmu mɨ ˈɐnɐ | dɨ ˈõndɨ ˈɛʃ]',ru:'Привет, Алексей! Добро пожаловать! Я Ана. Откуда ты?'},
  {s:'left',av:'🧑',pt:'Sou da Rússia, mas vivo em Lisboa há dois anos. Gosto muito desta cidade.',ipa:'[ˈso dɐ ˈʁusiɐ | mɐʃ ˈvivu ẽ liʒˈboɐ a dojʃ ˈɐnuʃ]',ru:'Из России, но живу в Лиссабоне уже два года. Очень люблю этот город.'},
  {s:'right',av:'👩',pt:'Que fixe! E o que fazes aqui na empresa?',ipa:'[kɨ ˈfikʃɨ | i u kɨ ˈfazɨʃ ɐˈki nɐ ẽˈpɾezɐ]',ru:'Как здорово! Чем занимаешься в компании?'},
  {s:'left',av:'🧑',pt:'Sou programador. Sei trabalhar com Python e JavaScript. E tu?',ipa:'[ˈso pɾuɡɾɐmɐˈdoɾ | ˈsɐj tɾɐbɐˈʎaɾ]',ru:'Я программист. Умею работать с Python и JavaScript. А ты?'},
  {s:'right',av:'👩',pt:'Sou gestora de projetos. Trabalhamos juntos então! Tens planos para o fim de semana?',ipa:'[ˈso ʒɨʃˈtoɾɐ dɨ pɾuˈʒɛtuʃ | tɾɐbɐˈʎɐmuʃ ˈʒũntuʃ ẽˈtãw̃]',ru:'Я менеджер проектов. Значит, работаем вместе! Планы на выходные?'},
  {s:'left',av:'🧑',pt:'Sim! Vou visitar o Museu do Azulejo. E o tempo? Está a fazer bom tempo?',ipa:'[sĩ | vow viziˈtaɾ u muˈzɛw du ɐzuˈlɐjʒu]',ru:'Да! Пойду в Музей изразца. А погода хорошая?'},
  {s:'right',av:'👩',pt:'Faz muito sol hoje — é boníssimo! Lisboa é a cidade mais luminosa da Europa, na minha opinião.',ipa:'[faʃ ˈmwitu sɔɫ ˈoʒɨ | ˈɛ buˈnisimɐ]',ru:'Сегодня очень солнечно — изумительно! Лиссабон — самый светлый город Европы.'},
  {s:'left',av:'🧑',pt:'Concordo! Tenho muitas saudades do sol quando estou na Rússia. Prazer em conhecer-te, Ana!',ipa:'[kõˈdoɾɡu | ˈteɲu ˈmwjtɐʃ ˈsɐwdadɨʃ du sɔɫ]',ru:'Согласен! Очень скучаю по солнцу в России. Приятно познакомиться, Ана!'},
  {s:'right',av:'👩',pt:'Igualmente! Boa sorte no novo emprego!',ipa:'[iɡwɐɫˈmẽntɨ | ˈboɐ ˈsɔɾtɨ nu ˈnovu ẽˈpɾeɡu]',ru:'Взаимно! Удачи на новой работе!'},
];
const fd=document.getElementById('W12final-dialogue');
finalLines.forEach(l=>{
  const d=document.createElement('div');d.className='d-line'+(l.s==='right'?' right':'');
  d.innerHTML=`<div class="d-avatar">${l.av}</div><div class="d-bubble" onclick="speak('${l.pt.replace(/'/g,"\\'")}')"><span class="d-pt">${l.pt}</span><span class="d-ipa">${l.ipa}</span><span class="d-ru">${l.ru}</span></div>`;
  fd.appendChild(d);
});
window.W12answerG = W12answerG;
window.W12answerV = W12answerV;
window.W12checkWriting = W12checkWriting;
window.W12resetGrammar = W12resetGrammar;
window.W12resetVocab = W12resetVocab;
window.W12tryUpdateResult = W12tryUpdateResult;
})();
