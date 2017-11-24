(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.VueImgFallback = factory());
}(this, (function () { 'use strict';

var index = (Vue) => {
  Vue.directive('img-fallback', {
    inserted: (el) => {},
    bind: (el, binding, vnode) => {
      const {
        name, value, oldValue, expression, arg, modifiers
      } = binding;

      var img = new Image();

      img.src = el.src;
      
      img.onload = () => {};

      img.onerror = () => {
        el.src = value || 'https://pbs.twimg.com/media/BXhh-sfIAAArh4S.jpg';
      };
    }
  });
};

return index;

})));
