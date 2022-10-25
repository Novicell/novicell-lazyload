import NovicellLazyLoad from './js/lazy-images';
import debounce from 'lodash/debounce';

const lazy = new NovicellLazyLoad({
    includeWebp: true,
});

document.addEventListener('lazybeforeunveil', function(event) {
    lazy.lazyLoad(event);
}, true);

window.addEventListener('resize', function() {
    debounce(lazy.checkImages());
}, 100, false);
