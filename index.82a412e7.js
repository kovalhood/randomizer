const e=document.querySelector("#random-from"),s=document.querySelector("#random-to"),t=document.querySelector("#random-amount"),d=document.querySelector("#sort-type"),o=document.querySelector("#duplicates-checkbox"),i={fromRemove:document.querySelector("#quantity--from-remove"),fromAdd:document.querySelector("#quantity--from-add"),toRemove:document.querySelector("#quantity--to-remove"),toAdd:document.querySelector("#quantity--to-add"),amountRemove:document.querySelector("#quantity--amount-remove"),amountAdd:document.querySelector("#quantity--amount-add")},a=document.querySelector(".randomize__button--generate"),n=document.querySelector(".randomize__button--reset"),r=document.querySelector(".randomize__number-wrapper"),c=document.querySelector(".randomize__number-text"),l=document.querySelector(".randomize__number");let m=[];function u(e,s){return e=Math.ceil(e),s=Math.floor(s),Math.floor(Math.random()*(s-e+1))+e}function v(){l.textContent="0",r.classList.add("hidden"),e.value=1,s.value=10,t.value=2,d.value="1",o.checked=!1,i.fromRemove.classList.add("randomize__quantity"),i.fromRemove.classList.remove("randomize__quantity--disabled"),i.fromRemove.disabled=!1,i.fromAdd.classList.add("randomize__quantity"),i.fromAdd.classList.remove("randomize__quantity--disabled"),i.fromAdd.disabled=!1,i.toRemove.classList.add("randomize__quantity"),i.toRemove.classList.remove("randomize__quantity--disabled"),i.toRemove.disabled=!1,i.toAdd.classList.add("randomize__quantity"),i.toAdd.classList.remove("randomize__quantity--disabled"),i.toAdd.disabled=!1,i.amountRemove.classList.remove("randomize__quantity"),i.amountRemove.classList.add("randomize__quantity--disabled"),i.amountRemove.disabled=!0,i.amountAdd.classList.add("randomize__quantity"),i.amountAdd.classList.remove("randomize__quantity--disabled"),i.amountAdd.disabled=!1}a.addEventListener("click",(function(){(function(e,s,t){if(s-e<=0)return v(),console.log("error");1===(t=Math.floor(t))&&(console.log("1"),m.push(u(e,s)));if(t>1){if(console.log(">1"),o.checked){console.log("true");for(let d=0;d<t;d+=1)m.push(u(e,s));console.log(m)}else if(!o.checked){if(console.log("false"),s-e+1-t<0)return v(),console.log("error");for(let d=0;d<t;d+=1){let t,d=!0;for(;d;)t=u(e,s),d=m.includes(t);m.push(t)}console.log(m)}!function(e){if("1"===d.value)return console.log("None"),console.log(e);if("2"===d.value)return console.log("Ascending"),e.sort(((e,s)=>e-s)),console.log(e);if("3"===d.value)console.log("Descending"),e.sort(((e,s)=>s-e)),console.log(e)}(m)}r.classList.remove("hidden"),l.textContent=m.join(", "),function(){if(m.length>1)return c.textContent="Your numbers: ";c.textContent="Your number: "}()})(e.value,s.value,t.value),m=[]})),n.addEventListener("click",v),i.fromRemove.addEventListener("click",(function(){if(e.value=Number(e.value)-1,0==e.value)return i.fromRemove.classList.remove("randomize__quantity"),i.fromRemove.classList.add("randomize__quantity--disabled"),i.fromRemove.disabled=!0;e.value<=9998&&(i.fromAdd.classList.add("randomize__quantity"),i.fromAdd.classList.remove("randomize__quantity--disabled"),i.fromAdd.disabled=!1)})),i.fromAdd.addEventListener("click",(function(){e.value=Number(e.value)+1,e.value>=1&&(i.fromRemove.classList.add("randomize__quantity"),i.fromRemove.classList.remove("randomize__quantity--disabled"),i.fromRemove.disabled=!1);9999==e.value&&(i.fromAdd.classList.remove("randomize__quantity"),i.fromAdd.classList.add("randomize__quantity--disabled"),i.fromAdd.disabled=!0)})),i.toRemove.addEventListener("click",(function(){if(s.value=Number(s.value)-1,1==s.value)return i.toRemove.classList.remove("randomize__quantity"),i.toRemove.classList.add("randomize__quantity--disabled"),i.toRemove.disabled=!0;s.value<=9999&&(i.toAdd.classList.add("randomize__quantity"),i.toAdd.classList.remove("randomize__quantity--disabled"),i.toAdd.disabled=!1)})),i.toAdd.addEventListener("click",(function(){s.value=Number(s.value)+1,s.value>=2&&(i.toRemove.classList.add("randomize__quantity"),i.toRemove.classList.remove("randomize__quantity--disabled"),i.toRemove.disabled=!1);1e4==s.value&&(i.toAdd.classList.remove("randomize__quantity"),i.toAdd.classList.add("randomize__quantity--disabled"),i.toAdd.disabled=!0)})),i.amountRemove.addEventListener("click",(function(){if(t.value=Number(t.value)-1,2==t.value)return i.amountRemove.classList.remove("randomize__quantity"),i.amountRemove.classList.add("randomize__quantity--disabled"),i.amountRemove.disabled=!0;t.value<=99&&(i.amountAdd.classList.add("randomize__quantity"),i.amountAdd.classList.remove("randomize__quantity--disabled"),i.amountAdd.disabled=!1)})),i.amountAdd.addEventListener("click",(function(){t.value=Number(t.value)+1,t.value>=3&&(i.amountRemove.classList.add("randomize__quantity"),i.amountRemove.classList.remove("randomize__quantity--disabled"),i.amountRemove.disabled=!1);100==t.value&&(i.amountAdd.classList.remove("randomize__quantity"),i.amountAdd.classList.add("randomize__quantity--disabled"),i.amountAdd.disabled=!0)}));const L=document.querySelector("#nav-logo"),b=document.querySelector("#nav-number"),_=document.querySelector("#nav-yesno"),y=document.querySelector("#nav-dice"),q=document.querySelector("#nav-coin"),h=document.querySelector("#nav-password"),f=document.querySelector("#section-number"),z=document.querySelector("#section-yesno"),S=document.querySelector("#section-dice"),A=document.querySelector("#section-coin"),R=document.querySelector("#section-password");L.addEventListener("click",(function(){b.classList.add("current"),_.classList.remove("current"),y.classList.remove("current"),q.classList.remove("current"),h.classList.remove("current"),f.classList.remove("hidden"),z.classList.add("hidden"),S.classList.add("hidden"),A.classList.add("hidden"),R.classList.add("hidden")})),b.addEventListener("click",(function(){b.classList.add("current"),_.classList.remove("current"),y.classList.remove("current"),q.classList.remove("current"),h.classList.remove("current"),f.classList.remove("hidden"),z.classList.add("hidden"),S.classList.add("hidden"),A.classList.add("hidden"),R.classList.add("hidden")})),_.addEventListener("click",(function(){b.classList.remove("current"),_.classList.add("current"),y.classList.remove("current"),q.classList.remove("current"),h.classList.remove("current"),f.classList.add("hidden"),z.classList.remove("hidden"),S.classList.add("hidden"),A.classList.add("hidden"),R.classList.add("hidden")})),y.addEventListener("click",(function(){b.classList.remove("current"),_.classList.remove("current"),y.classList.add("current"),q.classList.remove("current"),h.classList.remove("current"),f.classList.add("hidden"),z.classList.add("hidden"),S.classList.remove("hidden"),A.classList.add("hidden"),R.classList.add("hidden")})),q.addEventListener("click",(function(){b.classList.remove("current"),_.classList.remove("current"),y.classList.remove("current"),q.classList.add("current"),h.classList.remove("current"),f.classList.add("hidden"),z.classList.add("hidden"),S.classList.add("hidden"),A.classList.remove("hidden"),R.classList.add("hidden")})),h.addEventListener("click",(function(){b.classList.remove("current"),_.classList.remove("current"),y.classList.remove("current"),q.classList.remove("current"),h.classList.add("current"),f.classList.add("hidden"),z.classList.add("hidden"),S.classList.add("hidden"),A.classList.add("hidden"),R.classList.remove("hidden")}));const k=document.querySelector(".mobile-nav-menu__button--open"),p=document.querySelector(".mobile-nav-menu__button--close"),E=document.querySelector(".mobile-nav-menu__wrapper"),g=document.querySelector("#mobile-nav-number"),N=document.querySelector("#mobile-nav-yesno"),w=document.querySelector("#mobile-nav-dice"),x=document.querySelector("#mobile-nav-coin"),M=document.querySelector("#mobile-nav-password"),C=document.querySelector("#section-number"),Y=document.querySelector("#section-yesno"),j=document.querySelector("#section-dice"),D=document.querySelector("#section-coin"),B=document.querySelector("#section-password");k.addEventListener("click",(function(){E.classList.add("is-open")})),p.addEventListener("click",(function(){E.classList.remove("is-open")})),g.addEventListener("click",(function(){g.classList.add("mobile-current"),N.classList.remove("mobile-current"),w.classList.remove("mobile-current"),x.classList.remove("mobile-current"),M.classList.remove("mobile-current"),C.classList.remove("hidden"),Y.classList.add("hidden"),j.classList.add("hidden"),D.classList.add("hidden"),B.classList.add("hidden"),E.classList.remove("is-open")})),N.addEventListener("click",(function(){g.classList.remove("mobile-current"),N.classList.add("mobile-current"),w.classList.remove("mobile-current"),x.classList.remove("mobile-current"),M.classList.remove("mobile-current"),C.classList.add("hidden"),Y.classList.remove("hidden"),j.classList.add("hidden"),D.classList.add("hidden"),B.classList.add("hidden"),E.classList.remove("is-open")})),w.addEventListener("click",(function(){g.classList.remove("mobile-current"),N.classList.remove("mobile-current"),w.classList.add("mobile-current"),x.classList.remove("mobile-current"),M.classList.remove("mobile-current"),C.classList.add("hidden"),Y.classList.add("hidden"),j.classList.remove("hidden"),D.classList.add("hidden"),B.classList.add("hidden"),E.classList.remove("is-open")})),x.addEventListener("click",(function(){g.classList.remove("mobile-current"),N.classList.remove("mobile-current"),w.classList.remove("mobile-current"),x.classList.add("mobile-current"),M.classList.remove("mobile-current"),C.classList.add("hidden"),Y.classList.add("hidden"),j.classList.add("hidden"),D.classList.remove("hidden"),B.classList.add("hidden"),E.classList.remove("is-open")})),M.addEventListener("click",(function(){g.classList.remove("mobile-current"),N.classList.remove("mobile-current"),w.classList.remove("mobile-current"),x.classList.remove("mobile-current"),M.classList.add("mobile-current"),C.classList.add("hidden"),Y.classList.add("hidden"),j.classList.add("hidden"),D.classList.add("hidden"),B.classList.remove("hidden"),E.classList.remove("is-open")}));
//# sourceMappingURL=index.82a412e7.js.map
