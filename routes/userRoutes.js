const express = require('express');
const routers = express.Router();
const {signup, login} = require('../Controller/userController');


routers.post('/signup', signup) 

 
routers.post('/login', login)
 
module.exports = routers