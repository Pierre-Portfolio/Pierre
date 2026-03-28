(function(){
  var canvas=document.getElementById('bg-canvas');
  var ctx=canvas.getContext('2d');
  var stars=[], shoots=[];
  function rnd(a,b){return a+Math.random()*(b-a);}
  function resize(){
    canvas.width=window.innerWidth; canvas.height=window.innerHeight;
    stars=[];
    for(var i=0;i<260;i++){
      stars.push({x:rnd(0,canvas.width),y:rnd(0,canvas.height),
        r:rnd(0.3,1.7),base:rnd(0.12,0.68),phase:rnd(0,6.28),spd:rnd(0.004,0.022)});
    }
    window.starsRef=stars;
  }
  resize(); window.addEventListener('resize',resize);
  var C0=[6,30,75], C1=[10,90,108], C2=[14,122,122];
  function scrollT(){return Math.min(window.scrollY/Math.max(document.body.scrollHeight-window.innerHeight,1),1);}
  function lerp(a,b,t){return a+(b-a)*t;}
  var lastShoot=-9999;
  function spawnShoot(ts){
    var fromRight=Math.random()>0.4;
    var sx,sy;
    if(fromRight){sx=rnd(canvas.width*0.5,canvas.width*0.96);sy=rnd(0,canvas.height*0.6);}
    else{sx=rnd(canvas.width*0.2,canvas.width*0.9);sy=rnd(0,canvas.height*0.15);}
    shoots.push({x:sx,y:sy,len:rnd(90,165),spd:rnd(3.5,6.5),
      angle:Math.PI*0.65+rnd(-0.15,0.15),life:1,decay:rnd(0.009,0.016),w:rnd(1.0,1.8)});
    lastShoot=ts;
  }
  function draw(ts){
    var t=scrollT();
    var t1=Math.min(t*1.4,1);
    var top=[Math.round(lerp(C0[0],C1[0],t1)),Math.round(lerp(C0[1],C1[1],t1)),Math.round(lerp(C0[2],C1[2],t1))];
    var t2=Math.min(t*1.4,1);
    var bot=[Math.round(lerp(C1[0],C2[0],t2)),Math.round(lerp(C1[1],C2[1],t2)),Math.round(lerp(C1[2],C2[2],t2))];
    var g=ctx.createLinearGradient(0,0,0,canvas.height);
    g.addColorStop(0,'rgb('+top+')'); g.addColorStop(1,'rgb('+bot+')');
    ctx.fillStyle=g; ctx.fillRect(0,0,canvas.width,canvas.height);
    for(var i=0;i<stars.length;i++){
      var s=stars[i]; s.phase+=s.spd;
      var a=s.base+Math.sin(s.phase)*0.16;
      ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,6.28);
      ctx.fillStyle='rgba(255,255,255,'+Math.max(0,Math.min(1,a))+')'; ctx.fill();
    }
    if(ts-lastShoot>rnd(2500,5000)) spawnShoot(ts);
    for(var j=shoots.length-1;j>=0;j--){
      var sh=shoots[j];
      var tailX=sh.x-Math.cos(sh.angle)*sh.len*sh.life;
      var tailY=sh.y-Math.sin(sh.angle)*sh.len*sh.life;
      var gr=ctx.createLinearGradient(tailX,tailY,sh.x,sh.y);
      gr.addColorStop(0,'rgba(255,255,255,0)');
      gr.addColorStop(0.6,'rgba(210,240,255,'+(sh.life*0.5).toFixed(2)+')');
      gr.addColorStop(1,'rgba(255,255,255,'+sh.life.toFixed(2)+')');
      ctx.beginPath(); ctx.moveTo(tailX,tailY); ctx.lineTo(sh.x,sh.y);
      ctx.strokeStyle=gr; ctx.lineWidth=sh.w; ctx.lineCap='round'; ctx.stroke();
      sh.x+=Math.cos(sh.angle)*sh.spd; sh.y+=Math.sin(sh.angle)*sh.spd; sh.life-=sh.decay;
      if(sh.life<=0||sh.x<-80||sh.y>canvas.height+80) shoots.splice(j,1);
    }
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();
