const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wardModel = Schema({
    id: {
        type: String,
        require: true,
        unique: true
    },
    _name: {
        type: String,
        require: true
    },
    _prefix: {
        type: String,
        require: true
    },
    _province_id: {
        type: String,
        require: true
    },
    _district_id: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('ward', wardModel)
