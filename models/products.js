const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    p_name : String,
    p_des : String,
    price : Number,
    image : String
})

module.exports = mongoose.model('product', productSchema)