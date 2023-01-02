const express = require('express')
const { getActivity, createActivity, deleteActivity, updateActivity } = require('../Controller/ActivityController')
const routers = express.Router()
const Auth = require('../Middleware/auth')

routers.get('/get',Auth , getActivity)

routers.post('/create', Auth, createActivity)

routers.delete('/delete/:id', Auth, deleteActivity)

routers.put('/update/:id', Auth, updateActivity)

module.exports = routers