function setLang(lang){
  document.documentElement.setAttribute("data-lang",lang);
  document.getElementById("flag-en").classList.toggle("active",lang==="en");
  document.getElementById("flag-fr").classList.toggle("active",lang==="fr");
  var mbbFr=document.getElementById("mbb-fr"); if(mbbFr) mbbFr.classList.toggle("active",lang==="fr");
  document.querySelectorAll("[data-fr][data-en]").forEach(function(el){el.textContent=lang==="en"?el.getAttribute("data-en"):el.getAttribute("data-fr");});
  if(activeCat) renderProj(activeCat);
}
setLang("fr");
