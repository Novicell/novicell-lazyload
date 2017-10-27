'use strict';

/**
* @name Novicell Dynamic Image
* @author Jonas Havmøller & Danni Larsen
*/


var novicell = novicell || {};

novicell.dynamicImage = novicell.dynamicImage || function () {

    function getUrl(el) {
        var baseUrl = el.getAttribute('data-src');
        var parentHeight = el.parentNode.innerHeight || el.parentNode.offsetHeight;
        var parentWidth = el.parentNode.innerWidth || el.parentNode.offsetWidth;

        var pixelInterval = 50;
        parentWidth = parentWidth !== null ? parentWidth + pixelInterval - (parentWidth % pixelInterval) : null; // round to the nearest 50
        parentHeight = parentHeight !== null ? parentHeight + pixelInterval - (parentHeight % pixelInterval) : null; // round to the nearest 50
        
        var parentAspectRatio = parentHeight / parentWidth;

        var width = parentWidth;
        var height = width * parentAspectRatio;

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