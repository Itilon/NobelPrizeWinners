const { Router } = require('express');

const init = () => {
    const router = new Router();

    router
        .get('/', (req, res) => {
            res.send('It works!');
        });

    return router;
};

module.exports = init;

