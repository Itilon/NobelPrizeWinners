System.config({
    transpiler: 'plugin-babel',
    map: {
        'plugin-babel': '/libs/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': '/libs/systemjs-plugin-babel/systemjs-babel-browser.js',

        'handlebars': 'libs/handlebars/dist/handlebars.min.js',
        'jquery': 'libs/jquery/dist/jquery.min.js',
        'materialize': 'libs/materialize-css/dist/js/materialize.min.js',
        'sammy': 'libs/sammy/lib/sammy.js',

        'main': 'client/js/main.js',
        'template': 'client/js/template.js',
        'homeController': 'client/js/controllers/home.controller.js',
        'categoryController': 'client/js/controllers/category.controller.js'
    },
    meta: {
        'materialize': {
            format: 'global',
            deps: ['jquery']
        }
    }
});


System.import('main');