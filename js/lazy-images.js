'use strict';
/**
* @name Novicell Dynamic Image
* @author Jonas Havmøller & Danni Larsen
* @description Adds eventlisteners for lazysizes and more
*/
import 'lazysizes';
import { dynamicImage } from './novicell.dynamic-image';

var lastRefreshWidth = 0;
var refreshWidth = 50;

// Lazysizes config
window.lazySizesConfig = window.lazySizesConfig || {};
window.lazySizesConfig.expand = 1000;
<<<<<<< HEAD
if (window.lazySizesConfig["useWebp"] == undefined) {
    window.lazySizesConfig["useWebp"] = true
}
=======
>>>>>>> feature/modular-rework

/*
 *   Lazyload
 */

export default class NovicellLazyLoad {
    constructor({includeWebp = true}) {
        this.includeWebp = includeWebp;
        this.lazyLoad = function(e) {
            // IE Fix
            e.preventDefault = function () {
                Object.defineProperty(this, 'defaultPrevented', {get: function () {return true;}});
            };
            const webp = this.includeWebp;
            
            var target = e.target;
            var preventLoad = target.classList.contains('lazyload-measure') || target.classList.contains('lazyload-bg'); 
            var setMeasuredUrl = target.classList.contains('lazyload-measure');
            var setSrcSet = target.hasAttribute('data-srcset') && target.hasAttribute('data-query-obj');
            var setSrc = target.hasAttribute('data-src') && target.hasAttribute('data-query-obj');
        
            if(preventLoad) {
                e.preventDefault();
            }
        
            if(setMeasuredUrl) {
                var setBg = target.classList.contains('lazyload-bg');
                var url = dynamicImage().getUrl(target);
                isSupportWebP(function(bool) {
                    if (bool && webp) {
                        url += "&format=webp"
                    }
                    if(setBg) {
                        target.parentNode.style.backgroundImage = 'url(' + url + ')';   
                        target.style.visibility = 'hidden';
                    } else {
                        target.src = url;
                    }
                });
            }
    
<<<<<<< HEAD
    var target = e.target;
    var preventLoad = target.classList.contains('lazyload-measure') || target.classList.contains('lazyload-bg'); 
    var setMeasuredUrl = target.classList.contains('lazyload-measure');
    var setSrcSet = target.hasAttribute('data-srcset') && target.hasAttribute('data-query-obj');
    var setSrc = target.hasAttribute('data-src') && target.hasAttribute('data-query-obj');

    if(preventLoad) {
        e.preventDefault();
    }

    if(setMeasuredUrl) {
        var setBg = target.classList.contains('lazyload-bg');
        var url = novicell.dynamicImage.getUrl(target);
        isSupportWebP(function(bool) {
            if (bool && window.lazySizesConfig.useWebp) {
                url += "&format=webp"
            }
            if(setBg) {
                target.parentNode.style.backgroundImage = 'url(' + url + ')';
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
        var newSrcset = [];

        isSupportWebP(function(bool) {
            srcset.forEach(function(src) {
                src = src.trim();
                src = src.split(' ');
                
                var url = src[0];
                var bp = src[1];

                if (bool && window.lazySizesConfig.useWebp) {
                    url += "&format=webp"
                }
                
                var newSrc = novicell.dynamicImage.queryUrl(url, query);
                
                // set new srcset
                newSrcset.push(newSrc + ' ' + bp);
            });
            
            if (bool && window.lazySizesConfig.useWebp) {
                src += "&format=webp"
            }
            target.setAttribute('srcset', newSrcset.join(', '));
            target.setAttribute('src', novicell.dynamicImage.queryUrl(src, query));
        });
    }
    else if(setSrc) {
        var query = target.getAttribute('data-query-obj');
        var src = target.getAttribute('data-src');
        var url = novicell.dynamicImage.queryUrl(src, query);
        
        target.setAttribute('src', url);
=======
            else if(setSrcSet) {
                var query = target.getAttribute('data-query-obj');
                var srcset = target.getAttribute('data-srcset').split(',');
                var src = target.getAttribute('data-src');
                var newSrcset = [];
                isSupportWebP(function(bool) {
                    srcset.forEach(function(src){
                        src = src.trim();
                        src = src.split(' ');
                        
                        var url = src[0];
                        var bp = src[1];
                        var newSrc = dynamicImage().queryUrl(url, query);
                        if (bool && webp) {
                            url += "&format=webp"
                        }
                        // set new srcset
                        newSrcset.push(newSrc + ' ' + bp);
                    });
    
                    if (bool && webp) {
                        src += "&format=webp"
                    }
                    target.setAttribute('srcset', newSrcset.join(', '));
                    target.setAttribute('src', dynamicImage().queryUrl(src, query));
                });
            }
            else if(setSrc) {
                var query = target.getAttribute('data-query-obj');
                var src = target.getAttribute('data-src');
                var url = dynamicImage().queryUrl(src, query);
        
                target.setAttribute('src', url);
            }
        }
        this.checkImages = function() {
            if (window.innerWidth > lastRefreshWidth + refreshWidth || window.innerWidth < lastRefreshWidth - refreshWidth) {
                var loadedElements = Array.prototype.slice.call(document.body.querySelectorAll('.lazyloaded'));
                if(loadedElements.length > 0) {
                    loadedElements.map(function(el){
                        el.classList.remove('lazyloaded');
                        el.classList.add('lazyload');
                    });
                }
                lastRefreshWidth = window.innerWidth;
            };
        }
>>>>>>> feature/modular-rework
    }
}

function isSupportWebP(callback) {
    var webP = new Image();
    webP.src = 'data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMw' + 'AgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA';
    webP.onload = webP.onerror = function () {
        callback(webP.height === 2);
<<<<<<< HEAD
    };
};

/*
*   Check images
*/
var checkImages = function() {
    if (window.innerWidth > lastRefreshWidth + refreshWidth || window.innerWidth < lastRefreshWidth - refreshWidth) {
        var loadedElements = Array.prototype.slice.call(document.body.querySelectorAll('.lazyloaded'));
        if(loadedElements.length > 0) {
            loadedElements.map(function(el){
                el.classList.remove('lazyloaded');
                el.classList.add('lazyload');
            });
        }
        lastRefreshWidth = window.innerWidth;
=======
>>>>>>> feature/modular-rework
    };
}

/*
 *   Eventlisteners
 */
// document.addEventListener('lazybeforeunveil', NovicellLazyLoad.lazyLoad, true);
// window.addEventListener('resize', debounce(NovicellLazyLoad.checkImages), 100, false);
