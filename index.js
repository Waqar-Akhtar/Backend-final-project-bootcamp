const express = require('express');
const app = express();
const mongooseConnection = require('./db');
require('dotenv').config()
const userRoutes = require('./routes/userRoutes')
const activitiesRoutes = require('./routes/activitiesRoutes')

mongooseConnection()

app.use(express.json())
app.use('/user', userRoutes)
app.use('/activities', activitiesRoutes)


app.listen(process.env.port, ()=>{
    console.log(`listening on ${process.env.port}`)}
)