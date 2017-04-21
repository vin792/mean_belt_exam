var mongoose = require('mongoose')

var ProductSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 1},
    highBid: {username: {type: String}, bid: {type: Number, min: 0}},
    bids: [{username: {type: String, minlength: 1}, bid: {type: Number, min: 0}}]
}, {timestamps: true})

mongoose.model('Product', ProductSchema)