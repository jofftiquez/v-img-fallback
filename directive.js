export default {
    bind(el, binding) {
        const { value } = binding;
        const defaultLoading = 'http://de.4-traders.com/images/loading_100.gif';
        const defaultError = 'https://pbs.twimg.com/media/BXhh-sfIAAArh4S.jpg';
        const img = new Image();

        let loading = defaultLoading;
        let err = defaultError;
        let original = el.src;

        if (!value) {
            console.warn(`Vue Img Fallback Warning: Directive value is ${typeof value}. Now using default values.`);
        }

        if (typeof value === 'string') {
            loading = value;
            err = value;
        }

        if (value instanceof Object) {
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
}
