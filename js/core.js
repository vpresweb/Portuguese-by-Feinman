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
window.speak=function(text){
  try{
    if(!window.speechSynthesis)return;
    speechSynthesis.cancel();
    var u=new SpeechSynthesisUtterance(text);
    u.lang="pt-PT";u.rate=0.78;u.pitch=1.0;
    var voices=speechSynthesis.getVoices()||[];
    var v=voices.find(function(x){return x.lang==="pt-PT";})||
          voices.find(function(x){return x.lang&&x.lang.startsWith("pt-PT");})||
          voices.find(function(x){return x.lang&&x.lang.startsWith("pt");})||
          voices.find(function(x){return x.lang&&x.lang.startsWith("pt-BR");});
    if(v)u.voice=v;
    if(voices.length===0){
      speechSynthesis.onvoiceschanged=function(){
        var vs=speechSynthesis.getVoices()||[];
        var vv=vs.find(function(x){return x.lang==="pt-PT";})||
               vs.find(function(x){return x.lang&&x.lang.startsWith("pt-PT");})||
               vs.find(function(x){return x.lang&&x.lang.startsWith("pt");})||
               vs.find(function(x){return x.lang&&x.lang.startsWith("pt-BR");});
        if(vv)u.voice=vv;
        speechSynthesis.speak(u);
      };
    }else{speechSynthesis.speak(u);}
  }catch(e){console.warn("speak:",e.message);}
};
try{if(window.speechSynthesis)speechSynthesis.onvoiceschanged=function(){};}catch(e){}
