# v-img-fallback

Vue imge placeholder directive for broken images.

### Usage

**NPM or Yarn**

`npm install v-img-fallback --save`

`yarn add v-img-fallback`

```javascript
import Vue from 'vue';
import VImgFallback from 'v-img-fallback';

Vue.use(VImgFallback, {
  loading: 'path/to/loading/image',
  error: 'path/to/error/image'
});

```

**CDN**

`https://unpkg.com/v-img-fallback/dist/v-img-fallback.js`

### API

This directive can receive `string` or `object` value.

**string**

Path or image url. This value will be used in both loading and error state.

**object**

```
{
  loading: 'path/to/loading/image',
  error: 'path/to/error/image'
}
```

### Sample - pass a string

```html
<img src="foo.png" v-img-fallback="path/to/placeholder">

```

### Sample - pass an object
```vue
<template>
  <img src="foo.png" v-img-fallback="imgFallback">
</template>

<script>
  export default {
    data() {
      return {
        imgFallback: {
          loading: 'path/to/loading/image',
          error: 'path/to/error/image'
        }
      }
    }
  }
</script>

```

**Update**

*January 25, 2018* - Added options object to `Vue.use(VueImgFallback, options)`. Options should have `loading` and `error` properties. These values will always be overwritten by the value inside `v-img-fallback` directive. 

**Tips**

`loading` value can be a `.gif` **Gee**. **Ahy**. **Ef**. *(I will die with dignity LOL)*.

**Made with :heart: by Jofferson Ramirez Tiquez**
