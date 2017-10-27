'use strict';

/**
* @name Novicell Dynamic Image
* @author Jonas Havmøller & Danni Larsen
*/


var novicell = novicell || {};

var lastRefreshWidth = 0;
var refreshWidth = 50;

// Lazysizes config
window.lazySizesConfig = window.lazySizesConfig || {};
window.lazySizesConfig.expand = 1000;


/*
*   Lazyload
*/
novicell.lazyload = novicell.lazyload || function (e) {
    // IE Fix
    e.preventDefault = function () {
        Object.defineProperty(this, "defaultPrevented", {get: function () {return true;}});
    };
    
    var target = e.target;
    var preventLoad = target.classList.contains('lazyload-measure') || target.classList.contains('lazyload-bg'); 
    var setMeasuredUrl = target.classList.contains('lazyload-measure');
    var setSrcSet = target.hasAttribute('data-srcset') && target.hasAttribute('data-query-obj');
    var srcSrc = target.hasAttribute('data-src') && target.hasAttribute('data-query-obj');

    if(preventLoad) {
        e.preventDefault();
    }

    if(setMeasuredUrl) {
        var setBg = target.classList.contains('lazyload-bg');    
        var url = novicell.dynamicImage.getUrl(target);
        
        if(setBg) {
            target.parentNode.style.backgroundImage = 'url(' + url + ')';       
        } else {
            target.src = url;
        }

    }
    else if(setSrcSet) {
        var query = target.getAttribute('data-query-obj');
        var srcset = target.getAttribute('data-srcset').split(",");
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
var checkImages = debounce(function() {
    if (window.innerWidth > lastRefreshWidth + refreshWidth || window.innerWidth < lastRefreshWidth - refreshWidth) {
        var loadedElements = document.body.querySelectorAll('.lazyloaded');
        loadedElements.forEach(function(el){
            el.classList.remove('lazyloaded');
            el.classList.add('lazyload');
        });
        lastRefreshWidth = window.innerWidth;
    };
}, 100, false);


/*
*   Debounce
*/
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


/*
*   Eventlisteners
*/
document.addEventListener('lazybeforeunveil', novicell.lazyload, true);
window.addEventListener('resize', checkImages);