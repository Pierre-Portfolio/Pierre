var activeCat=null;
function toggleCat(cat,el){
  document.querySelectorAll(".cat-card").forEach(function(c){c.classList.remove("active");});
  var det=document.getElementById("proj-detail");
  if(activeCat===cat){activeCat=null;det.style.display="none";return;}
  activeCat=cat;el.classList.add("active");
  renderProj(cat);det.style.display="block";
  setTimeout(function(){det.scrollIntoView({behavior:"smooth",block:"start"});},50);
}
function renderProj(cat){
  var lang=document.documentElement.getAttribute("data-lang")||"fr";
  var m=CAT_META[cat];
  document.getElementById("proj-detail-title").textContent=lang==="en"?m.en:m.fr;
  var grid=document.getElementById("proj-grid");
  var list=PROJECTS.filter(function(p){return p.c===cat;}).sort(function(a,b){return b.y-a.y;});
  grid.innerHTML=list.map(function(p){
    var desc=lang==="en"?p.en:p.fr;
    var tags=p.lg.map(function(l){return '<span class="proj-tag '+(TAG_MAP[l]||'')+'">'+l+'</span>';}).join("");
    var stars='';
    var imgSrc=p.img?p.img:'https://opengraph.githubassets.com/1/Pierre-Portfolio/'+p.r;
    var ghUrl='https://github.com/Pierre-Portfolio/'+p.r;
    return '<a href="'+(p.noGithub?'#':ghUrl)+'" '+(p.noGithub?'onclick="return false"':"target=\"_blank\"")+' class="proj-card'+(p.noGithub?' proj-no-gh':'')+'">'
      +'<img src="'+imgSrc+'" alt="'+p.t+'" style="object-fit:'+(p.fit||'cover')+'"' +' onerror="this.src=\'https://opengraph.githubassets.com/1/Pierre-Portfolio/'+p.r+'\'">'
      +'<div class="proj-fallback">&#128187;</div>'
      +'<div class="proj-body"><div class="proj-meta"><span class="proj-year">'+p.y+'</span>'+stars+'</div>'
      +'<div class="proj-title">'+p.t+'</div><div class="proj-desc">'+desc+'</div>'
      +'<div class="proj-tags">'+tags+'</div>'
      +'<div class="proj-gh">'+(lang==="en"?"View on GitHub":"Voir sur GitHub")+'</div></div></a>';
  }).join("");
}
