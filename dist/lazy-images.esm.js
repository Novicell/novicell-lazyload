(function(t){!function(e,i){var a=function(t,e){if(!e.getElementsByClassName)return;var i,a,n=e.documentElement,r=t.Date,s=t.HTMLPictureElement,o=t.addEventListener,l=t.setTimeout,u=t.requestAnimationFrame||l,d=t.requestIdleCallback,c=/^picture$/i,f=["load","error","lazyincluded","_lazyloaded"],g={},y=Array.prototype.forEach,m=function(t,e){return g[e]||(g[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),g[e].test(t.getAttribute("class")||"")&&g[e]},b=function(t,e){m(t,e)||t.setAttribute("class",(t.getAttribute("class")||"").trim()+" "+e)},h=function(t,e){var i;(i=m(t,e))&&t.setAttribute("class",(t.getAttribute("class")||"").replace(i," "))},v=function t(e,i,a){var n=a?"addEventListener":"removeEventListener";a&&t(e,i),f.forEach(function(t){e[n](t,i)})},A=function(t,a,n,r,s){var o=e.createEvent("CustomEvent");return n||(n={}),n.instance=i,o.initCustomEvent(a,!r,!s,n),t.dispatchEvent(o),o},z=function(e,i){var n;!s&&(n=t.picturefill||a.pf)?n({reevaluate:!0,elements:[e]}):i&&i.src&&(e.src=i.src)},p=function(t,e){return(getComputedStyle(t,null)||{})[e]},C=function(t,e,i){for(i=i||t.offsetWidth;i<a.minSize&&e&&!t._lazysizesWidth;)i=e.offsetWidth,e=e.parentNode;return i},w=(W=[],x=[],S=W,_=function(){var t=S;for(S=W.length?x:W,L=!0,M=!1;t.length;)t.shift()();L=!1},q=function(t,i){L&&!i?t.apply(this,arguments):(S.push(t),M||(M=!0,(e.hidden?l:u)(_)))},q._lsFlush=_,q),E=function(t,e){return e?function(){w(t)}:function(){var e=this,i=arguments;w(function(){t.apply(e,i)})}},N=function(t){var e,i,a=function(){e=null,t()},n=function t(){var e=r.now()-i;e<99?l(t,99-e):(d||a)(a)};return function(){i=r.now(),e||(e=l(n,99))}};var L,M,W,x,S,_,q;!function(){var e,i={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:300};for(e in a=t.lazySizesConfig||t.lazysizesConfig||{},i)e in a||(a[e]=i[e]);t.lazySizesConfig=a,l(function(){a.init&&k()})}();var T=function(){var s,u,f,g,C,L,M,W,x,S,_,q,T,k,B,R,H,O,U,F,P=/^img$/i,D=/^iframe$/i,I="onscroll"in t&&!/glebot/.test(navigator.userAgent),$=0,J=0,X=-1,G=function t(e){J--,e&&e.target&&v(e.target,t),(!e||J<0||!e.target)&&(J=0)},Q=function(t,i){var a,r=t,s="hidden"==p(e.body,"visibility")||"hidden"!=p(t,"visibility");for(W-=i,_+=i,x-=i,S+=i;s&&(r=r.offsetParent)&&r!=e.body&&r!=n;)(s=(p(r,"opacity")||1)>0)&&"visible"!=p(r,"overflow")&&(a=r.getBoundingClientRect(),s=S>a.left&&x<a.right&&_>a.top-1&&W<a.bottom+1);return s},V=function(){var t,r,o,l,d,c,f,y,m,b=i.elements;if((g=a.loadMode)&&J<8&&(t=b.length)){r=0,X++,null==T&&("expand"in a||(a.expand=n.clientHeight>500&&n.clientWidth>500?500:370),q=a.expand,T=q*a.expFactor),$<T&&J<1&&X>2&&g>2&&!e.hidden?($=T,X=0):$=g>1&&X>1&&J<6?q:0;for(;r<t;r++)if(b[r]&&!b[r]._lazyRace)if(I)if((y=b[r].getAttribute("data-expand"))&&(c=1*y)||(c=$),m!==c&&(L=innerWidth+c*k,M=innerHeight+c,f=-1*c,m=c),o=b[r].getBoundingClientRect(),(_=o.bottom)>=f&&(W=o.top)<=M&&(S=o.right)>=f*k&&(x=o.left)<=L&&(_||S||x||W)&&(a.loadHidden||"hidden"!=p(b[r],"visibility"))&&(u&&J<3&&!y&&(g<3||X<4)||Q(b[r],c))){if(at(b[r]),d=!0,J>9)break}else!d&&u&&!l&&J<4&&X<4&&g>2&&(s[0]||a.preloadAfterLoad)&&(s[0]||!y&&(_||S||x||W||"auto"!=b[r].getAttribute(a.sizesAttr)))&&(l=s[0]||b[r]);else at(b[r]);l&&!d&&at(l)}},Y=(B=V,H=0,O=a.ricTimeout,U=function(){R=!1,H=r.now(),B()},F=d&&a.ricTimeout?function(){d(U,{timeout:O}),O!==a.ricTimeout&&(O=a.ricTimeout)}:E(function(){l(U)},!0),function(t){var e;(t=!0===t)&&(O=33),R||(R=!0,(e=125-(r.now()-H))<0&&(e=0),t||e<9&&d?F():l(F,e))}),K=function(t){b(t.target,a.loadedClass),h(t.target,a.loadingClass),v(t.target,tt),A(t.target,"lazyloaded")},Z=E(K),tt=function(t){Z({target:t.target})},et=function(t){var e,i=t.getAttribute(a.srcsetAttr);(e=a.customMedia[t.getAttribute("data-media")||t.getAttribute("media")])&&t.setAttribute("media",e),i&&t.setAttribute("srcset",i)},it=E(function(t,e,i,n,r){var s,o,u,d,g,m;(g=A(t,"lazybeforeunveil",e)).defaultPrevented||(n&&(i?b(t,a.autosizesClass):t.setAttribute("sizes",n)),o=t.getAttribute(a.srcsetAttr),s=t.getAttribute(a.srcAttr),r&&(u=t.parentNode,d=u&&c.test(u.nodeName||"")),m=e.firesLoad||"src"in t&&(o||s||d),g={target:t},m&&(v(t,G,!0),clearTimeout(f),f=l(G,2500),b(t,a.loadingClass),v(t,tt,!0)),d&&y.call(u.getElementsByTagName("source"),et),o?t.setAttribute("srcset",o):s&&!d&&(D.test(t.nodeName)?function(t,e){try{t.contentWindow.location.replace(e)}catch(i){t.src=e}}(t,s):t.src=s),r&&(o||d)&&z(t,{src:s})),t._lazyRace&&delete t._lazyRace,h(t,a.lazyClass),w(function(){(!m||t.complete&&t.naturalWidth>1)&&(m?G(g):J--,K(g))},!0)}),at=function(t){var e,i=P.test(t.nodeName),n=i&&(t.getAttribute(a.sizesAttr)||t.getAttribute("sizes")),r="auto"==n;(!r&&u||!i||!t.getAttribute("src")&&!t.srcset||t.complete||m(t,a.errorClass)||!m(t,a.lazyClass))&&(e=A(t,"lazyunveilread").detail,r&&j.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,J++,it(t,e,r,n,i))},nt=function t(){if(!u)if(r.now()-C<999)l(t,999);else{var e=N(function(){a.loadMode=3,Y()});u=!0,a.loadMode=3,Y(),o("scroll",function(){3==a.loadMode&&(a.loadMode=2),e()},!0)}};return{_:function(){C=r.now(),i.elements=e.getElementsByClassName(a.lazyClass),s=e.getElementsByClassName(a.lazyClass+" "+a.preloadClass),k=a.hFac,o("scroll",Y,!0),o("resize",Y,!0),t.MutationObserver?new MutationObserver(Y).observe(n,{childList:!0,subtree:!0,attributes:!0}):(n.addEventListener("DOMNodeInserted",Y,!0),n.addEventListener("DOMAttrModified",Y,!0),setInterval(Y,999)),o("hashchange",Y,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(t){e.addEventListener(t,Y,!0)}),/d$|^c/.test(e.readyState)?nt():(o("load",nt),e.addEventListener("DOMContentLoaded",Y),l(nt,2e4)),i.elements.length?(V(),w._lsFlush()):Y()},checkElems:Y,unveil:at}}(),j=(R=E(function(t,e,i,a){var n,r,s;if(t._lazysizesWidth=a,a+="px",t.setAttribute("sizes",a),c.test(e.nodeName||""))for(n=e.getElementsByTagName("source"),r=0,s=n.length;r<s;r++)n[r].setAttribute("sizes",a);i.detail.dataAttr||z(t,i.detail)}),H=function(t,e,i){var a,n=t.parentNode;n&&(i=C(t,n,i),(a=A(t,"lazybeforesizes",{width:i,dataAttr:!!e})).defaultPrevented||(i=a.detail.width)&&i!==t._lazysizesWidth&&R(t,n,a,i))},O=N(function(){var t,e=B.length;if(e)for(t=0;t<e;t++)H(B[t])}),{_:function(){B=e.getElementsByClassName(a.autosizesClass),o("resize",O)},checkElems:O,updateElem:H}),k=function t(){t.i||(t.i=!0,j._(),T._())};var B,R,H,O;return i={cfg:a,autoSizer:j,loader:T,init:k,uP:z,aC:b,rC:h,hC:m,fire:A,gW:C,rAF:w}}(e,e.document);e.lazySizes=a,t.exports&&(t.exports=a)}(window)})(t={exports:{}},t.exports);var t,e=function(){function t(t){return t.indexOf("?")>-1?"&":"?"}function e(e,i){if(i){var a=JSON.parse(i);Object.keys(a).forEach(function(i){e+=null!==a[i]?t(e)+i+"="+a[i]:""})}return e}return{queryUrl:e,getUrl:function(i){var a=i.getAttribute("data-src"),n=i.getAttribute("data-height-ratio"),r=i.parentNode.innerWidth||i.parentNode.offsetWidth;if(r=null!==r?r+50-r%50:null,!n){var s=i.parentNode.innerHeight||i.parentNode.offsetHeight;n=(s=null!==s?s+50-s%50:null)/r}var o=r,l=o*n;return a+=o?t(a)+"width="+o:"",a=e(a+=null!==l?t(a)+"height="+l:"",i.getAttribute("data-query-obj"))}}},i=0;function a(t){var e=new Image;e.src="data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA",e.onload=e.onerror=function(){t(2===e.height)}}window.lazySizesConfig=window.lazySizesConfig||{},window.lazySizesConfig.expand=1e3;export default{lazyLoad:function(t){t.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})};var i=t.target,n=i.classList.contains("lazyload-measure")||i.classList.contains("lazyload-bg"),r=i.classList.contains("lazyload-measure"),s=i.hasAttribute("data-srcset")&&i.hasAttribute("data-query-obj"),o=i.hasAttribute("data-src")&&i.hasAttribute("data-query-obj");if(n&&t.preventDefault(),r){var l=i.classList.contains("lazyload-bg"),u=e().getUrl(i);a(function(t){t&&(u+="&format=webp"),l?(i.parentNode.style.backgroundImage="url("+u+")",i.style.visibility="hidden"):i.src=u})}else if(s){var d=i.getAttribute("data-query-obj"),c=i.getAttribute("data-srcset").split(","),f=i.getAttribute("data-src"),g=[];a(function(t){c.forEach(function(i){var a=(i=(i=i.trim()).split(" "))[0],n=i[1],r=e().queryUrl(a,d);t&&(a+="&format=webp"),g.push(r+" "+n)}),t&&(f+="&format=webp"),i.setAttribute("srcset",g.join(", ")),i.setAttribute("src",e().queryUrl(f,d))})}else if(o){d=i.getAttribute("data-query-obj"),f=i.getAttribute("data-src"),u=e().queryUrl(f,d);i.setAttribute("src",u)}},checkImages:function(){if(window.innerWidth>i+50||window.innerWidth<i-50){var t=Array.prototype.slice.call(document.body.querySelectorAll(".lazyloaded"));t.length>0&&t.map(function(t){t.classList.remove("lazyloaded"),t.classList.add("lazyload")}),i=window.innerWidth}}};