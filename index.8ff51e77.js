const e=document.querySelector(".randomize__button--generate"),s=document.querySelector(".randomize__button--reset"),t=document.querySelector("#random-from"),c=document.querySelector("#random-to"),d=document.querySelector("#random-amount"),n=document.querySelector("#sort-type"),r=document.querySelector("#duplicates-checkbox"),i=document.querySelector(".randomize__number-wrapper"),o=document.querySelector(".randomize__number-text"),l=document.querySelector(".randomize__number");let a=[];function u(e,s){return e=Math.ceil(e),s=Math.floor(s),Math.floor(Math.random()*(s-e+1))+e}function m(){l.textContent="0",i.classList.add("hidden"),t.value=1,c.value=10,d.value=1,n.value="1",r.checked=!1,n.disabled=!0,r.disabled=!0}e.addEventListener("click",(function(){(function(e,s,t){if(s-e<=0)return m(),console.log("error");1===(t=Math.floor(t))&&(console.log("1"),a.push(u(e,s)));if(t>1){if(console.log(">1"),r.checked){console.log("true");for(let c=0;c<t;c+=1)a.push(u(e,s));console.log(a)}else if(!r.checked){if(console.log("false"),s-e+1-t<0)return m(),console.log("error");for(let c=0;c<t;c+=1){let t,c=!0;for(;c;)t=u(e,s),c=a.includes(t);a.push(t)}console.log(a)}!function(e){if("1"===n.value)return console.log("None"),console.log(e);if("2"===n.value)return console.log("Ascending"),e.sort(((e,s)=>e-s)),console.log(e);if("3"===n.value)console.log("Descending"),e.sort(((e,s)=>s-e)),console.log(e)}(a)}i.classList.remove("hidden"),l.textContent=a.join(", "),function(){if(a.length>1)return o.textContent="Your numbers: ";o.textContent="Your number: "}()})(t.value,c.value,d.value),a=[]})),s.addEventListener("click",m),d.addEventListener("change",(function(){d.value<2&&(n.disabled=!0,r.disabled=!0);d.value>=2&&(n.disabled=!1,r.disabled=!1)}));const L=document.querySelector("#nav-logo"),v=document.querySelector("#nav-number"),h=document.querySelector("#nav-yesno"),b=document.querySelector("#nav-dice"),y=document.querySelector("#nav-coin"),f=document.querySelector("#nav-password"),q=document.querySelector("#section-number"),S=document.querySelector("#section-yesno"),p=document.querySelector("#section-dice"),g=document.querySelector("#section-coin"),k=document.querySelector("#section-password");L.addEventListener("click",(function(){v.classList.add("current"),h.classList.remove("current"),b.classList.remove("current"),y.classList.remove("current"),f.classList.remove("current"),q.classList.remove("hidden"),S.classList.add("hidden"),p.classList.add("hidden"),g.classList.add("hidden"),k.classList.add("hidden")})),v.addEventListener("click",(function(){v.classList.add("current"),h.classList.remove("current"),b.classList.remove("current"),y.classList.remove("current"),f.classList.remove("current"),q.classList.remove("hidden"),S.classList.add("hidden"),p.classList.add("hidden"),g.classList.add("hidden"),k.classList.add("hidden")})),h.addEventListener("click",(function(){v.classList.remove("current"),h.classList.add("current"),b.classList.remove("current"),y.classList.remove("current"),f.classList.remove("current"),q.classList.add("hidden"),S.classList.remove("hidden"),p.classList.add("hidden"),g.classList.add("hidden"),k.classList.add("hidden")})),b.addEventListener("click",(function(){v.classList.remove("current"),h.classList.remove("current"),b.classList.add("current"),y.classList.remove("current"),f.classList.remove("current"),q.classList.add("hidden"),S.classList.add("hidden"),p.classList.remove("hidden"),g.classList.add("hidden"),k.classList.add("hidden")})),y.addEventListener("click",(function(){v.classList.remove("current"),h.classList.remove("current"),b.classList.remove("current"),y.classList.add("current"),f.classList.remove("current"),q.classList.add("hidden"),S.classList.add("hidden"),p.classList.add("hidden"),g.classList.remove("hidden"),k.classList.add("hidden")})),f.addEventListener("click",(function(){v.classList.remove("current"),h.classList.remove("current"),b.classList.remove("current"),y.classList.remove("current"),f.classList.add("current"),q.classList.add("hidden"),S.classList.add("hidden"),p.classList.add("hidden"),g.classList.add("hidden"),k.classList.remove("hidden")}));const E=document.querySelector(".mobile-nav-menu__button--open"),_=document.querySelector(".mobile-nav-menu__button--close"),w=document.querySelector(".mobile-nav-menu__wrapper"),x=document.querySelector("#mobile-nav-number"),z=document.querySelector("#mobile-nav-yesno"),M=document.querySelector("#mobile-nav-dice"),C=document.querySelector("#mobile-nav-coin"),Y=document.querySelector("#mobile-nav-password"),j=document.querySelector("#section-number"),A=document.querySelector("#section-yesno"),D=document.querySelector("#section-dice"),N=document.querySelector("#section-coin"),B=document.querySelector("#section-password");E.addEventListener("click",(function(){w.classList.add("is-open")})),_.addEventListener("click",(function(){w.classList.remove("is-open")})),x.addEventListener("click",(function(){x.classList.add("mobile-current"),z.classList.remove("mobile-current"),M.classList.remove("mobile-current"),C.classList.remove("mobile-current"),Y.classList.remove("mobile-current"),j.classList.remove("hidden"),A.classList.add("hidden"),D.classList.add("hidden"),N.classList.add("hidden"),B.classList.add("hidden"),w.classList.remove("is-open")})),z.addEventListener("click",(function(){x.classList.remove("mobile-current"),z.classList.add("mobile-current"),M.classList.remove("mobile-current"),C.classList.remove("mobile-current"),Y.classList.remove("mobile-current"),j.classList.add("hidden"),A.classList.remove("hidden"),D.classList.add("hidden"),N.classList.add("hidden"),B.classList.add("hidden"),w.classList.remove("is-open")})),M.addEventListener("click",(function(){x.classList.remove("mobile-current"),z.classList.remove("mobile-current"),M.classList.add("mobile-current"),C.classList.remove("mobile-current"),Y.classList.remove("mobile-current"),j.classList.add("hidden"),A.classList.add("hidden"),D.classList.remove("hidden"),N.classList.add("hidden"),B.classList.add("hidden"),w.classList.remove("is-open")})),C.addEventListener("click",(function(){x.classList.remove("mobile-current"),z.classList.remove("mobile-current"),M.classList.remove("mobile-current"),C.classList.add("mobile-current"),Y.classList.remove("mobile-current"),j.classList.add("hidden"),A.classList.add("hidden"),D.classList.add("hidden"),N.classList.remove("hidden"),B.classList.add("hidden"),w.classList.remove("is-open")})),Y.addEventListener("click",(function(){x.classList.remove("mobile-current"),z.classList.remove("mobile-current"),M.classList.remove("mobile-current"),C.classList.remove("mobile-current"),Y.classList.add("mobile-current"),j.classList.add("hidden"),A.classList.add("hidden"),D.classList.add("hidden"),N.classList.add("hidden"),B.classList.remove("hidden"),w.classList.remove("is-open")}));
//# sourceMappingURL=index.8ff51e77.js.map
