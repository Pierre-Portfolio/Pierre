var current=0,N=6;
function goTo(n){
  var slides = document.querySelectorAll(".slide");
  var dir = n > current ? 1 : -1;
  var prev = current;

  // Slide sortante
  if(slides[prev] && prev !== n){
    var outClass = dir > 0 ? 'slide-out-left' : 'slide-out-right';
    slides[prev].classList.remove('active');
    slides[prev].classList.add(outClass);
    (function(s, cls){ setTimeout(function(){ s.classList.remove(cls); }, 370); })(slides[prev], outClass);
  }

  // Slide entrante : définir la direction d'arrivée
  if(slides[n]){
    slides[n].style.setProperty('--slide-from', dir > 0 ? '40px' : '-40px');
    slides[n].classList.add('active');
  }

  document.querySelectorAll(".dot").forEach(function(d,i){d.classList.toggle("active",i===n);});
  document.querySelectorAll(".mbb-dot").forEach(function(d,i){d.classList.toggle("active",i===n);});
  document.querySelectorAll(".nav-dot").forEach(function(d,i){d.classList.toggle("active",i===n);});
  current=n;
  window.scrollTo({top:0,behavior:'instant'});
}
function changeSlide(d){goTo((current+d+N)%N);}
document.addEventListener("keydown",function(e){if(e.key==="ArrowLeft")changeSlide(-1);if(e.key==="ArrowRight")changeSlide(1);});
