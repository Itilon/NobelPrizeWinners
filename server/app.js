const express = require('express');
const path = require('path');
const firebase = require('firebase');
const configDb = require('./config/db.config');

const init = () => {
    const app = express();

    require('./config/app.config')(app);

    firebase.initializeApp(configDb);

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/index.html'));
    });

    const port = require('./config/port.config');

    app.listen(port, () => console.log(`Server starts at port: ${port}!`));
}

module.exports = init;