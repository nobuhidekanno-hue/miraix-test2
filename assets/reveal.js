document.addEventListener('DOMContentLoaded',function(){
  const io=new IntersectionObserver((entries)=>{
    entries.forEach((e,i)=>{
      if(e.isIntersecting){setTimeout(()=>e.target.classList.add('in'),(i%3)*100);io.unobserve(e.target);}
    });
  },{threshold:.16});
  document.querySelectorAll('.reveal').forEach(c=>io.observe(c));
});
