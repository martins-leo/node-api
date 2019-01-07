const app = require('../src/app.js'); 
const http = require('http');
const debug = require('debug')('node-api:server');
const express = require('express');

const port = 3000;

app.set('port', port);

const server = http.createServer(app);

server.on('listening', onListening);

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
    ? 'pipe' + addr
    : 'port' + addr.port;

    debug('Listening on '+ bind);
}

server.listen(port);
console.log('Server ouvindo na porta ', port);