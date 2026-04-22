const path = require('path');
const express = require('express');
const registerRoutes = require('./src/routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

registerRoutes(app);

module.exports = app;