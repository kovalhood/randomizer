!function(){var e=document.querySelector(".button_randomize"),t=document.querySelector(".button_clear"),o=document.querySelector(".number_rundomize"),n=document.querySelector("#random-from"),r=document.querySelector("#random-to"),c=[];e.addEventListener("click",(function(){o.textContent=(e=n.value,t=r.value,e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),c.push(o.textContent),console.log(c);var e,t})),t.addEventListener("click",(function(){o.textContent="0",c=[],console.log(c)}))}();
//# sourceMappingURL=index.ac19c066.js.map