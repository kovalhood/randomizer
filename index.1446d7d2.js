const e=document.querySelector("#random-from"),s=document.querySelector("#random-to"),t=document.querySelector("#random-amount"),c=document.querySelector("#sort-type"),d=document.querySelector("#duplicates-checkbox"),n=document.querySelector(".randomize__button--generate"),o=document.querySelector(".randomize__button--reset"),r=document.querySelector(".randomize__number-wrapper"),i=document.querySelector(".randomize__number-text"),l=document.querySelector(".randomize__number");let a=[];function u(e,s){return e=Math.ceil(e),s=Math.floor(s),Math.floor(Math.random()*(s-e+1))+e}function m(){l.textContent="0",r.classList.add("hidden"),e.value=1,s.value=10,t.value=1,c.value="1",d.checked=!1,c.disabled=!0,d.disabled=!0}n.addEventListener("click",(function(){(function(e,s,t){if(s-e<=0)return m(),console.log("error");1===(t=Math.floor(t))&&(console.log("1"),a.push(u(e,s)));if(t>1){if(console.log(">1"),d.checked){console.log("true");for(let c=0;c<t;c+=1)a.push(u(e,s));console.log(a)}else if(!d.checked){if(console.log("false"),s-e+1-t<0)return m(),console.log("error");for(let c=0;c<t;c+=1){let t,c=!0;for(;c;)t=u(e,s),c=a.includes(t);a.push(t)}console.log(a)}!function(e){if("1"===c.value)return console.log("None"),console.log(e);if("2"===c.value)return console.log("Ascending"),e.sort(((e,s)=>e-s)),console.log(e);if("3"===c.value)console.log("Descending"),e.sort(((e,s)=>s-e)),console.log(e)}(a)}r.classList.remove("hidden"),l.textContent=a.join(", "),function(){if(a.length>1)return i.textContent="Your numbers: ";i.textContent="Your number: "}()})(e.value,s.value,t.value),a=[]})),o.addEventListener("click",m);const v={fromRemove:document.querySelector("#quantity--from-remove"),fromAdd:document.querySelector("#quantity--from-add"),toRemove:document.querySelector("#quantity--to-remove"),toAdd:document.querySelector("#quantity--to-add"),amountRemove:document.querySelector("#quantity--amount-remove"),amountAdd:document.querySelector("#quantity--amount-add")};v.fromRemove.addEventListener("click",(function(){if(e.value=Number(e.value)-1,0==e.value)return v.fromRemove.disabled=!0})),v.fromAdd.addEventListener("click",(function(){e.value=Number(e.value)+1,e.value>=1&&(v.fromRemove.disabled=!1)})),v.toRemove.addEventListener("click",(function(){if(s.value=Number(s.value)-1,1==s.value)return v.toRemove.disabled=!0})),v.toAdd.addEventListener("click",(function(){s.value=Number(s.value)+1,s.value>=2&&(v.toRemove.disabled=!1)})),v.amountRemove.addEventListener("click",(function(){if(t.value=Number(t.value)-1,1==t.value)return v.amountRemove.disabled=!0})),v.amountAdd.addEventListener("click",(function(){t.value=Number(t.value)+1,t.value>=2&&(v.amountRemove.disabled=!1)}));const L=document.querySelector("#nav-logo"),h=document.querySelector("#nav-number"),b=document.querySelector("#nav-yesno"),f=document.querySelector("#nav-dice"),y=document.querySelector("#nav-coin"),q=document.querySelector("#nav-password"),S=document.querySelector("#section-number"),k=document.querySelector("#section-yesno"),p=document.querySelector("#section-dice"),E=document.querySelector("#section-coin"),g=document.querySelector("#section-password");L.addEventListener("click",(function(){h.classList.add("current"),b.classList.remove("current"),f.classList.remove("current"),y.classList.remove("current"),q.classList.remove("current"),S.classList.remove("hidden"),k.classList.add("hidden"),p.classList.add("hidden"),E.classList.add("hidden"),g.classList.add("hidden")})),h.addEventListener("click",(function(){h.classList.add("current"),b.classList.remove("current"),f.classList.remove("current"),y.classList.remove("current"),q.classList.remove("current"),S.classList.remove("hidden"),k.classList.add("hidden"),p.classList.add("hidden"),E.classList.add("hidden"),g.classList.add("hidden")})),b.addEventListener("click",(function(){h.classList.remove("current"),b.classList.add("current"),f.classList.remove("current"),y.classList.remove("current"),q.classList.remove("current"),S.classList.add("hidden"),k.classList.remove("hidden"),p.classList.add("hidden"),E.classList.add("hidden"),g.classList.add("hidden")})),f.addEventListener("click",(function(){h.classList.remove("current"),b.classList.remove("current"),f.classList.add("current"),y.classList.remove("current"),q.classList.remove("current"),S.classList.add("hidden"),k.classList.add("hidden"),p.classList.remove("hidden"),E.classList.add("hidden"),g.classList.add("hidden")})),y.addEventListener("click",(function(){h.classList.remove("current"),b.classList.remove("current"),f.classList.remove("current"),y.classList.add("current"),q.classList.remove("current"),S.classList.add("hidden"),k.classList.add("hidden"),p.classList.add("hidden"),E.classList.remove("hidden"),g.classList.add("hidden")})),q.addEventListener("click",(function(){h.classList.remove("current"),b.classList.remove("current"),f.classList.remove("current"),y.classList.remove("current"),q.classList.add("current"),S.classList.add("hidden"),k.classList.add("hidden"),p.classList.add("hidden"),E.classList.add("hidden"),g.classList.remove("hidden")}));const _=document.querySelector(".mobile-nav-menu__button--open"),R=document.querySelector(".mobile-nav-menu__button--close"),A=document.querySelector(".mobile-nav-menu__wrapper"),N=document.querySelector("#mobile-nav-number"),w=document.querySelector("#mobile-nav-yesno"),x=document.querySelector("#mobile-nav-dice"),z=document.querySelector("#mobile-nav-coin"),M=document.querySelector("#mobile-nav-password"),C=document.querySelector("#section-number"),Y=document.querySelector("#section-yesno"),j=document.querySelector("#section-dice"),D=document.querySelector("#section-coin"),B=document.querySelector("#section-password");_.addEventListener("click",(function(){A.classList.add("is-open")})),R.addEventListener("click",(function(){A.classList.remove("is-open")})),N.addEventListener("click",(function(){N.classList.add("mobile-current"),w.classList.remove("mobile-current"),x.classList.remove("mobile-current"),z.classList.remove("mobile-current"),M.classList.remove("mobile-current"),C.classList.remove("hidden"),Y.classList.add("hidden"),j.classList.add("hidden"),D.classList.add("hidden"),B.classList.add("hidden"),A.classList.remove("is-open")})),w.addEventListener("click",(function(){N.classList.remove("mobile-current"),w.classList.add("mobile-current"),x.classList.remove("mobile-current"),z.classList.remove("mobile-current"),M.classList.remove("mobile-current"),C.classList.add("hidden"),Y.classList.remove("hidden"),j.classList.add("hidden"),D.classList.add("hidden"),B.classList.add("hidden"),A.classList.remove("is-open")})),x.addEventListener("click",(function(){N.classList.remove("mobile-current"),w.classList.remove("mobile-current"),x.classList.add("mobile-current"),z.classList.remove("mobile-current"),M.classList.remove("mobile-current"),C.classList.add("hidden"),Y.classList.add("hidden"),j.classList.remove("hidden"),D.classList.add("hidden"),B.classList.add("hidden"),A.classList.remove("is-open")})),z.addEventListener("click",(function(){N.classList.remove("mobile-current"),w.classList.remove("mobile-current"),x.classList.remove("mobile-current"),z.classList.add("mobile-current"),M.classList.remove("mobile-current"),C.classList.add("hidden"),Y.classList.add("hidden"),j.classList.add("hidden"),D.classList.remove("hidden"),B.classList.add("hidden"),A.classList.remove("is-open")})),M.addEventListener("click",(function(){N.classList.remove("mobile-current"),w.classList.remove("mobile-current"),x.classList.remove("mobile-current"),z.classList.remove("mobile-current"),M.classList.add("mobile-current"),C.classList.add("hidden"),Y.classList.add("hidden"),j.classList.add("hidden"),D.classList.add("hidden"),B.classList.remove("hidden"),A.classList.remove("is-open")}));
//# sourceMappingURL=index.1446d7d2.js.map
