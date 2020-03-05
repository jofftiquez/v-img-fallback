import ImgFallback from './directive';

export default Vue => {
  Vue.directive('img-fallback', ImgFallback);
};

export { ImgFallback };
