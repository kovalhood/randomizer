!function(){var e=document.querySelector(".button_randomize"),o=document.querySelector(".number_rundomize"),t=document.querySelector("#random-from"),n=document.querySelector("#random-to"),r=[];e.addEventListener("click",(function(){o.textContent=(e=t.value,u=n.value,e=Math.ceil(e),u=Math.floor(u),Math.floor(Math.random()*(u-e+1))+e),r.push(o.textContent),console.log(r);var e,u}))}();
//# sourceMappingURL=index.856598f9.js.map
