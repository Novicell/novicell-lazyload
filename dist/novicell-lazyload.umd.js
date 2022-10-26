(function(rt,O){typeof exports=="object"&&typeof module<"u"?module.exports=O():typeof define=="function"&&define.amd?define(O):(rt=typeof globalThis<"u"?globalThis:rt||self,rt.LazyImages=O())})(this,function(){"use strict";var rt={exports:{}};(function(L){(function(v,d){var i=d(v,v.document,Date);v.lazySizes=i,L.exports&&(L.exports=i)})(typeof window<"u"?window:{},function(d,i,g){var u,t;if(function(){var a,r={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};t=d.lazySizesConfig||d.lazysizesConfig||{};for(a in r)a in t||(t[a]=r[a])}(),!i||!i.getElementsByClassName)return{init:function(){},cfg:t,noSupport:!0};var N=i.documentElement,P=d.HTMLPictureElement,I="addEventListener",b="getAttribute",C=d[I].bind(d),o=d.setTimeout,w=d.requestAnimationFrame||o,m=d.requestIdleCallback,W=/^picture$/i,E=["load","error","lazyincluded","_lazyloaded"],S={},Y=Array.prototype.forEach,q=function(a,r){return S[r]||(S[r]=new RegExp("(\\s|^)"+r+"(\\s|$)")),S[r].test(a[b]("class")||"")&&S[r]},F=function(a,r){q(a,r)||a.setAttribute("class",(a[b]("class")||"").trim()+" "+r)},K=function(a,r){var s;(s=q(a,r))&&a.setAttribute("class",(a[b]("class")||"").replace(s," "))},Z=function(a,r,s){var y=s?I:"removeEventListener";s&&Z(a,r),E.forEach(function(p){a[y](p,r)})},J=function(a,r,s,y,p){var l=i.createEvent("Event");return s||(s={}),s.instance=u,l.initEvent(r,!y,!p),l.detail=s,a.dispatchEvent(l),l},at=function(a,r){var s;!P&&(s=d.picturefill||t.pf)?(r&&r.src&&!a[b]("srcset")&&a.setAttribute("srcset",r.src),s({reevaluate:!0,elements:[a]})):r&&r.src&&(a.src=r.src)},Q=function(a,r){return(getComputedStyle(a,null)||{})[r]},pt=function(a,r,s){for(s=s||a.offsetWidth;s<t.minSize&&r&&!a._lazysizesWidth;)s=r.offsetWidth,r=r.parentNode;return s},it=function(){var a,r,s=[],y=[],p=s,l=function(){var c=p;for(p=s.length?y:s,a=!0,r=!1;c.length;)c.shift()();a=!1},z=function(c,h){a&&!h?c.apply(this,arguments):(p.push(c),r||(r=!0,(i.hidden?o:w)(l)))};return z._lsFlush=l,z}(),lt=function(a,r){return r?function(){it(a)}:function(){var s=this,y=arguments;it(function(){a.apply(s,y)})}},Lt=function(a){var r,s=0,y=t.throttleDelay,p=t.ricTimeout,l=function(){r=!1,s=g.now(),a()},z=m&&p>49?function(){m(l,{timeout:p}),p!==t.ricTimeout&&(p=t.ricTimeout)}:lt(function(){o(l)},!0);return function(c){var h;(c=c===!0)&&(p=33),!r&&(r=!0,h=y-(g.now()-s),h<0&&(h=0),c||h<9?z():o(z,h))}},yt=function(a){var r,s,y=99,p=function(){r=null,a()},l=function(){var z=g.now()-s;z<y?o(l,y-z):(m||p)(p)};return function(){s=g.now(),r||(r=o(l,y))}},bt=function(){var a,r,s,y,p,l,z,c,h,R,H,X,Nt=/^img$/i,Wt=/^iframe$/i,$t="onscroll"in d&&!/(gle|ing)bot/.test(navigator.userAgent),Rt=0,nt=0,M=0,tt=-1,zt=function(e){M--,(!e||M<0||!e.target)&&(M=0)},mt=function(e){return X==null&&(X=Q(i.body,"visibility")=="hidden"),X||!(Q(e.parentNode,"visibility")=="hidden"&&Q(e,"visibility")=="hidden")},_t=function(e,n){var f,A=e,x=mt(e);for(c-=n,H+=n,h-=n,R+=n;x&&(A=A.offsetParent)&&A!=i.body&&A!=N;)x=(Q(A,"opacity")||1)>0,x&&Q(A,"overflow")!="visible"&&(f=A.getBoundingClientRect(),x=R>f.left&&h<f.right&&H>f.top-1&&c<f.bottom+1);return x},At=function(){var e,n,f,A,x,$,T,B,D,j,G,et,U=u.elements;if((y=t.loadMode)&&M<8&&(e=U.length)){for(n=0,tt++;n<e;n++)if(!(!U[n]||U[n]._lazyRace)){if(!$t||u.prematureUnveil&&u.prematureUnveil(U[n])){st(U[n]);continue}if((!(B=U[n][b]("data-expand"))||!($=B*1))&&($=nt),j||(j=!t.expand||t.expand<1?N.clientHeight>500&&N.clientWidth>500?500:370:t.expand,u._defEx=j,G=j*t.expFactor,et=t.hFac,X=null,nt<G&&M<1&&tt>2&&y>2&&!i.hidden?(nt=G,tt=0):y>1&&tt>1&&M<6?nt=j:nt=Rt),D!==$&&(l=innerWidth+$*et,z=innerHeight+$,T=$*-1,D=$),f=U[n].getBoundingClientRect(),(H=f.bottom)>=T&&(c=f.top)<=z&&(R=f.right)>=T*et&&(h=f.left)<=l&&(H||R||h||c)&&(t.loadHidden||mt(U[n]))&&(r&&M<3&&!B&&(y<3||tt<4)||_t(U[n],$))){if(st(U[n]),x=!0,M>9)break}else!x&&r&&!A&&M<4&&tt<4&&y>2&&(a[0]||t.preloadAfterLoad)&&(a[0]||!B&&(H||R||h||c||U[n][b](t.sizesAttr)!="auto"))&&(A=a[0]||U[n])}A&&!x&&st(A)}},_=Lt(At),Ct=function(e){var n=e.target;if(n._lazyCache){delete n._lazyCache;return}zt(e),F(n,t.loadedClass),K(n,t.loadingClass),Z(n,Et),J(n,"lazyloaded")},It=lt(Ct),Et=function(e){It({target:e.target})},Ut=function(e,n){try{e.contentWindow.location.replace(n)}catch{e.src=n}},wt=function(e){var n,f=e[b](t.srcsetAttr);(n=t.customMedia[e[b]("data-media")||e[b]("media")])&&e.setAttribute("media",n),f&&e.setAttribute("srcset",f)},Mt=lt(function(e,n,f,A,x){var $,T,B,D,j,G;(j=J(e,"lazybeforeunveil",n)).defaultPrevented||(A&&(f?F(e,t.autosizesClass):e.setAttribute("sizes",A)),T=e[b](t.srcsetAttr),$=e[b](t.srcAttr),x&&(B=e.parentNode,D=B&&W.test(B.nodeName||"")),G=n.firesLoad||"src"in e&&(T||$||D),j={target:e},F(e,t.loadingClass),G&&(clearTimeout(s),s=o(zt,2500),Z(e,Et,!0)),D&&Y.call(B.getElementsByTagName("source"),wt),T?e.setAttribute("srcset",T):$&&!D&&(Wt.test(e.nodeName)?Ut(e,$):e.src=$),x&&(T||D)&&at(e,{src:$})),e._lazyRace&&delete e._lazyRace,K(e,t.lazyClass),it(function(){var et=e.complete&&e.naturalWidth>1;(!G||et)&&(et&&F(e,"ls-is-cached"),Ct(j),e._lazyCache=!0,o(function(){"_lazyCache"in e&&delete e._lazyCache},9)),e.loading=="lazy"&&M--},!0)}),st=function(e){if(!e._lazyRace){var n,f=Nt.test(e.nodeName),A=f&&(e[b](t.sizesAttr)||e[b]("sizes")),x=A=="auto";(x||!r)&&f&&(e[b]("src")||e.srcset)&&!e.complete&&!q(e,t.errorClass)&&q(e,t.lazyClass)||(n=J(e,"lazyunveilread").detail,x&&ft.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,M++,Mt(e,n,x,A,f))}},kt=yt(function(){t.loadMode=3,_()}),St=function(){t.loadMode==3&&(t.loadMode=2),kt()},ct=function(){if(!r){if(g.now()-p<999){o(ct,999);return}r=!0,t.loadMode=3,_(),C("scroll",St,!0)}};return{_:function(){p=g.now(),u.elements=i.getElementsByClassName(t.lazyClass),a=i.getElementsByClassName(t.lazyClass+" "+t.preloadClass),C("scroll",_,!0),C("resize",_,!0),C("pageshow",function(e){if(e.persisted){var n=i.querySelectorAll("."+t.loadingClass);n.length&&n.forEach&&w(function(){n.forEach(function(f){f.complete&&st(f)})})}}),d.MutationObserver?new MutationObserver(_).observe(N,{childList:!0,subtree:!0,attributes:!0}):(N[I]("DOMNodeInserted",_,!0),N[I]("DOMAttrModified",_,!0),setInterval(_,999)),C("hashchange",_,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){i[I](e,_,!0)}),/d$|^c/.test(i.readyState)?ct():(C("load",ct),i[I]("DOMContentLoaded",_),o(ct,2e4)),u.elements.length?(At(),it._lsFlush()):_()},checkElems:_,unveil:st,_aLSL:St}}(),ft=function(){var a,r=lt(function(l,z,c,h){var R,H,X;if(l._lazysizesWidth=h,h+="px",l.setAttribute("sizes",h),W.test(z.nodeName||""))for(R=z.getElementsByTagName("source"),H=0,X=R.length;H<X;H++)R[H].setAttribute("sizes",h);c.detail.dataAttr||at(l,c.detail)}),s=function(l,z,c){var h,R=l.parentNode;R&&(c=pt(l,R,c),h=J(l,"lazybeforesizes",{width:c,dataAttr:!!z}),h.defaultPrevented||(c=h.detail.width,c&&c!==l._lazysizesWidth&&r(l,R,h,c)))},y=function(){var l,z=a.length;if(z)for(l=0;l<z;l++)s(a[l])},p=yt(y);return{_:function(){a=i.getElementsByClassName(t.autosizesClass),C("resize",p)},checkElems:p,updateElem:s}}(),ut=function(){!ut.i&&i.getElementsByClassName&&(ut.i=!0,ft._(),bt._())};return o(function(){t.init&&ut()}),u={cfg:t,autoSizer:ft,loader:bt,init:ut,uP:at,aC:F,rC:K,hC:q,fire:J,gW:pt,rAF:it},u})})(rt);const O=function(){function L(i){let u=i.getAttribute("data-src"),t=i.getAttribute("data-height-ratio"),N=i.parentNode.innerWidth||i.parentNode.offsetWidth;if(N=N!==null?N+50-N%50:null,!t){var P=i.parentNode.innerHeight||i.parentNode.offsetHeight;P=P!==null?P+50-P%50:null,t=P/N}let I=N,b=I*t;u+=I?v(u)+"width="+I:"",u+=b!==null?v(u)+"height="+b:"";const C=i.getAttribute("data-query-obj");return u=d(u,C),u}function v(i){return i.indexOf("?")>-1?"&":"?"}function d(i,g){if(g){const u=JSON.parse(g);Object.keys(u).forEach(function(t){i+=u[t]!==null?v(i)+t+"="+u[t]:""})}return i}return{queryUrl:d,getUrl:L}};let dt=0;const vt=50,k=window.devicePixelRatio;class xt{constructor({includeWebp:v=!0,includeRetina:d=!0}){this.includeWebp=v,this.includeRetina=d,this.lazyLoad=function(i){i.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})};const g=this.includeWebp,u=this.includeRetina&&k>1,t=i.target,N=t.classList.contains("lazyload-measure")||t.classList.contains("lazyload-bg"),P=t.classList.contains("lazyload-measure"),I=t.hasAttribute("data-srcset")&&t.hasAttribute("data-query-obj"),b=t.hasAttribute("data-src")&&t.hasAttribute("data-query-obj");if(N&&i.preventDefault(),P){const C=t.classList.contains("lazyload-bg");let o=O().getUrl(t);gt(function(w){if(w&&g&&(o=ht(o)),C&&u){const{orgWidth:m,orgHeight:W,retinaHeight:E,retinaWidth:S}=ot(o);t.parentNode.style.backgroundImage=`url(${o})`,window.CSS.supports("background-image",`-webkit-image-set( url(${o}) 1x, url(${V({url:o,orgWidth:m,orgHeight:W,retinaHeight:E,retinaWidth:S})}) ${k}x)`)&&(t.parentNode.style.backgroundImage=`-webkit-image-set( url(${o}) 1x, url(${V({url:o,orgWidth:m,orgHeight:W,retinaHeight:E,retinaWidth:S})}) ${k}x)`),window.CSS.supports("background-image",`image-set(url("${o}") 1x, url(${V({url:o,orgWidth:m,orgHeight:W,retinaHeight:E,retinaWidth:S})}) ${k}x)`)&&(t.parentNode.style.backgroundImage=`image-set(url("${o}") 1x, url(${V({url:o,orgWidth:m,orgHeight:W,retinaHeight:E,retinaWidth:S})}) ${k}x)`),t.style.visibility="hidden"}else if(C)t.parentNode.style.backgroundImage=`url(${o})`,t.style.visibility="hidden";else if(t.src=o,u){const{orgWidth:m,orgHeight:W,retinaHeight:E,retinaWidth:S}=ot(o);(m||W)&&t.setAttribute("srcset",`${o} 1x, ${V({url:o,orgWidth:m,orgHeight:W,retinaHeight:E,retinaWidth:S})} ${k}x`)}})}else if(I){const C=t.getAttribute("data-query-obj"),o=t.getAttribute("data-srcset").split(","),w=t.getAttribute("data-src"),m=[];gt(function(W){o.forEach(function(E){E=E.trim(),E=E.split(" ");let S=E[0];const Y=E[1];let q=O().queryUrl(S,C);if(W&&g&&(q=ht(q)),m.push(q+" "+Y),u){const F=Y.match(/\d+/g),{orgWidth:K,orgHeight:Z,retinaHeight:J,retinaWidth:at}=ot(q),Q=typeof Number(F)=="number"?Y.replace(F,(Number(F)*k).toString()):Y;(K||Z)&&m.push(`${V({url:S,orgWidth:K,orgHeight:Z,retinaHeight:J,retinaWidth:at})} ${Q}`)}}),t.setAttribute("srcset",m.join(", ")),t.setAttribute("src",O().queryUrl(w,C))})}else if(b){const C=t.getAttribute("data-query-obj"),o=t.getAttribute("data-src"),w=O().queryUrl(o,C);if(u){const{orgWidth:m,orgHeight:W,retinaHeight:E,retinaWidth:S}=ot(w);(m||W)&&t.setAttribute("srcset",`${w} 1x, ${V({url:w,orgWidth:m,orgHeight:W,retinaHeight:E,retinaWidth:S})} ${k}x`)}t.setAttribute("src",w)}},this.checkImages=function(){if(window.innerWidth>dt+vt||window.innerWidth<dt-vt){let i=Array.prototype.slice.call(document.body.querySelectorAll(".lazyloaded"));i.length>0&&i.map(function(g){g.classList.remove("lazyloaded"),g.classList.add("lazyload")}),dt=window.innerWidth}}}}function gt(L){const v=new Image;v.src="data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA",v.onload=v.onerror=function(){L(v.height===2)}}function ot(L){let v="",d=new URLSearchParams("");try{v=new URL(L),d=new URLSearchParams(v.search)}catch{}const i=d.get("width"),g=d.get("height"),u=typeof Number(i)=="number"?(Number(i)*k).toString():i,t=typeof Number(g)=="number"?(Number(g)*k).toString():g;return{orgWidth:i,orgHeight:g,retinaWidth:u,retinaHeight:t}}function V({url:L,orgWidth:v,orgHeight:d,retinaHeight:i,retinaWidth:g}){return L.replace(v,g).replace(d,i)}function ht(L){if(L.includes("format="))return L;const v=L.split("?");return`${v[0]}?format=webp&${v[1]}`}return xt});
