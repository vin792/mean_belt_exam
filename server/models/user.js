var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true, minlength: 1}
}, {timestamps: true})

mongoose.model('User', UserSchema)