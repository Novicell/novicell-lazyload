'use strict';

/**
* @name Novicell Dynamic Image
* @author Jonas Havmøller & Danni Larsen
* @description Adds eventlisteners for lazysizes and more
*/
import 'lazysizes';
import { dynamicImage } from './novicell.dynamic-image';

let lastRefreshWidth = 0;
const refreshWidth = 50;
const pixelRatio = window.devicePixelRatio;

export default class NovicellLazyLoad {
    constructor({includeWebp = true, includeRetina = true}) {
        this.includeWebp = includeWebp;
        this.includeRetina = includeRetina;
        this.lazyLoad = function(e) {
            // IE Fix
            e.preventDefault = function () {
                Object.defineProperty(this, 'defaultPrevented', {get: function () {return true;}});
            };

            const useWebp = this.includeWebp;
            const useRetina = this.includeRetina;
            const target = e.target;
            const preventLoad = target.classList.contains('lazyload-measure') || target.classList.contains('lazyload-bg'); 
            const setMeasuredUrl = target.classList.contains('lazyload-measure');
            const setSrcSet = target.hasAttribute('data-srcset') && target.hasAttribute('data-query-obj');
            const setSrc = target.hasAttribute('data-src') && target.hasAttribute('data-query-obj');
        
            if(preventLoad) {
                e.preventDefault();
            }
        
            if(setMeasuredUrl) {
                const setBg = target.classList.contains('lazyload-bg');
                let url = dynamicImage().getUrl(target);

                isSupportWebP(function(supportWebp) {
                    if (supportWebp && useWebp) {
                        url = addFormat(url);
                    }
                    
                    if(setBg && useRetina) {
                        const { orgWidth, orgHeight, retinaHeight, retinaWidth } = getRetinaSizes(url);

                        // Add fallback background image
                        target.parentNode.style.backgroundImage = `url(${url})`;

                        // Add webkit image-set for Chrome and Safari
                        if (window.CSS.supports('background-image', `-webkit-image-set( url(${url}) 1x, url(${getRetinaSrcSet({url, orgWidth, orgHeight, retinaHeight, retinaWidth})}) ${pixelRatio}x)`)) {
                            target.parentNode.style.backgroundImage = `-webkit-image-set( url(${url}) 1x, url(${getRetinaSrcSet({url, orgWidth, orgHeight, retinaHeight, retinaWidth})}) ${pixelRatio}x)`;
                        }
                        
                        // Add image-set for all modern browsers
                        if (window.CSS.supports('background-image', `image-set(url("${url}") 1x, url(${getRetinaSrcSet({url, orgWidth, orgHeight, retinaHeight, retinaWidth})}) ${pixelRatio}x)`)) {
                            target.parentNode.style.backgroundImage = `image-set(url("${url}") 1x, url(${getRetinaSrcSet({url, orgWidth, orgHeight, retinaHeight, retinaWidth})}) ${pixelRatio}x)`;
                        }

                        target.style.visibility = 'hidden';
                    }
                    else if(setBg) {
                        target.parentNode.style.backgroundImage = `url(${url})`;   
                        target.style.visibility = 'hidden';
                    } else {
                        target.src = url;

                        if (useRetina) {
                            const { orgWidth, orgHeight, retinaHeight, retinaWidth } = getRetinaSizes(url);

                            if (orgWidth || orgHeight) {
                                target.setAttribute('srcset', `${url} 1x, ${getRetinaSrcSet({url, orgWidth, orgHeight, retinaHeight, retinaWidth})} ${pixelRatio}x`);
                            }
                        }
                    }
                });
            }
    
            else if(setSrcSet) {
                const query = target.getAttribute('data-query-obj');
                const srcset = target.getAttribute('data-srcset').split(',');
                const src = target.getAttribute('data-src');
                const newSrcset = [];
                isSupportWebP(function(supportWebp) {
                    srcset.forEach(function(src){
                        src = src.trim();
                        src = src.split(' ');
                        
                        let url = src[0];
                        const bp = src[1];
                        let newSrc = dynamicImage().queryUrl(url, query);
                        if (supportWebp && useWebp) {
                            newSrc = addFormat(newSrc);
                        }
                        // set new srcset
                        newSrcset.push(newSrc + ' ' + bp);

                        if (useRetina) {
                            const sizeOrDensisty = bp.match(/\d+/g);
                            const { orgWidth, orgHeight, retinaHeight, retinaWidth } = getRetinaSizes(newSrc);
                            const newSizeOrDensisty = sizeOrDensisty ? bp.replace(sizeOrDensisty, (Number(sizeOrDensisty) * pixelRatio).toString()) : bp;
                            if (orgWidth || orgHeight) {
                                newSrcset.push(`${getRetinaSrcSet({url, orgWidth, orgHeight, retinaHeight, retinaWidth})} ${newSizeOrDensisty}`);
                            }
                        }
                    });
    
                    target.setAttribute('srcset', newSrcset.join(', '));
                    target.setAttribute('src', dynamicImage().queryUrl(src, query));
                });
            }
            else if(setSrc) {
                const query = target.getAttribute('data-query-obj');
                const src = target.getAttribute('data-src');
                const url = dynamicImage().queryUrl(src, query);

                if (useRetina) {
                    const { orgWidth, orgHeight, retinaHeight, retinaWidth } = getRetinaSizes(url);
                    if (orgWidth || orgHeight) {
                        target.setAttribute('srcset', `${url} 1x, ${getRetinaSrcSet({url, orgWidth, orgHeight, retinaHeight, retinaWidth})} ${pixelRatio}x`);
                    }
                }
        
                target.setAttribute('src', url);
            }
        }
        this.checkImages = function() {
            if (window.innerWidth > lastRefreshWidth + refreshWidth || window.innerWidth < lastRefreshWidth - refreshWidth) {
                let loadedElements = Array.prototype.slice.call(document.body.querySelectorAll('.lazyloaded'));
                if(loadedElements.length > 0) {
                    loadedElements.map(function(el){
                        el.classList.remove('lazyloaded');
                        el.classList.add('lazyload');
                    });
                }
                lastRefreshWidth = window.innerWidth;
            };
        }
    }
}

function isSupportWebP(callback) {
    const webP = new Image();
    webP.src = 'data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMw' + 'AgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA';
    webP.onload = webP.onerror = function () {
        callback(webP.height === 2);
    };
}

function getRetinaSizes(url) {
    const parsedUrl = new URL(url);
    let params = new URLSearchParams(parsedUrl.search);
    const orgWidth = params.get('width');
    const orgHeight = params.get('height');
    const retinaWidth = orgWidth ? (Number(orgWidth) * pixelRatio).toString() : orgWidth;
    const retinaHeight = orgHeight ? (Number(orgHeight) * pixelRatio).toString() : orgHeight;

    return {
        orgWidth,
        orgHeight,
        retinaWidth,
        retinaHeight
    }
}

function getRetinaSrcSet({ url, orgWidth, orgHeight, retinaHeight, retinaWidth }) {
    return url.replace(orgWidth, retinaWidth).replace(orgHeight, retinaHeight);
}

function addFormat(url) {
    // check if format is already set
    if(url.includes('format=')) return url;   
    // add format in start of querystring
    const urlArr = url.split('?');

    return `${urlArr[0]}?format=webp&${urlArr[1]}`;
}
