# Novicell Lazyload
**Image lazyloading script in vanilla javascript**


## Usage
Written in pure Vanilla JS, depends on [lazysizes](https://github.com/aFarkas/lazysizes/) and some kind of serverside image processor as the [imageprocessor.net](http://imageprocessor.org/imageprocessor-web/imageprocessingmodule/). It ships with examples for easy implementation with the [novicell-frontend setup](https://github.com/Novicell/novicell-frontend).

### Install with npm

```sh
npm install novicell-lazyload --save
```


## Setup
In this example `vendorPath` is the path to your *node_modules* folder.
First add a new bundle with all the dependencies to your `gulp/config.js`-file, you can just copy/paste this shippet:

```javascript
{
    name: 'lazy',
    scripts: [
        vendorPath + "novicell-debounce/js/novicell.debounce.js",
        vendorPath + "novicell-lazyload/js/novicell.dynamic-image.js",
        vendorPath + "novicell-lazyload/js/lazy-images.js",
        vendorPath + "lazysizes/lazysizes.min.js"
    ]
}
```

Then include the js file in your HTML:
```html
    <script defer src="/dist/scripts/lazy.min.js"></script>
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

### Background images (lazyload-bg)
This uses the "measure"-feature only adding the image as a background image on the parent element, instead of an actual `<img>`-tag.

```html
<img class="lazyload lazyload-measure lazyload-bg" data-src="/dist/images/test.jpg" alt="Cool image" data-query-obj='{"mode":"crop", "quality":"70", "center": "0.8,0.3"}'/>
```

## Extension
For extending the component please reference the [Novicell wiki page 🕮](https://github.com/Novicell/novicell-frontend/wiki/Components-extention).