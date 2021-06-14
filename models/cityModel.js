const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cityModel =  Schema({
    id: {
        type: String,
        require: true,
        unique: true
    },
    _name: {
        type: String,
        require: true
    },
    _code: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('city', cityModel)
