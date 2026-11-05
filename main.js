document.addEventListener('DOMContentLoaded',()=>{
 if(window.lucide) lucide.createIcons();
 const menu=document.querySelector('.menu-btn'), links=document.querySelector('.nav-links');
 menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
 links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
 const current=document.body.dataset.current;
 document.querySelectorAll('.nav-links a').forEach(a=>a.classList.toggle('active',a.dataset.page===current));
 const theme=document.querySelector('.theme-btn');
 if(localStorage.getItem('hussain-bb-theme')==='light')document.body.classList.add('light-mode');
 theme.addEventListener('click',()=>{document.body.classList.toggle('light-mode');localStorage.setItem('hussain-bb-theme',document.body.classList.contains('light-mode')?'light':'dark');});
 const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
 const counters=document.querySelectorAll('[data-count]');
 if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;const el=entry.target,target=Number(el.dataset.count),start=performance.now();function step(now){const p=Math.min((now-start)/1200,1);el.textContent=Math.floor(target*(1-Math.pow(1-p,3))).toLocaleString('en-IN')+'+';if(p<1)requestAnimationFrame(step);}requestAnimationFrame(step);observer.unobserve(el);}),{threshold:.5});counters.forEach(el=>observer.observe(el));}
 const form=document.getElementById('request-form');if(form)form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const group=document.getElementById('group').value,units=document.getElementById('units').value;form.querySelector('.form-message').textContent=`Demo preview only: ${units} unit(s) of ${group} selected. No request was sent or stored.`;form.reset();});
});