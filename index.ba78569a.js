function onEntry(e){e.forEach((e=>{e.isIntersecting&&e.target.classList.add("element-show")}))}let options={threshold:[.5]},observer=new IntersectionObserver(onEntry,options),elements=document.querySelectorAll(".element-animation");for(let e of elements)observer.observe(e);
//# sourceMappingURL=index.ba78569a.js.map
