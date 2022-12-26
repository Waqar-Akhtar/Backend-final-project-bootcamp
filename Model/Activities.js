const mongoose = require('mongoose');
const {Schema}= mongoose

const ActivitiesSchema  = new Schema({
activity :{
    type: String,
    required: true,
},
duration: {
    type: String,
    require: true,
},
date: {
    type: Date,
    required: true

},
description:{
    type: String,
    required: true,
},
userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref : "User",
    required: true
}
},{timestamps: true})

module.exports = mongoose.model('Activities',ActivitiesSchema)