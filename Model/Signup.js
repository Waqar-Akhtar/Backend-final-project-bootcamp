const mongoose = require('mongoose');
const {Schema}= mongoose

const UserSchema  = new Schema({
name :{
    type: String,
    required: true,
},
email: {
    type: String,
    require: true,
    unique: true,
},
Password: {
    type: String,
    required: true

},
cPassword:{
    type: String,
    required: true,
}
},{timestamps: true})

module.exports = mongoose.model('User',UserSchema)