const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const sequelize = require('./util/db');

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    })

app.get('/', (req, res) => {
    res.json({ message: 'web shop app' });
})

app.listen(3002, () => {
    console.log('server is running on port 3002');
})