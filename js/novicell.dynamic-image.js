'use strict';

/**
* @name Novicell Dynamic Image
* @author Jonas Havmøller & Danni Larsen
*/


var novicell = novicell || {};

novicell.dynamicImage = novicell.dynamicImage || function () {

    function getUrl(el) {
        var pixelInterval = 50;
        var baseUrl = el.getAttribute('data-src');
        var heightRatio = el.getAttribute('data-height-ratio');
        var parentWidth = el.parentNode.innerWidth || el.parentNode.offsetWidth;
        parentWidth = parentWidth !== null ? parentWidth + pixelInterval - (parentWidth % pixelInterval) : null; // round to the nearest 50
        
        if (!heightRatio) {
            var parentHeight = el.parentNode.innerHeight || el.parentNode.offsetHeight;
            parentHeight = parentHeight !== null ? parentHeight + pixelInterval - (parentHeight % pixelInterval) : null; // round to the nearest 50
            heightRatio = parentHeight / parentWidth;
        }
       
        var width = parentWidth;
        var height = width * heightRatio;

        // Create skeleton element
        if(el.classList.contains('lazyload-skeleton')){
            const skeleton = document.createElement('div');
            skeleton.classList.add('lazyload-skeleton-placeholder');
            skeleton.style.height = height + 'px';
            skeleton.style.width = width + 'px';
            skeleton.style.maxWidth = '100%';
            el.parentNode.append(skeleton);
            el.classList.add('lazyload-skeleton-loading');
        }

        baseUrl += width ? nextQuerySign(baseUrl) + "width=" + width : "";
        baseUrl += height !== null ? nextQuerySign(baseUrl) + "height=" + height : "";

        var queryObjStr = el.getAttribute('data-query-obj');
        baseUrl = queryUrl(baseUrl, queryObjStr);

        return baseUrl;
    }

    function nextQuerySign(url) {
        return url.indexOf("?") > -1 ? "&" : "?";
    }

    function queryUrl(url, queryObjStr) {
        if (queryObjStr) {
            var queryObj = JSON.parse(queryObjStr);
            
            Object.keys(queryObj).forEach(function(key){
                url += queryObj[key] !== null ? nextQuerySign(url) + key + "=" + queryObj[key] : "";
            });
        }
        return url
    }
 
    return {
        queryUrl: queryUrl,
        getUrl: getUrl
    };
}();
