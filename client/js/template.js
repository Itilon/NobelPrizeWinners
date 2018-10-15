import handlebars from 'handlebars';

class HandleBarsTemplate {
    constructor() {
        this.cache = {};
    }

    getTemplate(name) {
        const cache = this.cache;
        const _this = this;
        return new Promise((res, rej) => {
            if (cache[name]) {
                res(cache[name]);
            } else {
                $.get(`client/js/templates/${name}.handlebars`, (file) => {
                    const template = handlebars.compile(file);
                    cache[name] = template;
                    res(template);
                });

                _this.cache = cache;
            }
        });
    }
}

const template = new HandleBarsTemplate();

export { template };