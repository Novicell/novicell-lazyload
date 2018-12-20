'use strict';

/**
* @name Novicell Dynamic Image
* @author Jonas Havmøller & Danni Larsen
* @description Adds eventlisteners for lazysizes and more
*/


var novicell = novicell || {};

var lastRefreshWidth = 0;
var refreshWidth = 50;

// Lazysizes config
window.lazySizesConfig = window.lazySizesConfig || {};

/*
*   Lazyload
*/
novicell.lazyload = novicell.lazyload || function (e) {
    // IE Fix
    e.preventDefault = function () {
        Object.defineProperty(this, 'defaultPrevented', {get: function () {return true;}});
    };
    
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
        
        if(setBg) {
            target.parentNode.style.backgroundImage = 'url(' + url + ')';   
            target.style.visibility = 'hidden';
        } else {
            target.src = url;
        }

    }
    else if(setSrcSet) {
        var query = target.getAttribute('data-query-obj');
        var srcset = target.getAttribute('data-srcset').split(',');
        var src = target.getAttribute('data-src');
        var newSrcset = [];
        
        srcset.forEach(function(src){
            src = src.trim();
            src = src.split(' ');
            
            var url = src[0];
            var bp = src[1];
            var newSrc = novicell.dynamicImage.queryUrl(url, query);
            // set new srcset
            newSrcset.push(newSrc + ' ' + bp);
        });

        target.setAttribute('srcset', newSrcset.join(', '));
        target.setAttribute('src', novicell.dynamicImage.queryUrl(src, query));
    }
    else if(setSrc) {
        var query = target.getAttribute('data-query-obj');
        var src = target.getAttribute('data-src');
        var url = novicell.dynamicImage.queryUrl(src, query);

        target.setAttribute('src', url);
    }
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
    };
};


/*
*   Eventlisteners
*/
document.addEventListener('lazybeforeunveil', novicell.lazyload, true);
window.addEventListener('resize', novicell.debounce(checkImages), 100, false);
