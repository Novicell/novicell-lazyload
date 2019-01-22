# Novicell Lazyload
**Image lazyloading script in vanilla javascript**


## Usage
Written in pure Vanilla JS, depends on [lazysizes](https://github.com/aFarkas/lazysizes/) and some kind of serverside image processor as the [imageprocessor.net](http://imageprocessor.org/imageprocessor-web/imageprocessingmodule/). It ships with examples for easy implementation with the [novicell-frontend setup](https://github.com/Novicell/novicell-frontend).

### Install with npm

```sh
npm install novicell-lazyload@next --save
```
Or simply:
```sh
npm i novicell-lazyload@next
```

## Setup
Import novicell-lazyload as a module in your javascript file that observes the images:

```javascript
import 'novicell-lazyload';
```

## Implementation
This script *lazyloads* by swapping the `data-src` or `data-srcset` to an actual `src` or `srcset`.
For all implementations you should have a `lazyload`-class and `data-query-obj` on the image. Everything inside the data-query-obj is general settings that is applied on every src in the srcset as a querystring".

For extra plugins and complete feature list, please reference the [lazysizes documentation](https://github.com/aFarkas/lazysizes/).

### Images with fixed sizes (lazyload)
For images with fixed sizes we recommend using a specific srcset, as this is the fastest.

```html
<img class="lazyload" data-src="/dist/images/test.jpg" alt="Cool image" data-query-obj='{"mode":"crop", "quality":"70", "center": "0.8,0.3"}'
data-srcset="/dist/images/test.jpg?width=1500&heightratio=0.6 1000w,
             /dist/images/test.jpg?width=900&heightratio=0.6 800w,
             /dist/images/test.jpg?width=400&heightratio=1 500w"/>
```

### Images with variable sizes (lazyload-measure)
For images with variable sizes, eg. a full width banner with a fixed height, or just an image added in the CMS inside a random grid column, we recommend the "measure"-feature.

This feature will get the size of the parent element, and add it as query strings for this image.

```html
<img class="lazyload lazyload-measure" data-src="/dist/images/test.jpg" alt="Cool image" data-query-obj='{"mode":"crop", "quality":"70", "center": "0.8,0.3"}'/>
```

### Using height ratio (or auto height)
If you just want auto height you can add the attribute ´data-height-ratio="0"´
You can also pass a height-ratio, this will set the size accordingly.

**Useful height ratios**: 
`0`: Auto height
`0.5`: Half height as width
`0.5625`: 16:9 format
`0.625`: 16:10 format
`1`: Square image
`2`: Twice height as width

```html
<img class="lazyload lazyload-measure" data-src="/dist/images/test.jpg" alt="Cool image" data-height-ratio="0" data-query-obj='{"mode":"crop", "quality":"70", "center": "0.8,0.3"}' />
```


### Background images (lazyload-bg)
This uses the "measure"-feature only adding the image as a background image on the parent element, instead of an actual `<img>`-tag.

```html
<img class="lazyload lazyload-measure lazyload-bg" data-src="/dist/images/test.jpg" alt="Cool image" data-query-obj='{"mode":"crop", "quality":"70", "center": "0.8,0.3"}'/>
```

## Extension
For extending the component please reference the [Novicell wiki page 🕮](https://github.com/Novicell/novicell-frontend/wiki/Components-extention).
