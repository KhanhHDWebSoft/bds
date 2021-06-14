const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const districtModel = Schema({
    id: {
        type: String,
        default: null,
        unique: true
    },
    _name: {
        type: String,
        required: true,
    },
    _prefix: {
        type: String,
        default: null
    },
    _province_id: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('district', districtModel)
