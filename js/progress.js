// Сохранение прогресса курса в localStorage: открытая неделя и вкладки, тексты в упражнениях,
// ответы в тестах и показанные разборы. После перезагрузки всё восстанавливается.
// Ключи начинаются с «pfa1:» — приложение «Языки» синхронизирует их с учётной записью.
// Подключается последним, после js/week-*.js.
(function(){
  var PREFIX = "pfa1:";
  function get(key, fallback){
    try{ var v = localStorage.getItem(PREFIX + key); return v === null ? fallback : JSON.parse(v); }
    catch(e){ return fallback; }
  }
  function set(key, value){
    try{ localStorage.setItem(PREFIX + key, JSON.stringify(value)); }catch(e){ /* без сохранения */ }
  }

  var restoring = false;
  var tabs = get("tabs", {});   // { неделя: вкладка }
  var texts = get("texts", {}); // { id поля: текст }
  var answers = get("answers", {}); // { функция ответа: { вопрос: вариант } }
  var checks = get("checks", {});   // { "функция|аргументы": true } — нажатые «Проверить»
  if(!tabs || typeof tabs !== "object") tabs = {};
  if(!texts || typeof texts !== "object") texts = {};
  if(!answers || typeof answers !== "object") answers = {};
  if(!checks || typeof checks !== "object") checks = {};

  // Обернуть глобальную функцию (их вызывают onclick в разметке): after(аргументы) — после вызова.
  function wrap(name, after){
    var original = window[name];
    if(typeof original !== "function") return;
    window[name] = function(){
      var result = original.apply(this, arguments);
      try{ if(!restoring) after(Array.prototype.slice.call(arguments)); }catch(e){ console.warn("progress:", e.message); }
      return result;
    };
  }

  // ── Неделя и вкладка ──
  wrap("showWeek", function(a){ set("week", Number(a[0])); });
  wrap("goW", function(a){ tabs[a[0]] = String(a[1]); set("tabs", tabs); });

  // ── Тесты: ответы и «Начать заново» ──
  var RESETS = { resetQuiz: "answer", resetGrammar: "answerG", resetVocab: "answerV" };
  Object.keys(window).forEach(function(name){
    var m = /^(W\d+)(answer[GV]?|resetQuiz|resetGrammar|resetVocab|checkJ|checkEx\d+|checkWriting)$/.exec(name);
    if(!m) return;
    var week = m[1], kind = m[2];
    if(/^answer/.test(kind)){
      wrap(name, function(a){
        var log = answers[name] || (answers[name] = {});
        if(!(a[0] in log)){ log[a[0]] = a[1]; set("answers", answers); }
      });
    }else if(RESETS[kind]){
      var target = week + RESETS[kind];
      wrap(name, function(){ delete answers[target]; set("answers", answers); });
    }else{
      wrap(name, function(a){ checks[name + "|" + JSON.stringify(a)] = true; set("checks", checks); });
    }
  });

  // ── Тексты в упражнениях ──
  var timer = null;
  document.addEventListener("input", function(e){
    var el = e.target;
    if(!el || !el.id || !/^(TEXTAREA|INPUT)$/.test(el.tagName)) return;
    texts[el.id] = el.value;
    clearTimeout(timer);
    timer = setTimeout(function(){ set("texts", texts); }, 400);
  });
  window.addEventListener("pagehide", function(){ clearTimeout(timer); set("texts", texts); });

  // ── Восстановление ──
  restoring = true;
  try{
    Object.keys(texts).forEach(function(id){
      var el = document.getElementById(id);
      if(el && /^(TEXTAREA|INPUT)$/.test(el.tagName)) el.value = texts[id];
    });
    Object.keys(answers).forEach(function(name){
      if(typeof window[name] !== "function") return;
      var log = answers[name];
      Object.keys(log).sort(function(a, b){ return a - b; }).forEach(function(q){
        try{ window[name](Number(q), Number(log[q])); }catch(e){ console.warn("progress:", e.message); }
      });
    });
    Object.keys(checks).forEach(function(key){
      var i = key.indexOf("|");
      var name = key.slice(0, i);
      if(typeof window[name] !== "function") return;
      try{ window[name].apply(null, JSON.parse(key.slice(i + 1))); }catch(e){ console.warn("progress:", e.message); }
    });
    Object.keys(tabs).forEach(function(n){ window.goW(Number(n), tabs[n]); });
    var week = get("week", 1);
    if(week !== 1 && document.getElementById("wpanel" + week)){
      window.showWeek(week);
      window.scrollTo(0, 0);
    }
  }finally{
    restoring = false;
  }
})();
