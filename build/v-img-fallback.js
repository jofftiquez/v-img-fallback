(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.VueImgFallback = factory());
}(this, (function () { 'use strict';

var index = (Vue, {loading, error}) => {
  Vue.directive('img-fallback', {
    inserted: (el) => {},
    bind: (el, binding, vnode) => {
      const {
        name, value, oldValue, expression, arg, modifiers
      } = binding;

      const defaultLoading = loading || 'http://de.4-traders.com/images/loading_100.gif';
      const defaultError = error || 'https://pbs.twimg.com/media/BXhh-sfIAAArh4S.jpg';
      let loading = defaultLoading;
      let err = defaultError;
      let original = el.src;

      let img = new Image();

      if(!value) {
        console.warn(`Vue Img Fallback Warning: Directive value is ${ typeof value }. Now using default values.`);
      }

      if(typeof value === 'string') {
        loading = value;
        err = value;
      }

      if(value instanceof Object) {
        loading = value.loading || defaultLoading;
        err = value.error || defaultError;
      }
      
      img.src = original;

      el.src = loading;
      
      img.onload = () => {
        el.src = original;
      };

      img.onerror = () => {
        el.src = err;
      };
    }
  });
};

return index;

})));
