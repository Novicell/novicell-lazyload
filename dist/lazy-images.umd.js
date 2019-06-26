!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):((t=t||self)["lazy-images"]=t["lazy-images"]||{},t["lazy-images"].js=e())}(this,function(){"use strict";(function(t){!function(e,i){var n=function(t,e){if(!e.getElementsByClassName)return;var i,n,a=e.documentElement,r=t.Date,s=t.HTMLPictureElement,o=t.addEventListener,l=t.setTimeout,u=t.requestAnimationFrame||l,d=t.requestIdleCallback,c=/^picture$/i,f=["load","error","lazyincluded","_lazyloaded"],g={},y=Array.prototype.forEach,m=function(t,e){return g[e]||(g[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),g[e].test(t.getAttribute("class")||"")&&g[e]},b=function(t,e){m(t,e)||t.setAttribute("class",(t.getAttribute("class")||"").trim()+" "+e)},h=function(t,e){var i;(i=m(t,e))&&t.setAttribute("class",(t.getAttribute("class")||"").replace(i," "))},v=function t(e,i,n){var a=n?"addEventListener":"removeEventListener";n&&t(e,i),f.forEach(function(t){e[a](t,i)})},z=function(t,n,a,r,s){var o=e.createEvent("CustomEvent");return a||(a={}),a.instance=i,o.initCustomEvent(n,!r,!s,a),t.dispatchEvent(o),o},A=function(e,i){var a;!s&&(a=t.picturefill||n.pf)?a({reevaluate:!0,elements:[e]}):i&&i.src&&(e.src=i.src)},p=function(t,e){return(getComputedStyle(t,null)||{})[e]},C=function(t,e,i){for(i=i||t.offsetWidth;i<n.minSize&&e&&!t._lazysizesWidth;)i=e.offsetWidth,e=e.parentNode;return i},w=(M=[],W=[],S=M,_=function(){var t=S;for(S=M.length?W:M,L=!0,x=!1;t.length;)t.shift()();L=!1},j=function(t,i){L&&!i?t.apply(this,arguments):(S.push(t),x||(x=!0,(e.hidden?l:u)(_)))},j._lsFlush=_,j),E=function(t,e){return e?function(){w(t)}:function(){var e=this,i=arguments;w(function(){t.apply(e,i)})}},N=function(t){var e,i,n=function(){e=null,t()},a=function t(){var e=r.now()-i;e<99?l(t,99-e):(d||n)(n)};return function(){i=r.now(),e||(e=l(a,99))}};var L,x,M,W,S,_,j;!function(){var e,i={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:300};for(e in n=t.lazySizesConfig||t.lazysizesConfig||{},i)e in n||(n[e]=i[e]);t.lazySizesConfig=n,l(function(){n.init&&k()})}();var q=function(){var s,u,f,g,C,L,x,M,W,S,_,j,q,k,B,R,H,O,U,F,P=/^img$/i,D=/^iframe$/i,I="onscroll"in t&&!/glebot/.test(navigator.userAgent),$=0,J=0,X=-1,G=function t(e){J--,e&&e.target&&v(e.target,t),(!e||J<0||!e.target)&&(J=0)},Q=function(t,i){var n,r=t,s="hidden"==p(e.body,"visibility")||"hidden"!=p(t,"visibility");for(M-=i,_+=i,W-=i,S+=i;s&&(r=r.offsetParent)&&r!=e.body&&r!=a;)(s=(p(r,"opacity")||1)>0)&&"visible"!=p(r,"overflow")&&(n=r.getBoundingClientRect(),s=S>n.left&&W<n.right&&_>n.top-1&&M<n.bottom+1);return s},V=function(){var t,r,o,l,d,c,f,y,m,b=i.elements;if((g=n.loadMode)&&J<8&&(t=b.length)){r=0,X++,null==q&&("expand"in n||(n.expand=a.clientHeight>500&&a.clientWidth>500?500:370),j=n.expand,q=j*n.expFactor),$<q&&J<1&&X>2&&g>2&&!e.hidden?($=q,X=0):$=g>1&&X>1&&J<6?j:0;for(;r<t;r++)if(b[r]&&!b[r]._lazyRace)if(I)if((y=b[r].getAttribute("data-expand"))&&(c=1*y)||(c=$),m!==c&&(L=innerWidth+c*k,x=innerHeight+c,f=-1*c,m=c),o=b[r].getBoundingClientRect(),(_=o.bottom)>=f&&(M=o.top)<=x&&(S=o.right)>=f*k&&(W=o.left)<=L&&(_||S||W||M)&&(n.loadHidden||"hidden"!=p(b[r],"visibility"))&&(u&&J<3&&!y&&(g<3||X<4)||Q(b[r],c))){if(nt(b[r]),d=!0,J>9)break}else!d&&u&&!l&&J<4&&X<4&&g>2&&(s[0]||n.preloadAfterLoad)&&(s[0]||!y&&(_||S||W||M||"auto"!=b[r].getAttribute(n.sizesAttr)))&&(l=s[0]||b[r]);else nt(b[r]);l&&!d&&nt(l)}},Y=(B=V,H=0,O=n.ricTimeout,U=function(){R=!1,H=r.now(),B()},F=d&&n.ricTimeout?function(){d(U,{timeout:O}),O!==n.ricTimeout&&(O=n.ricTimeout)}:E(function(){l(U)},!0),function(t){var e;(t=!0===t)&&(O=33),R||(R=!0,(e=125-(r.now()-H))<0&&(e=0),t||e<9&&d?F():l(F,e))}),K=function(t){b(t.target,n.loadedClass),h(t.target,n.loadingClass),v(t.target,tt),z(t.target,"lazyloaded")},Z=E(K),tt=function(t){Z({target:t.target})},et=function(t){var e,i=t.getAttribute(n.srcsetAttr);(e=n.customMedia[t.getAttribute("data-media")||t.getAttribute("media")])&&t.setAttribute("media",e),i&&t.setAttribute("srcset",i)},it=E(function(t,e,i,a,r){var s,o,u,d,g,m;(g=z(t,"lazybeforeunveil",e)).defaultPrevented||(a&&(i?b(t,n.autosizesClass):t.setAttribute("sizes",a)),o=t.getAttribute(n.srcsetAttr),s=t.getAttribute(n.srcAttr),r&&(u=t.parentNode,d=u&&c.test(u.nodeName||"")),m=e.firesLoad||"src"in t&&(o||s||d),g={target:t},m&&(v(t,G,!0),clearTimeout(f),f=l(G,2500),b(t,n.loadingClass),v(t,tt,!0)),d&&y.call(u.getElementsByTagName("source"),et),o?t.setAttribute("srcset",o):s&&!d&&(D.test(t.nodeName)?function(t,e){try{t.contentWindow.location.replace(e)}catch(i){t.src=e}}(t,s):t.src=s),r&&(o||d)&&A(t,{src:s})),t._lazyRace&&delete t._lazyRace,h(t,n.lazyClass),w(function(){(!m||t.complete&&t.naturalWidth>1)&&(m?G(g):J--,K(g))},!0)}),nt=function(t){var e,i=P.test(t.nodeName),a=i&&(t.getAttribute(n.sizesAttr)||t.getAttribute("sizes")),r="auto"==a;(!r&&u||!i||!t.getAttribute("src")&&!t.srcset||t.complete||m(t,n.errorClass)||!m(t,n.lazyClass))&&(e=z(t,"lazyunveilread").detail,r&&T.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,J++,it(t,e,r,a,i))},at=function t(){if(!u)if(r.now()-C<999)l(t,999);else{var e=N(function(){n.loadMode=3,Y()});u=!0,n.loadMode=3,Y(),o("scroll",function(){3==n.loadMode&&(n.loadMode=2),e()},!0)}};return{_:function(){C=r.now(),i.elements=e.getElementsByClassName(n.lazyClass),s=e.getElementsByClassName(n.lazyClass+" "+n.preloadClass),k=n.hFac,o("scroll",Y,!0),o("resize",Y,!0),t.MutationObserver?new MutationObserver(Y).observe(a,{childList:!0,subtree:!0,attributes:!0}):(a.addEventListener("DOMNodeInserted",Y,!0),a.addEventListener("DOMAttrModified",Y,!0),setInterval(Y,999)),o("hashchange",Y,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(t){e.addEventListener(t,Y,!0)}),/d$|^c/.test(e.readyState)?at():(o("load",at),e.addEventListener("DOMContentLoaded",Y),l(at,2e4)),i.elements.length?(V(),w._lsFlush()):Y()},checkElems:Y,unveil:nt}}(),T=(R=E(function(t,e,i,n){var a,r,s;if(t._lazysizesWidth=n,n+="px",t.setAttribute("sizes",n),c.test(e.nodeName||""))for(a=e.getElementsByTagName("source"),r=0,s=a.length;r<s;r++)a[r].setAttribute("sizes",n);i.detail.dataAttr||A(t,i.detail)}),H=function(t,e,i){var n,a=t.parentNode;a&&(i=C(t,a,i),(n=z(t,"lazybeforesizes",{width:i,dataAttr:!!e})).defaultPrevented||(i=n.detail.width)&&i!==t._lazysizesWidth&&R(t,a,n,i))},O=N(function(){var t,e=B.length;if(e)for(t=0;t<e;t++)H(B[t])}),{_:function(){B=e.getElementsByClassName(n.autosizesClass),o("resize",O)},checkElems:O,updateElem:H}),k=function t(){t.i||(t.i=!0,T._(),q._())};var B,R,H,O;return i={cfg:n,autoSizer:T,loader:q,init:k,uP:A,aC:b,rC:h,hC:m,fire:z,gW:C,rAF:w}}(e,e.document);e.lazySizes=n,t.exports&&(t.exports=n)}(window)})(t={exports:{}},t.exports);var t,e=function(){function t(t){return t.indexOf("?")>-1?"&":"?"}function e(e,i){if(i){var n=JSON.parse(i);Object.keys(n).forEach(function(i){e+=null!==n[i]?t(e)+i+"="+n[i]:""})}return e}return{queryUrl:e,getUrl:function(i){var n=i.getAttribute("data-src"),a=i.getAttribute("data-height-ratio"),r=i.parentNode.innerWidth||i.parentNode.offsetWidth;if(r=null!==r?r+50-r%50:null,!a){var s=i.parentNode.innerHeight||i.parentNode.offsetHeight;a=(s=null!==s?s+50-s%50:null)/r}var o=r,l=o*a;return n+=o?t(n)+"width="+o:"",n=e(n+=null!==l?t(n)+"height="+l:"",i.getAttribute("data-query-obj"))}}},i=0;function n(t){var e=new Image;e.src="data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA",e.onload=e.onerror=function(){t(2===e.height)}}return window.lazySizesConfig=window.lazySizesConfig||{},window.lazySizesConfig.expand=1e3,{lazyLoad:function(t){t.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})};var i=t.target,a=i.classList.contains("lazyload-measure")||i.classList.contains("lazyload-bg"),r=i.classList.contains("lazyload-measure"),s=i.hasAttribute("data-srcset")&&i.hasAttribute("data-query-obj"),o=i.hasAttribute("data-src")&&i.hasAttribute("data-query-obj");if(a&&t.preventDefault(),r){var l=i.classList.contains("lazyload-bg"),u=e().getUrl(i);n(function(t){t&&(u+="&format=webp"),l?(i.parentNode.style.backgroundImage="url("+u+")",i.style.visibility="hidden"):i.src=u})}else if(s){var d=i.getAttribute("data-query-obj"),c=i.getAttribute("data-srcset").split(","),f=i.getAttribute("data-src"),g=[];n(function(t){c.forEach(function(i){var n=(i=(i=i.trim()).split(" "))[0],a=i[1],r=e().queryUrl(n,d);t&&(n+="&format=webp"),g.push(r+" "+a)}),t&&(f+="&format=webp"),i.setAttribute("srcset",g.join(", ")),i.setAttribute("src",e().queryUrl(f,d))})}else if(o){d=i.getAttribute("data-query-obj"),f=i.getAttribute("data-src"),u=e().queryUrl(f,d);i.setAttribute("src",u)}},checkImages:function(){if(window.innerWidth>i+50||window.innerWidth<i-50){var t=Array.prototype.slice.call(document.body.querySelectorAll(".lazyloaded"));t.length>0&&t.map(function(t){t.classList.remove("lazyloaded"),t.classList.add("lazyload")}),i=window.innerWidth}}}});
