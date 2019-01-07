const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: 'Node API Store',
        version: '0.0.1'
    });
});

//carrega as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');


app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;