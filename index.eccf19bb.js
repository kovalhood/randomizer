var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const t=document.querySelector("#nav-logo"),o=document.querySelector("#nav-number"),i=document.querySelector("#nav-yesno"),n=document.querySelector("#nav-dice"),a=document.querySelector("#nav-coin"),s=document.querySelector("#nav-password"),r=document.querySelector("#section-number"),l=document.querySelector("#section-yesno"),c=document.querySelector("#section-dice"),d=document.querySelector("#section-coin"),m=document.querySelector("#section-password");t.addEventListener("click",(function(){o.classList.add("current"),i.classList.remove("current"),n.classList.remove("current"),a.classList.remove("current"),s.classList.remove("current"),r.classList.remove("hidden"),l.classList.add("hidden"),c.classList.add("hidden"),d.classList.add("hidden"),m.classList.add("hidden")})),o.addEventListener("click",(function(){o.classList.add("current"),i.classList.remove("current"),n.classList.remove("current"),a.classList.remove("current"),s.classList.remove("current"),r.classList.remove("hidden"),l.classList.add("hidden"),c.classList.add("hidden"),d.classList.add("hidden"),m.classList.add("hidden")})),i.addEventListener("click",(function(){o.classList.remove("current"),i.classList.add("current"),n.classList.remove("current"),a.classList.remove("current"),s.classList.remove("current"),r.classList.add("hidden"),l.classList.remove("hidden"),c.classList.add("hidden"),d.classList.add("hidden"),m.classList.add("hidden")})),n.addEventListener("click",(function(){o.classList.remove("current"),i.classList.remove("current"),n.classList.add("current"),a.classList.remove("current"),s.classList.remove("current"),r.classList.add("hidden"),l.classList.add("hidden"),c.classList.remove("hidden"),d.classList.add("hidden"),m.classList.add("hidden"),document.querySelector(".dice-wrapper").style.opacity="100"})),a.addEventListener("click",(function(){o.classList.remove("current"),i.classList.remove("current"),n.classList.remove("current"),a.classList.add("current"),s.classList.remove("current"),r.classList.add("hidden"),l.classList.add("hidden"),c.classList.add("hidden"),d.classList.remove("hidden"),m.classList.add("hidden")})),s.addEventListener("click",(function(){o.classList.remove("current"),i.classList.remove("current"),n.classList.remove("current"),a.classList.remove("current"),s.classList.add("current"),r.classList.add("hidden"),l.classList.add("hidden"),c.classList.add("hidden"),d.classList.add("hidden"),m.classList.remove("hidden")}));const u=document.querySelector(".mobile-nav-menu__button--open"),f=document.querySelector(".mobile-nav-menu__button--close"),y=document.querySelector(".mobile-nav-menu__wrapper"),p=document.querySelector("#mobile-nav-number"),v=document.querySelector("#mobile-nav-yesno"),b=document.querySelector("#mobile-nav-dice"),x=document.querySelector("#mobile-nav-coin"),h=document.querySelector("#mobile-nav-password"),g=document.querySelector("#section-number"),L=document.querySelector("#section-yesno"),w=document.querySelector("#section-dice"),k=document.querySelector("#section-coin"),N=document.querySelector("#section-password"),q=document.querySelector('meta[name="theme-color"]');u.addEventListener("click",(function(){y.classList.add("is-open"),q.setAttribute("content","#6b48f2"),document.body.style.overflow="hidden",document.querySelector(".dice-wrapper").style.opacity="0"})),f.addEventListener("click",(function(){y.classList.remove("is-open"),q.setAttribute("content","#ffffff"),document.body.style.overflow="visible",document.querySelector(".dice-wrapper").style.opacity="100"})),p.addEventListener("click",(function(){p.classList.add("mobile-current"),v.classList.remove("mobile-current"),b.classList.remove("mobile-current"),x.classList.remove("mobile-current"),h.classList.remove("mobile-current"),g.classList.remove("hidden"),L.classList.add("hidden"),w.classList.add("hidden"),k.classList.add("hidden"),N.classList.add("hidden"),y.classList.remove("is-open"),q.setAttribute("content","#ffffff")})),v.addEventListener("click",(function(){p.classList.remove("mobile-current"),v.classList.add("mobile-current"),b.classList.remove("mobile-current"),x.classList.remove("mobile-current"),h.classList.remove("mobile-current"),g.classList.add("hidden"),L.classList.remove("hidden"),w.classList.add("hidden"),k.classList.add("hidden"),N.classList.add("hidden"),y.classList.remove("is-open"),q.setAttribute("content","#ffffff")})),b.addEventListener("click",(function(){p.classList.remove("mobile-current"),v.classList.remove("mobile-current"),b.classList.add("mobile-current"),x.classList.remove("mobile-current"),h.classList.remove("mobile-current"),g.classList.add("hidden"),L.classList.add("hidden"),w.classList.remove("hidden"),k.classList.add("hidden"),N.classList.add("hidden"),y.classList.remove("is-open"),q.setAttribute("content","#ffffff"),document.querySelector(".dice-wrapper").style.opacity="100"})),x.addEventListener("click",(function(){p.classList.remove("mobile-current"),v.classList.remove("mobile-current"),b.classList.remove("mobile-current"),x.classList.add("mobile-current"),h.classList.remove("mobile-current"),g.classList.add("hidden"),L.classList.add("hidden"),w.classList.add("hidden"),k.classList.remove("hidden"),N.classList.add("hidden"),y.classList.remove("is-open"),q.setAttribute("content","#ffffff")})),h.addEventListener("click",(function(){p.classList.remove("mobile-current"),v.classList.remove("mobile-current"),b.classList.remove("mobile-current"),x.classList.remove("mobile-current"),h.classList.add("mobile-current"),g.classList.add("hidden"),L.classList.add("hidden"),w.classList.add("hidden"),k.classList.add("hidden"),N.classList.remove("hidden"),y.classList.remove("is-open"),q.setAttribute("content","#ffffff")}));const S=document.querySelector("#random-from"),_=document.querySelector("#random-to"),z=document.querySelector("#random-amount"),E=document.querySelector("#sort-type"),A=document.querySelector("#duplicates-checkbox"),C=document.querySelector(".randomize__checkbox-label"),I={fromRemove:document.querySelector("#quantity--from-remove"),fromAdd:document.querySelector("#quantity--from-add"),toRemove:document.querySelector("#quantity--to-remove"),toAdd:document.querySelector("#quantity--to-add"),amountRemove:document.querySelector("#quantity--amount-remove"),amountAdd:document.querySelector("#quantity--amount-add")},D=document.querySelector("#amount-switcher"),W=document.querySelector(".amount-switcher--text"),T=document.querySelector("#amount-icon--down"),B=document.querySelector("#amount-icon--up"),O=document.querySelector(".randomize__multiple"),M=document.querySelector(".section__title"),R=document.querySelector(".appear-wrapper"),j=document.querySelector(".randomize__number-wrapper"),Y=document.querySelector(".randomize__number");let H=!1;function F(){return I.fromRemove.classList.remove("randomize__quantity"),I.fromRemove.classList.add("randomize__quantity--disabled"),I.fromRemove.disabled=!0}function X(){I.fromRemove.classList.add("randomize__quantity"),I.fromRemove.classList.remove("randomize__quantity--disabled"),I.fromRemove.disabled=!1}function G(){I.fromAdd.classList.remove("randomize__quantity"),I.fromAdd.classList.add("randomize__quantity--disabled"),I.fromAdd.disabled=!0}function P(){I.fromAdd.classList.add("randomize__quantity"),I.fromAdd.classList.remove("randomize__quantity--disabled"),I.fromAdd.disabled=!1}function Q(){return I.toRemove.classList.remove("randomize__quantity"),I.toRemove.classList.add("randomize__quantity--disabled"),I.toRemove.disabled=!0}function U(){I.toRemove.classList.add("randomize__quantity"),I.toRemove.classList.remove("randomize__quantity--disabled"),I.toRemove.disabled=!1}function V(){I.toAdd.classList.remove("randomize__quantity"),I.toAdd.classList.add("randomize__quantity--disabled"),I.toAdd.disabled=!0}function $(){I.toAdd.classList.add("randomize__quantity"),I.toAdd.classList.remove("randomize__quantity--disabled"),I.toAdd.disabled=!1}function J(){return I.amountRemove.classList.remove("randomize__quantity"),I.amountRemove.classList.add("randomize__quantity--disabled"),I.amountRemove.disabled=!0}function K(){I.amountRemove.classList.add("randomize__quantity"),I.amountRemove.classList.remove("randomize__quantity--disabled"),I.amountRemove.disabled=!1}function Z(){I.amountAdd.classList.remove("randomize__quantity"),I.amountAdd.classList.add("randomize__quantity--disabled"),I.amountAdd.disabled=!0}function ee(){I.amountAdd.classList.add("randomize__quantity"),I.amountAdd.classList.remove("randomize__quantity--disabled"),I.amountAdd.disabled=!1}D.addEventListener("click",(function(){H=!H,!0===H&&(R.classList.add("appear-wrapper--show"),j.classList.add("hidden"),Y.classList.add("randomize__number--multiple"),M.textContent="Generate random numbers",W.innerText="Single",T.classList.add("hidden-icon"),B.classList.remove("hidden-icon"),z.value=2,setTimeout((()=>{O.classList.remove("hidden-multiple")}),100));!1===H&&(O.classList.add("hidden-multiple"),j.classList.add("hidden"),Y.classList.remove("randomize__number--multiple"),M.textContent="Generate random number",W.innerText="Multiple",T.classList.remove("hidden-icon"),B.classList.add("hidden-icon"),setTimeout((()=>{R.classList.remove("appear-wrapper--show")}),100),setTimeout((()=>{z.value=1}),200))}));var te,oe,ie={};te=void 0!==e?e:"undefined"!=typeof window?window:ie,oe=function(e){if(void 0===e&&void 0===e.document)return!1;var t,o="Success",i="Failure",n="Warning",a="Info",s={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},r=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},l=function(t){return t||(t="head"),null!==e.document[t]||(r('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},c=function(){var e={},t=!1,o=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],o++);for(var i=function(o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t&&"[object Object]"===Object.prototype.toString.call(o[i])?e[i]=c(e[i],o[i]):e[i]=o[i])};o<arguments.length;o++)i(arguments[o]);return e},d=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},m=0,u=function(r,d,u,y){if(!l("body"))return!1;t||f.Notify.init({});var p=c(!0,t,{});if("object"==typeof u&&!Array.isArray(u)||"object"==typeof y&&!Array.isArray(y)){var v={};"object"==typeof u?v=u:"object"==typeof y&&(v=y),t=c(!0,t,v)}var b,x,h=t[r.toLocaleLowerCase("en")];m++,"string"!=typeof d&&(d="Notiflix "+r),t.plainText&&(b=d,(x=e.document.createElement("div")).innerHTML=b,d=x.textContent||x.innerText||""),!t.plainText&&d.length>t.messageMaxLength&&(t=c(!0,t,{closeButton:!0,messageMaxLength:150}),d='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),d.length>t.messageMaxLength&&(d=d.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(h.fontAwesomeIconColor=h.background),t.cssAnimation||(t.cssAnimationDuration=0);var g=e.document.getElementById(s.wrapID)||e.document.createElement("div");if(g.id=s.wrapID,g.style.width=t.width,g.style.zIndex=t.zindex,g.style.opacity=t.opacity,"center-center"===t.position?(g.style.left=t.distance,g.style.top=t.distance,g.style.right=t.distance,g.style.bottom=t.distance,g.style.margin="auto",g.classList.add("nx-flex-center-center"),g.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",g.style.display="flex",g.style.flexWrap="wrap",g.style.flexDirection="column",g.style.justifyContent="center",g.style.alignItems="center",g.style.pointerEvents="none"):"center-top"===t.position?(g.style.left=t.distance,g.style.right=t.distance,g.style.top=t.distance,g.style.bottom="auto",g.style.margin="auto"):"center-bottom"===t.position?(g.style.left=t.distance,g.style.right=t.distance,g.style.bottom=t.distance,g.style.top="auto",g.style.margin="auto"):"right-bottom"===t.position?(g.style.right=t.distance,g.style.bottom=t.distance,g.style.top="auto",g.style.left="auto"):"left-top"===t.position?(g.style.left=t.distance,g.style.top=t.distance,g.style.right="auto",g.style.bottom="auto"):"left-bottom"===t.position?(g.style.left=t.distance,g.style.bottom=t.distance,g.style.top="auto",g.style.right="auto"):(g.style.right=t.distance,g.style.top=t.distance,g.style.left="auto",g.style.bottom="auto"),t.backOverlay){var L=e.document.getElementById(s.overlayID)||e.document.createElement("div");L.id=s.overlayID,L.style.width="100%",L.style.height="100%",L.style.position="fixed",L.style.zIndex=t.zindex-1,L.style.left=0,L.style.top=0,L.style.right=0,L.style.bottom=0,L.style.background=h.backOverlayColor||t.backOverlayColor,L.className=t.cssAnimation?"nx-with-animation":"",L.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(s.overlayID)||e.document.body.appendChild(L)}e.document.getElementById(s.wrapID)||e.document.body.appendChild(g);var w=e.document.createElement("div");w.id=t.ID+"-"+m,w.className=t.className+" "+h.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof u?"nx-with-close-button":"")+" "+("function"==typeof u?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),w.style.fontSize=t.fontSize,w.style.color=h.textColor,w.style.background=h.background,w.style.borderRadius=t.borderRadius,w.style.pointerEvents="all",t.rtl&&(w.setAttribute("dir","rtl"),w.classList.add("nx-rtl-on")),w.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',t.cssAnimation&&(w.style.animationDuration=t.cssAnimationDuration+"ms");var k="";if(t.closeButton&&"function"!=typeof u&&(k='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+h.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)w.innerHTML='<i style="color:'+h.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+h.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+d+"</span>"+(t.closeButton?k:"");else{var N="";r===o?N='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':r===i?N='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':r===n?N='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':r===a&&(N='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),w.innerHTML=N+'<span class="nx-message nx-with-icon">'+d+"</span>"+(t.closeButton?k:"")}else w.innerHTML='<span class="nx-message">'+d+"</span>"+(t.closeButton?k:"");if("left-bottom"===t.position||"right-bottom"===t.position){var q=e.document.getElementById(s.wrapID);q.insertBefore(w,q.firstChild)}else e.document.getElementById(s.wrapID).appendChild(w);var S=e.document.getElementById(w.id);if(S){var _,z,E=function(){S.classList.add("nx-remove");var t=e.document.getElementById(s.overlayID);t&&g.childElementCount<=0&&t.classList.add("nx-remove"),clearTimeout(_)},A=function(){if(S&&null!==S.parentNode&&S.parentNode.removeChild(S),g.childElementCount<=0&&null!==g.parentNode){g.parentNode.removeChild(g);var t=e.document.getElementById(s.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(z)};if(t.closeButton&&"function"!=typeof u&&e.document.getElementById(w.id).querySelector("span.nx-close-button").addEventListener("click",(function(){E();var e=setTimeout((function(){A(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof u||t.clickToClose)&&S.addEventListener("click",(function(){"function"==typeof u&&u(),E();var e=setTimeout((function(){A(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof u){var C=function(){_=setTimeout((function(){E()}),t.timeout),z=setTimeout((function(){A()}),t.timeout+t.cssAnimationDuration)};C(),t.pauseOnHover&&(S.addEventListener("mouseenter",(function(){S.classList.add("nx-paused"),clearTimeout(_),clearTimeout(z)})),S.addEventListener("mouseleave",(function(){S.classList.remove("nx-paused"),C()})))}}if(t.showOnlyTheLastOne&&m>0)for(var I=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+m+"])"),D=0;D<I.length;D++){var W=I[D];null!==W.parentNode&&W.parentNode.removeChild(W)}t=c(!0,t,p)},f={Notify:{init:function(o){t=c(!0,s,o),function(t,o){if(!l("head"))return!1;if(null!==t()&&!e.document.getElementById(o)){var i=e.document.createElement("style");i.id=o,i.innerHTML=t(),e.document.head.appendChild(i)}}(d,"NotiflixNotifyInternalCSS")},merge:function(e){if(!t)return r("You have to initialize the Notify module before call Merge function."),!1;t=c(!0,t,e)},success:function(e,t,i){u(o,e,t,i)},failure:function(e,t,o){u(i,e,t,o)},warning:function(e,t,o){u(n,e,t,o)},info:function(e,t,o){u(a,e,t,o)}}};return"object"==typeof e.Notiflix?c(!0,e.Notiflix,{Notify:f.Notify}):{Notify:f.Notify}},"function"==typeof define&&define.amd?define([],(function(){return oe(te)})):"object"==typeof ie?ie=oe(te):te.Notiflix=oe(te);const ne=document.querySelector(".randomize__button--generate"),ae=document.querySelector(".randomize__button--reset"),se=document.querySelector(".randomize__number-wrapper"),re=document.querySelector(".randomize__number-text"),le=document.querySelector(".randomize__number");let ce=[];function de(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}function me(){le.textContent="0",se.classList.add("hidden"),S.value=1,_.value=10,z.value=H?2:1,E.value="1",document.querySelector(".js-fake-input").value="None",document.querySelector(".js-fake-input").classList.remove("sort--selected"),A.checked=!1,C.classList.remove("randomize__checkbox-label--on"),C.textContent="Off",X(),P(),U(),$(),J(),ee()}ne.addEventListener("click",(function(){(function(e,t,o){if(t-e<=0)return me(),ie.Notify.failure("Start value cannot be equal or greater than end value");1===(o=Math.floor(o))&&ce.push(de(e,t));if(o>1){if(A.checked)for(let i=0;i<o;i+=1)ce.push(de(e,t));else if(!A.checked){if(t-e+1-o<0)return me(),ie.Notify.failure("The amount of numbers cannot exceed the difference between the end and start values");for(let i=0;i<o;i+=1){let o,i=!0;for(;i;)o=de(e,t),i=ce.includes(o);ce.push(o)}}!function(e){"2"===E.value&&e.sort(((e,t)=>e-t));"3"===E.value&&e.sort(((e,t)=>t-e))}(ce)}se.classList.remove("hidden"),le.textContent=ce.join(", "),function(){if(ce.length>1)return re.textContent="Your numbers: ";re.textContent="Your number: "}()})(S.value,_.value,z.value),ce=[]})),ae.addEventListener("click",me);function ue(e){["e","E","+","-","."].includes(e.key)&&e.preventDefault()}I.fromRemove.addEventListener("click",(function(){S.value=Number(S.value)-1,0==S.value&&F();S.value<=9998&&P()})),I.fromAdd.addEventListener("click",(function(){S.value=Number(S.value)+1,S.value>=1&&X();9999==S.value&&G()})),I.toRemove.addEventListener("click",(function(){_.value=Number(_.value)-1,1==_.value&&Q();_.value<=9999&&$()})),I.toAdd.addEventListener("click",(function(){_.value=Number(_.value)+1,_.value>=2&&U();1e4==_.value&&V()})),I.amountRemove.addEventListener("click",(function(){z.value=Number(z.value)-1,2==z.value&&J();z.value<=99&&ee()})),I.amountAdd.addEventListener("click",(function(){z.value=Number(z.value)+1,z.value>=3&&K();100==z.value&&Z()})),S.addEventListener("change",(function(){S.value<=0&&(S.value=0,F(),P());S.value>=9999&&(S.value=9999,X(),G())})),_.addEventListener("change",(function(){_.value<=1&&(_.value=1,Q(),$());_.value>=1e4&&(_.value=1e4,U(),V())})),z.addEventListener("change",(function(){z.value<=2&&(z.value=2,J(),ee());z.value>=100&&(z.value=100,K(),Z())})),S.addEventListener("keydown",ue),_.addEventListener("keydown",ue),z.addEventListener("keydown",ue);const fe=document.getElementsByClassName("js-fake-input"),ye=document.getElementsByClassName("js-select"),pe=document.querySelector("#sort-type"),ve=document.querySelector(".js-fake-input");for(let e=0;e<fe.length;e++)be(e),ye[e].addEventListener("change",(function(){be(e)}));function be(e){fe[e].value=ye[e].options[ye[e].selectedIndex].text}pe.addEventListener("change",(function(){"None"===ve.value?ve.classList.remove("sort--selected"):ve.classList.add("sort--selected"),this.blur()})),A.addEventListener("click",(function(){A.checked?(C.classList.add("randomize__checkbox-label--on"),C.textContent="On"):A.checked||(C.classList.remove("randomize__checkbox-label--on"),C.textContent="Off")}));const xe=document.getElementById("wheel"),he=document.getElementById("spin-button"),ge=document.getElementById("final-value"),Le=[{minDegree:0,maxDegree:30,value:"NO"},{minDegree:31,maxDegree:90,value:"YES"},{minDegree:91,maxDegree:150,value:"NO"},{minDegree:151,maxDegree:210,value:"YES"},{minDegree:211,maxDegree:270,value:"NO"},{minDegree:271,maxDegree:330,value:"YES"},{minDegree:331,maxDegree:360,value:"NO"}];let we=new Chart(xe,{plugins:[ChartDataLabels],type:"pie",data:{labels:["YES","NO","YES","NO","YES","NO"],datasets:[{backgroundColor:["#c8bbf6","#EEEAFD","#c8bbf6","#EEEAFD","#c8bbf6","#EEEAFD"],hoverBackgroundColor:["#b09ff2","#ccc1f2","#b09ff2","#ccc1f2","#b09ff2","#ccc1f2"],data:[16,16,16,16,16,16]}]},options:{responsive:!0,animation:{duration:0},plugins:{tooltip:!1,legend:{display:!1},datalabels:{color:"#6b48f2",formatter:(e,t)=>t.chart.data.labels[t.dataIndex],font:{size:16}}}}}),ke=Number(document.querySelector(".yesno-statistics__yes-count").textContent),Ne=Number(document.querySelector(".yesno-statistics__no-count").textContent);let qe=0,Se=101;he.addEventListener("click",(()=>{he.disabled=!0,he.classList.remove("spin-button--enabled"),he.classList.add("spin-button--disabled"),ge.innerHTML="<p class='result-loading'>Good Luck!</p>";let e=Math.floor(356*Math.random()+0),t=window.setInterval((()=>{we.options.rotation=we.options.rotation+Se,we.update(),we.options.rotation>=360?(qe+=1,Se-=5,we.options.rotation=0):qe>15&&we.options.rotation==e&&((e=>{for(let t of Le)if(e>=t.minDegree&&e<=t.maxDegree){ge.innerHTML=`<p class='yesno-result'>${t.value}</p>`;let e=document.querySelector(".yesno-result").textContent;"YES"===e?(ke+=1,document.querySelector(".yesno-statistics__yes-count").textContent=ke):"NO"===e&&(Ne+=1,document.querySelector(".yesno-statistics__no-count").textContent=Ne),he.disabled=!1,he.classList.add("spin-button--enabled"),he.classList.remove("spin-button--disabled");break}})(e),clearInterval(t),qe=0,Se=101)}),10)}));const _e=document.querySelector(".dice"),ze=document.querySelector(".roll-button"),Ee=()=>{const e=Math.floor(10*Math.random());e>=1&&e<=6?Ae(e):Ee()},Ae=e=>{_e.style.animation="rolling 4s",ze.disabled=!0,ze.classList.remove("roll-button--enabled"),ze.classList.add("roll-button--disabled"),setTimeout((()=>{switch(e){case 1:console.log("1"),_e.style.transform="rotateX(0deg) rotateY(0deg)";break;case 6:console.log("6"),_e.style.transform="rotateX(180deg) rotateY(0deg)";break;case 2:console.log("2"),_e.style.transform="rotateX(-90deg) rotateY(0deg)";break;case 5:console.log("5"),_e.style.transform="rotateX(90deg) rotateY(0deg)";break;case 3:console.log("3"),_e.style.transform="rotateX(0deg) rotateY(90deg)";break;case 4:console.log("4"),_e.style.transform="rotateX(0deg) rotateY(-90deg)"}_e.style.animation="none",ze.disabled=!1,ze.classList.add("roll-button--enabled"),ze.classList.remove("roll-button--disabled")}),4050)};ze.addEventListener("click",Ee);
//# sourceMappingURL=index.eccf19bb.js.map
