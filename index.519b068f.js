!function(){var e=document.querySelector(".randomize__button--generate"),t=document.querySelector(".randomize__button--clear"),n=document.querySelector("#random-from"),r=document.querySelector("#random-to"),o=document.querySelector("#random-amount"),u=document.querySelector(".randomize__number--text"),c=document.querySelector(".randomize__number"),m=[];function a(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}function d(){if(m.length>1)return u.textContent="Your numbers: ";u.textContent="Your number: "}e.addEventListener("click",(function(){(function(e,t,n){if(t-n<0)return c.textContent="0",d(),console.log("error");for(var r=0;r<n;r++){for(var o=!0;o;)number=a(e,t),o=m.includes(number);m.push(number),c.textContent=m.join(", ")}d()})(n.value,r.value,o.value),m=[]})),t.addEventListener("click",(function(){c.textContent="0"}))}();
//# sourceMappingURL=index.519b068f.js.map
