const express  = require('express');
const server   = express();
const cors     = require('cors');
const helmet   = require('helmet');
const login    = require('../router/login.js');
const register = require('../router/register.js');
const users    = require('../router/users.js');
const plants   = require('../router/plants.js');

server.use(express.json());
server.use(helmet());
server.use(cors());


server.use('/api/login',      login);
server.use('/api/register',   register);
server.use('/api/users',      users);
server.use('/api/plants',     plants);
 

server.get('/', (req, res) => {
  res.send('server is up');
});

module.exports = server;
