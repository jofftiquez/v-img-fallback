# v-img-fallback

Vue imge placeholder directive for broken images.

### Usage

**NPM or Yarn**

`npm install v-img-fallback --save`

`yarn add v-img-fallback`

```javascript
import Vue from 'vue';
import VImgFallback from 'v-img-fallback';

Vue.use(VImgFallback);

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

**Tips**

`loading` value can be a `.gif` **Gee**. **Ahy**. **Ef**. *(I will die with dignity LOL)*.

**Made with :heart: by Jofferson Ramirez Tiquez**
