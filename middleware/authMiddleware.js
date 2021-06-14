const jwt = require('jsonwebtoken');
const { user: userModel } = require('../models');
const config = require('../config/config')

const isAuthenticated = async (req, res, next) => {
    const token = req.headers['authorization'] || req.headers['Authorization'];
    try {
        const { id } = await jwt.verify(token, config.secret);
        const user = await userModel.findById(id);
        req.user = user;
        req.token = token;
        next();
    } catch(e) {
        res.status(401).json(e);
    }

}

module.exports = {
    isAuthenticated
}
