export default (Vue) => {
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