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

export default class NovicellLazyLoad {
    constructor({includeWebp = true}) {
        this.includeWebp = includeWebp;
        this.lazyLoad = function(e) {
            // IE Fix
            e.preventDefault = function () {
                Object.defineProperty(this, 'defaultPrevented', {get: function () {return true;}});
            };

            const useWebp = this.includeWebp;
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
                    if(setBg) {
                        target.parentNode.style.backgroundImage = `url(${url})`;   
                        target.style.visibility = 'hidden';
                    } else {
                        target.src = url;
                    }
                });
            }
    
            else if(setSrcSet) {
                var query = target.getAttribute('data-query-obj');
                var srcset = target.getAttribute('data-srcset').split(',');
                var src = target.getAttribute('data-src');
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
                    });
    
                    target.setAttribute('srcset', newSrcset.join(', '));
                    target.setAttribute('src', dynamicImage().queryUrl(src, query));
                });
            }
            else if(setSrc) {
                const query = target.getAttribute('data-query-obj');
                const src = target.getAttribute('data-src');
                const url = dynamicImage().queryUrl(src, query);
        
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

function addFormat(url) {
    // check if format is already set
    if(url.includes('format=')) return url;   
    // add format in start of querystring
    const urlArr = url.split('?');

    return `${urlArr[0]}?format=webp&${urlArr[1]}`;
}