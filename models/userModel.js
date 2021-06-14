const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'user'
    },
    profileImage: {
        type: String,
        default: 'https://listing-tools.s3.amazonaws.com/default_user.png'
    }
})

module.exports = mongoose.model('user', userSchema)
