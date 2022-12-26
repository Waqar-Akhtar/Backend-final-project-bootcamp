const express = require('express')
const { getActivity, createActivity, deleteActivity, updateActivity } = require('../Controller/ActivityController')
const routers = express.Router()
const Auth = require('../Middleware/auth')

routers.get('/',Auth , getActivity)

routers.post('/', Auth, createActivity)

routers.delete('/:id', Auth, deleteActivity)

routers.put('/:id', Auth, updateActivity)

module.exports = routers