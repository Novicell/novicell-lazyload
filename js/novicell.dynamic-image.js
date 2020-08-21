'use strict';

/**
* @name Novicell Dynamic Image
* @author Jonas Havmøller & Danni Larsen
*/

export const dynamicImage = function () {
    function getUrl(el) {
        const pixelInterval = 50;
        let baseUrl = el.getAttribute('data-src');
        let heightRatio = el.getAttribute('data-height-ratio');
        let parentWidth = el.parentNode.innerWidth || el.parentNode.offsetWidth;
        parentWidth = parentWidth !== null ? parentWidth + pixelInterval - (parentWidth % pixelInterval) : null; // round to the nearest 50
        
        if (!heightRatio) {
            var parentHeight = el.parentNode.innerHeight || el.parentNode.offsetHeight;
            parentHeight = parentHeight !== null ? parentHeight + pixelInterval - (parentHeight % pixelInterval) : null; // round to the nearest 50
            heightRatio = parentHeight / parentWidth;
        }
       
        let width = parentWidth;
        let height = width * heightRatio;

        baseUrl += width ? nextQuerySign(baseUrl) + "width=" + width : "";
        baseUrl += height !== null ? nextQuerySign(baseUrl) + "height=" + height : "";

        const queryObjStr = el.getAttribute('data-query-obj');
        baseUrl = queryUrl(baseUrl, queryObjStr);

        return baseUrl;
    }

    function nextQuerySign(url) {
        return url.indexOf("?") > -1 ? "&" : "?";
    }

    function queryUrl(url, queryObjStr) {
        if (queryObjStr) {
            const queryObj = JSON.parse(queryObjStr);
            
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
}
