(function(K){typeof define=="function"&&define.amd?define(K):K()})(function(){"use strict";var K=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Mt={exports:{}};(function(r){(function(o,f){var i=f(o,o.document,Date);o.lazySizes=i,r.exports&&(r.exports=i)})(typeof window<"u"?window:{},function(f,i,d){var l,t;if(function(){var a,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};t=f.lazySizesConfig||f.lazysizesConfig||{};for(a in n)a in t||(t[a]=n[a])}(),!i||!i.getElementsByClassName)return{init:function(){},cfg:t,noSupport:!0};var v=i.documentElement,O=f.HTMLPictureElement,x="addEventListener",z="getAttribute",b=f[x].bind(f),c=f.setTimeout,k=f.requestAnimationFrame||c,E=f.requestIdleCallback,N=/^picture$/i,L=["load","error","lazyincluded","_lazyloaded"],A={},G=Array.prototype.forEach,R=function(a,n){return A[n]||(A[n]=new RegExp("(\\s|^)"+n+"(\\s|$)")),A[n].test(a[z]("class")||"")&&A[n]},P=function(a,n){R(a,n)||a.setAttribute("class",(a[z]("class")||"").trim()+" "+n)},q=function(a,n){var u;(u=R(a,n))&&a.setAttribute("class",(a[z]("class")||"").replace(u," "))},p=function(a,n,u){var C=u?x:"removeEventListener";u&&p(a,n),L.forEach(function(S){a[C](S,n)})},W=function(a,n,u,C,S){var g=i.createEvent("Event");return u||(u={}),u.instance=l,g.initEvent(n,!C,!S),g.detail=u,a.dispatchEvent(g),g},U=function(a,n){var u;!O&&(u=f.picturefill||t.pf)?(n&&n.src&&!a[z]("srcset")&&a.setAttribute("srcset",n.src),u({reevaluate:!0,elements:[a]})):n&&n.src&&(a.src=n.src)},H=function(a,n){return(getComputedStyle(a,null)||{})[n]},Ot=function(a,n,u){for(u=u||a.offsetWidth;u<t.minSize&&n&&!a._lazysizesWidth;)u=n.offsetWidth,n=n.parentNode;return u},nt=function(){var a,n,u=[],C=[],S=u,g=function(){var h=S;for(S=u.length?C:u,a=!0,n=!1;h.length;)h.shift()();a=!1},$=function(h,m){a&&!m?h.apply(this,arguments):(S.push(h),n||(n=!0,(i.hidden?c:k)(g)))};return $._lsFlush=g,$}(),ct=function(a,n){return n?function(){nt(a)}:function(){var u=this,C=arguments;nt(function(){a.apply(u,C)})}},je=function(a){var n,u=0,C=t.throttleDelay,S=t.ricTimeout,g=function(){n=!1,u=d.now(),a()},$=E&&S>49?function(){E(g,{timeout:S}),S!==t.ricTimeout&&(S=t.ricTimeout)}:ct(function(){c(g)},!0);return function(h){var m;(h=h===!0)&&(S=33),!n&&(n=!0,m=C-(d.now()-u),m<0&&(m=0),h||m<9?$():c($,m))}},Nt=function(a){var n,u,C=99,S=function(){n=null,a()},g=function(){var $=d.now()-u;$<C?c(g,C-$):(E||S)(S)};return function(){u=d.now(),n||(n=c(g,C))}},Wt=function(){var a,n,u,C,S,g,$,h,m,I,B,Z,ke=/^img$/i,_e=/^iframe$/i,Ie="onscroll"in f&&!/(gle|ing)bot/.test(navigator.userAgent),we=0,at=0,F=0,et=-1,jt=function(e){F--,(!e||F<0||!e.target)&&(F=0)},kt=function(e){return Z==null&&(Z=H(i.body,"visibility")=="hidden"),Z||!(H(e.parentNode,"visibility")=="hidden"&&H(e,"visibility")=="hidden")},Re=function(e,s){var y,T=e,j=kt(e);for(h-=s,B+=s,m-=s,I+=s;j&&(T=T.offsetParent)&&T!=i.body&&T!=v;)j=(H(T,"opacity")||1)>0,j&&H(T,"overflow")!="visible"&&(y=T.getBoundingClientRect(),j=I>y.left&&m<y.right&&B>y.top-1&&h<y.bottom+1);return j},_t=function(){var e,s,y,T,j,_,V,X,Q,J,tt,rt,M=l.elements;if((C=t.loadMode)&&F<8&&(e=M.length)){for(s=0,et++;s<e;s++)if(!(!M[s]||M[s]._lazyRace)){if(!Ie||l.prematureUnveil&&l.prematureUnveil(M[s])){st(M[s]);continue}if((!(X=M[s][z]("data-expand"))||!(_=X*1))&&(_=at),J||(J=!t.expand||t.expand<1?v.clientHeight>500&&v.clientWidth>500?500:370:t.expand,l._defEx=J,tt=J*t.expFactor,rt=t.hFac,Z=null,at<tt&&F<1&&et>2&&C>2&&!i.hidden?(at=tt,et=0):C>1&&et>1&&F<6?at=J:at=we),Q!==_&&(g=innerWidth+_*rt,$=innerHeight+_,V=_*-1,Q=_),y=M[s].getBoundingClientRect(),(B=y.bottom)>=V&&(h=y.top)<=$&&(I=y.right)>=V*rt&&(m=y.left)<=g&&(B||I||m||h)&&(t.loadHidden||kt(M[s]))&&(n&&F<3&&!X&&(C<3||et<4)||Re(M[s],_))){if(st(M[s]),j=!0,F>9)break}else!j&&n&&!T&&F<4&&et<4&&C>2&&(a[0]||t.preloadAfterLoad)&&(a[0]||!X&&(B||I||m||h||M[s][z](t.sizesAttr)!="auto"))&&(T=a[0]||M[s])}T&&!j&&st(T)}},w=je(_t),It=function(e){var s=e.target;if(s._lazyCache){delete s._lazyCache;return}jt(e),P(s,t.loadedClass),q(s,t.loadingClass),p(s,wt),W(s,"lazyloaded")},Me=ct(It),wt=function(e){Me({target:e.target})},Pe=function(e,s){try{e.contentWindow.location.replace(s)}catch{e.src=s}},Ue=function(e){var s,y=e[z](t.srcsetAttr);(s=t.customMedia[e[z]("data-media")||e[z]("media")])&&e.setAttribute("media",s),y&&e.setAttribute("srcset",y)},Fe=ct(function(e,s,y,T,j){var _,V,X,Q,J,tt;(J=W(e,"lazybeforeunveil",s)).defaultPrevented||(T&&(y?P(e,t.autosizesClass):e.setAttribute("sizes",T)),V=e[z](t.srcsetAttr),_=e[z](t.srcAttr),j&&(X=e.parentNode,Q=X&&N.test(X.nodeName||"")),tt=s.firesLoad||"src"in e&&(V||_||Q),J={target:e},P(e,t.loadingClass),tt&&(clearTimeout(u),u=c(jt,2500),p(e,wt,!0)),Q&&G.call(X.getElementsByTagName("source"),Ue),V?e.setAttribute("srcset",V):_&&!Q&&(_e.test(e.nodeName)?Pe(e,_):e.src=_),j&&(V||Q)&&U(e,{src:_})),e._lazyRace&&delete e._lazyRace,q(e,t.lazyClass),nt(function(){var rt=e.complete&&e.naturalWidth>1;(!tt||rt)&&(rt&&P(e,"ls-is-cached"),It(J),e._lazyCache=!0,c(function(){"_lazyCache"in e&&delete e._lazyCache},9)),e.loading=="lazy"&&F--},!0)}),st=function(e){if(!e._lazyRace){var s,y=ke.test(e.nodeName),T=y&&(e[z](t.sizesAttr)||e[z]("sizes")),j=T=="auto";(j||!n)&&y&&(e[z]("src")||e.srcset)&&!e.complete&&!R(e,t.errorClass)&&R(e,t.lazyClass)||(s=W(e,"lazyunveilread").detail,j&&vt.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,F++,Fe(e,s,j,T,y))}},qe=Nt(function(){t.loadMode=3,w()}),Rt=function(){t.loadMode==3&&(t.loadMode=2),qe()},ft=function(){if(!n){if(d.now()-S<999){c(ft,999);return}n=!0,t.loadMode=3,w(),b("scroll",Rt,!0)}};return{_:function(){S=d.now(),l.elements=i.getElementsByClassName(t.lazyClass),a=i.getElementsByClassName(t.lazyClass+" "+t.preloadClass),b("scroll",w,!0),b("resize",w,!0),b("pageshow",function(e){if(e.persisted){var s=i.querySelectorAll("."+t.loadingClass);s.length&&s.forEach&&k(function(){s.forEach(function(y){y.complete&&st(y)})})}}),f.MutationObserver?new MutationObserver(w).observe(v,{childList:!0,subtree:!0,attributes:!0}):(v[x]("DOMNodeInserted",w,!0),v[x]("DOMAttrModified",w,!0),setInterval(w,999)),b("hashchange",w,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){i[x](e,w,!0)}),/d$|^c/.test(i.readyState)?ft():(b("load",ft),i[x]("DOMContentLoaded",w),c(ft,2e4)),l.elements.length?(_t(),nt._lsFlush()):w()},checkElems:w,unveil:st,_aLSL:Rt}}(),vt=function(){var a,n=ct(function(g,$,h,m){var I,B,Z;if(g._lazysizesWidth=m,m+="px",g.setAttribute("sizes",m),N.test($.nodeName||""))for(I=$.getElementsByTagName("source"),B=0,Z=I.length;B<Z;B++)I[B].setAttribute("sizes",m);h.detail.dataAttr||U(g,h.detail)}),u=function(g,$,h){var m,I=g.parentNode;I&&(h=Ot(g,I,h),m=W(g,"lazybeforesizes",{width:h,dataAttr:!!$}),m.defaultPrevented||(h=m.detail.width,h&&h!==g._lazysizesWidth&&n(g,I,m,h)))},C=function(){var g,$=a.length;if($)for(g=0;g<$;g++)u(a[g])},S=Nt(C);return{_:function(){a=i.getElementsByClassName(t.autosizesClass),b("resize",S)},checkElems:S,updateElem:u}}(),ut=function(){!ut.i&&i.getElementsByClassName&&(ut.i=!0,vt._(),Wt._())};return c(function(){t.init&&ut()}),l={cfg:t,autoSizer:vt,loader:Wt,init:ut,uP:U,aC:P,rC:q,hC:R,fire:W,gW:Ot,rAF:nt},l})})(Mt);const ot=function(){function r(i){let l=i.getAttribute("data-src"),t=i.getAttribute("data-height-ratio"),v=i.parentNode.innerWidth||i.parentNode.offsetWidth;if(v=v!==null?v+50-v%50:null,!t){var O=i.parentNode.innerHeight||i.parentNode.offsetHeight;O=O!==null?O+50-O%50:null,t=O/v}let x=v,z=x*t;l+=x?o(l)+"width="+x:"",l+=z!==null?o(l)+"height="+z:"";const b=i.getAttribute("data-query-obj");return l=f(l,b),l}function o(i){return i.indexOf("?")>-1?"&":"?"}function f(i,d){if(d){const l=JSON.parse(d);Object.keys(l).forEach(function(t){i+=l[t]!==null?o(i)+t+"="+l[t]:""})}return i}return{queryUrl:f,getUrl:r}};let dt=0;const pt=50,D=window.devicePixelRatio;class Pt{constructor({includeWebp:o=!0,includeRetina:f=!0}){this.includeWebp=o,this.includeRetina=f,this.lazyLoad=function(i){i.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})};const d=this.includeWebp,l=this.includeRetina,t=i.target,v=t.classList.contains("lazyload-measure")||t.classList.contains("lazyload-bg"),O=t.classList.contains("lazyload-measure"),x=t.hasAttribute("data-srcset")&&t.hasAttribute("data-query-obj"),z=t.hasAttribute("data-src")&&t.hasAttribute("data-query-obj");if(v&&i.preventDefault(),O){const b=t.classList.contains("lazyload-bg");let c=ot().getUrl(t);ht(function(k){if(k&&d&&(c=yt(c)),b&&l){const{orgWidth:E,orgHeight:N,retinaHeight:L,retinaWidth:A}=lt(c);t.parentNode.style.backgroundImage=`url(${c})`,window.CSS.supports("background-image",`-webkit-image-set( url(${c}) 1x, url(${Y({url:c,orgWidth:E,orgHeight:N,retinaHeight:L,retinaWidth:A})}) ${D}x)`)&&(t.parentNode.style.backgroundImage=`-webkit-image-set( url(${c}) 1x, url(${Y({url:c,orgWidth:E,orgHeight:N,retinaHeight:L,retinaWidth:A})}) ${D}x)`),window.CSS.supports("background-image",`image-set(url("${c}") 1x, url(${Y({url:c,orgWidth:E,orgHeight:N,retinaHeight:L,retinaWidth:A})}) ${D}x)`)&&(t.parentNode.style.backgroundImage=`image-set(url("${c}") 1x, url(${Y({url:c,orgWidth:E,orgHeight:N,retinaHeight:L,retinaWidth:A})}) ${D}x)`),t.style.visibility="hidden"}else if(b)t.parentNode.style.backgroundImage=`url(${c})`,t.style.visibility="hidden";else if(t.src=c,l){const{orgWidth:E,orgHeight:N,retinaHeight:L,retinaWidth:A}=lt(c);(E||N)&&t.setAttribute("srcset",`${c} 1x, ${Y({url:c,orgWidth:E,orgHeight:N,retinaHeight:L,retinaWidth:A})} ${D}x`)}})}else if(x){const b=t.getAttribute("data-query-obj"),c=t.getAttribute("data-srcset").split(","),k=t.getAttribute("data-src"),E=[];ht(function(N){c.forEach(function(L){L=L.trim(),L=L.split(" ");let A=L[0];const G=L[1];let R=ot().queryUrl(A,b);if(N&&d&&(R=yt(R)),E.push(R+" "+G),l){const P=G.match(/\d+/g),{orgWidth:q,orgHeight:p,retinaHeight:W,retinaWidth:U}=lt(R),H=P?G.replace(P,(Number(P)*D).toString()):G;(q||p)&&E.push(`${Y({url:A,orgWidth:q,orgHeight:p,retinaHeight:W,retinaWidth:U})} ${H}`)}}),t.setAttribute("srcset",E.join(", ")),t.setAttribute("src",ot().queryUrl(k,b))})}else if(z){const b=t.getAttribute("data-query-obj"),c=t.getAttribute("data-src"),k=ot().queryUrl(c,b);if(l){const{orgWidth:E,orgHeight:N,retinaHeight:L,retinaWidth:A}=lt(k);(E||N)&&t.setAttribute("srcset",`${k} 1x, ${Y({url:k,orgWidth:E,orgHeight:N,retinaHeight:L,retinaWidth:A})} ${D}x`)}t.setAttribute("src",k)}},this.checkImages=function(){if(window.innerWidth>dt+pt||window.innerWidth<dt-pt){let i=Array.prototype.slice.call(document.body.querySelectorAll(".lazyloaded"));i.length>0&&i.map(function(d){d.classList.remove("lazyloaded"),d.classList.add("lazyload")}),dt=window.innerWidth}}}}function ht(r){const o=new Image;o.src="data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA",o.onload=o.onerror=function(){r(o.height===2)}}function lt(r){const o=new URL(r);let f=new URLSearchParams(o.search);const i=f.get("width"),d=f.get("height"),l=i&&(Number(i)*D).toString(),t=d&&(Number(d)*D).toString();return{orgWidth:i,orgHeight:d,retinaWidth:l,retinaHeight:t}}function Y({url:r,orgWidth:o,orgHeight:f,retinaHeight:i,retinaWidth:d}){return r.replace(o,d).replace(f,i)}function yt(r){if(r.includes("format="))return r;const o=r.split("?");return`${o[0]}?format=webp&${o[1]}`}function Ut(r){var o=typeof r;return r!=null&&(o=="object"||o=="function")}var bt=Ut,Ft=typeof K=="object"&&K&&K.Object===Object&&K,qt=Ft,Ht=qt,Bt=typeof self=="object"&&self&&self.Object===Object&&self,Dt=Ht||Bt||Function("return this")(),mt=Dt,Gt=mt,Vt=function(){return Gt.Date.now()},Xt=Vt,Jt=mt,Qt=Jt.Symbol,zt=Qt,St=zt,At=Object.prototype,Kt=At.hasOwnProperty,Yt=At.toString,it=St?St.toStringTag:void 0;function Zt(r){var o=Kt.call(r,it),f=r[it];try{r[it]=void 0;var i=!0}catch{}var d=Yt.call(r);return i&&(o?r[it]=f:delete r[it]),d}var te=Zt,ee=Object.prototype,re=ee.toString;function ie(r){return re.call(r)}var ne=ie,Ct=zt,ae=te,se=ne,oe="[object Null]",le="[object Undefined]",Et=Ct?Ct.toStringTag:void 0;function ce(r){return r==null?r===void 0?le:oe:Et&&Et in Object(r)?ae(r):se(r)}var ue=ce;function fe(r){return r!=null&&typeof r=="object"}var de=fe,ge=ue,ve=de,pe="[object Symbol]";function he(r){return typeof r=="symbol"||ve(r)&&ge(r)==pe}var ye=he,Lt=bt,be=ye,$t=0/0,me=/^\s+|\s+$/g,ze=/^[-+]0x[0-9a-f]+$/i,Se=/^0b[01]+$/i,Ae=/^0o[0-7]+$/i,Ce=parseInt;function Ee(r){if(typeof r=="number")return r;if(be(r))return $t;if(Lt(r)){var o=typeof r.valueOf=="function"?r.valueOf():r;r=Lt(o)?o+"":o}if(typeof r!="string")return r===0?r:+r;r=r.replace(me,"");var f=Se.test(r);return f||Ae.test(r)?Ce(r.slice(2),f?2:8):ze.test(r)?$t:+r}var Le=Ee,$e=bt,gt=Xt,xt=Le,xe="Expected a function",Te=Math.max,Oe=Math.min;function Ne(r,o,f){var i,d,l,t,v,O,x=0,z=!1,b=!1,c=!0;if(typeof r!="function")throw new TypeError(xe);o=xt(o)||0,$e(f)&&(z=!!f.leading,b="maxWait"in f,l=b?Te(xt(f.maxWait)||0,o):l,c="trailing"in f?!!f.trailing:c);function k(p){var W=i,U=d;return i=d=void 0,x=p,t=r.apply(U,W),t}function E(p){return x=p,v=setTimeout(A,o),z?k(p):t}function N(p){var W=p-O,U=p-x,H=o-W;return b?Oe(H,l-U):H}function L(p){var W=p-O,U=p-x;return O===void 0||W>=o||W<0||b&&U>=l}function A(){var p=gt();if(L(p))return G(p);v=setTimeout(A,N(p))}function G(p){return v=void 0,c&&i?k(p):(i=d=void 0,t)}function R(){v!==void 0&&clearTimeout(v),x=0,i=O=d=v=void 0}function P(){return v===void 0?t:G(gt())}function q(){var p=gt(),W=L(p);if(i=arguments,d=this,O=p,W){if(v===void 0)return E(O);if(b)return clearTimeout(v),v=setTimeout(A,o),k(O)}return v===void 0&&(v=setTimeout(A,o)),t}return q.cancel=R,q.flush=P,q}var We=Ne;const Tt=new Pt({includeWebp:!0});document.addEventListener("lazybeforeunveil",function(r){Tt.lazyLoad(r)},!0),window.addEventListener("resize",function(){We(Tt.checkImages())},100,!1)});
