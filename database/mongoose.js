const mongoose = require('mongoose');
require('dotenv').config();

const connect = () => {
    const address = process.env.MONGODB_URI;
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }

    mongoose
        .connect(address, options)
        .catch(e => console.error(e))
        .then(() => console.log('connect to mongodb'))
}

module.exports = {
    connect
}
