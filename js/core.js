window.onerror=function(m,s,l,c,e){console.warn("onerror:",m,"line:",l);return true;};
window.showWeek=function(n){
  try{
    var panels=document.querySelectorAll(".week-panel");
    var btns=document.querySelectorAll(".wbtn");
    for(var i=0;i<panels.length;i++)panels[i].classList.remove("active");
    for(var i=0;i<btns.length;i++)btns[i].classList.remove("active");
    var panel=document.getElementById("wpanel"+n);
    var btn=document.getElementById("wbtn"+n);
    if(panel)panel.classList.add("active");
    if(btn){btn.classList.add("active");btn.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"});}
    window.scrollTo({top:0,behavior:"smooth"});
  }catch(e){console.warn("showWeek:",e.message);}
};
window.goW=function(n,tabId){
  try{
    var panel=document.getElementById("wpanel"+n);
    if(!panel)return;
    var p="W"+n;
    var tabs=panel.querySelectorAll(".tab");
    var navBtns=panel.querySelectorAll(".week-inner-nav button");
    for(var i=0;i<tabs.length;i++)tabs[i].classList.remove("active");
    for(var i=0;i<navBtns.length;i++)navBtns[i].classList.remove("active");
    var tab=document.getElementById(p+"tab-"+tabId);
    if(tab)tab.classList.add("active");
    for(var i=0;i<navBtns.length;i++){
      var oc=navBtns[i].getAttribute("onclick")||"";
      if(oc.indexOf("'"+tabId+"'")>-1)navBtns[i].classList.add("active");
    }
  }catch(e){console.warn("goW:",e.message);}
};
// Голос: pt-PT → любой португальский; локальный (отвечает сразу, без интернета) раньше сетевого.
function pickPtVoice(vs){
  var tests=[
    function(x){return x.lang==="pt-PT";},
    function(x){return x.lang&&x.lang.replace("_","-").startsWith("pt-PT");},
    function(x){return x.lang&&x.lang.startsWith("pt");}
  ];
  for(var l=0;l<2;l++){
    for(var i=0;i<tests.length;i++){
      var test=tests[i],local=l===0;
      var found=vs.find(function(x){return test(x)&&Boolean(x.localService)===local;});
      if(found)return found;
    }
  }
  return null;
}
// Chrome молча теряет фразу, отправленную сразу после cancel() (проверено с голосами Google),
// поэтому после прерывания новая фраза уходит с паузой 120 мс; при быстрых нажатиях звучит последняя.
var speakTimer=null;
window.speak=function(text){
  try{
    if(!window.speechSynthesis||!text)return;
    clearTimeout(speakTimer);
    var go=function(){
      var u=new SpeechSynthesisUtterance(text);
      u.lang="pt-PT";u.rate=0.78;u.pitch=1.0;
      var voices=speechSynthesis.getVoices()||[];
      var v=pickPtVoice(voices);
      if(v)u.voice=v;
      if(voices.length===0){
        speechSynthesis.onvoiceschanged=function(){
          speechSynthesis.onvoiceschanged=function(){};
          var vv=pickPtVoice(speechSynthesis.getVoices()||[]);
          if(vv)u.voice=vv;
          speechSynthesis.speak(u);
        };
      }else{speechSynthesis.speak(u);}
    };
    if(speechSynthesis.speaking||speechSynthesis.pending){speechSynthesis.cancel();speakTimer=setTimeout(go,120);}
    else go();
  }catch(e){console.warn("speak:",e.message);}
};
try{if(window.speechSynthesis)speechSynthesis.onvoiceschanged=function(){};}catch(e){}

// ── TAP-TO-SPEAK: нажатие на любой португальский текст озвучивает его (pt-PT) ──
(function(){
  var SAY_SEL=".pt,.conj,.pronoun,.pt-word,.pron-form,.vc-pt,.vc-ex,.d-pt,.sound-example,.week-panel em,.week-panel strong,.week-panel b,.week-panel i";
  var CYR=/[А-Яа-яЁё]/;
  function clean(t){
    t=(t||"")
      .replace(/\[[^\]]*\]/g," ")                       // IPA [..]
      .replace(/[«»“”"]/g,"").replace(/:\s*$/,"")
      .replace(/\([^)]*[А-Яа-яЁё][^)]*\)/g," ")          // русские пояснения в скобках
      .replace(/_{2,}/g," … ")
      .replace(/[·\/→=+|]/g,", ")
      .replace(/^\s*\d+[.)]\s*/,"")
      .replace(/\s+/g," ").trim();
    if(!t||CYR.test(t)||!/[A-Za-zÀ-ÿ]/.test(t))return "";
    return t;
  }
  function hasOwnHandler(el){
    for(var n=el;n&&n!==document.body;n=n.parentElement){
      if(typeof n.onclick==="function")return true;
      if(/^(A|BUTTON|INPUT|TEXTAREA|SELECT|LABEL)$/.test(n.tagName))return true;
    }
    return false;
  }
  window.markSpeakable=function(root){
    try{
      var els=(root||document).querySelectorAll(SAY_SEL);
      for(var i=0;i<els.length;i++){
        if(clean(els[i].textContent)&&!hasOwnHandler(els[i]))els[i].classList.add("say");
      }
    }catch(e){console.warn("markSpeakable:",e.message);}
  };
  document.addEventListener("click",function(e){
    try{
      var el=e.target.closest&&e.target.closest(SAY_SEL);
      if(!el||hasOwnHandler(e.target))return;
      if(window.getSelection&&String(window.getSelection()).length>1)return;
      var t=clean(el.textContent);
      if(!t)return;
      window.speak(t);
      el.classList.add("saying");
      setTimeout(function(){el.classList.remove("saying");},900);
    }catch(err){console.warn("tap-to-speak:",err.message);}
  });
  window.addEventListener("load",function(){window.markSpeakable();});
})();
