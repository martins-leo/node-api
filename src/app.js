const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//conecta no banco
mongoose.connect('mongodb://leonardo:leo123@ds032319.mlab.com:32319/nodestore');

//carrega as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');


app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;