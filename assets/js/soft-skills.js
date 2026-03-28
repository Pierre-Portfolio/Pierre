const SOFT=[
  {e:"\u{1F3AF}",fr:"Autonomie",en:"Autonomy"},{e:"\u{1F4AC}",fr:"Communication",en:"Communication"},
  {e:"\u{1F4CA}",fr:"Esprit d'analyse",en:"Analytical mind"},{e:"\u{1F4A1}",fr:"Force de proposition",en:"Proactive"},
  {e:"\u{1F91D}",fr:"Gestion clients",en:"Client management"},{e:"\u{1F4CB}",fr:"Gestion de projet",en:"Project management"},
  {e:"\u{1F9E0}",fr:"Intelligence émotionnelle",en:"Emotional intelligence"},{e:"\u{1F451}",fr:"Leadership",en:"Leadership"},
  {e:"\u{1F504}",fr:"Méthodes Agiles",en:"Agile Methods"},{e:"\u{1F4C8}",fr:"Reporting & SLA",en:"Reporting & SLA"},
  {e:"\u{23F1}",fr:"Respect des delais",en:"On-time delivery"},{e:"\u{1F9E9}",fr:"Resolution de problemes",en:"Problem solving"},
  {e:"\u{1F465}",fr:"Travail en équipe",en:"Teamwork"},{e:"\u{1F52D}",fr:"Veille technologique",en:"Tech watch"}
];
(function(){
  var g=document.getElementById("soft-grid");
  SOFT.forEach(function(s){
    var d=document.createElement("div");d.className="soft-box";
    var inner=document.createElement("div");inner.className="soft-inner";
    var e=document.createElement("span");e.className="emoji-big";e.textContent=s.e;
    var tip=document.createElement("span");tip.className="tip";tip.textContent=s.fr;
    inner.appendChild(e);inner.appendChild(tip);
    var lbl=document.createElement("span");lbl.className="soft-label";
    lbl.setAttribute("data-fr",s.fr);lbl.setAttribute("data-en",s.en);lbl.textContent=s.fr;
    d.appendChild(inner);d.appendChild(lbl);g.appendChild(d);
  });
})();
