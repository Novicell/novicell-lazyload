import NovicellLazyLoad from '../js/lazy-images';
import debounce from 'lodash/debounce';

document.addEventListener('lazybeforeunveil', NovicellLazyLoad.lazyLoad, true);
window.addEventListener('resize', debounce(NovicellLazyLoad.checkImages), 100, false);