const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const mongooseConnection = ()=>{
    mongoose.connect(process.env.mongoose_url ,{
       useNewUrlParser: true,
        useUnifiedTopology: true,
     },()=>{
        console.log("mongoDb Connection Successfully")
    })
}

module.exports = mongooseConnection