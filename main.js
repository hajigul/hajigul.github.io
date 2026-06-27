// Mobile nav toggle
function toggleMenu(){document.getElementById('navlinks').classList.toggle('open');}

// Scroll reveal
document.addEventListener('DOMContentLoaded',function(){
  var els=document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return;}
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});
  },{threshold:.12});
  els.forEach(function(e){io.observe(e);});
});

// Copy citation to clipboard
function copyCite(btn){
  var pre=btn.closest('.cite-wrap').querySelector('pre.cite');
  var text=pre.innerText;
  function done(){var o=btn.textContent;btn.textContent='Copied!';btn.classList.add('copied');
    setTimeout(function(){btn.textContent=o;btn.classList.remove('copied');},1600);}
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(done).catch(function(){fallback(text,done);});
  }else{fallback(text,done);}
}
function fallback(text,cb){
  var ta=document.createElement('textarea');ta.value=text;ta.style.position='fixed';ta.style.opacity='0';
  document.body.appendChild(ta);ta.select();try{document.execCommand('copy');}catch(e){}
  document.body.removeChild(ta);cb();
}
