const { user: userModel } = require('../models');
exports.getUsers = async (req, res, next) => {
    try {
        const users = await userModel.find();
        console.log(users)
        res.status(200).json({ status: 'success', data: users })
    } catch(e) {
        next(e);
    }
}

exports.getUserById = async (req, res, next) => {
    try {
        const user = await req.user;
        let response = await userModel.findById(user._id);
        delete response.password;
        res.status(200).json(response);
    } catch(e) {
        next(e);
    }
}

exports.deleteUserById = async => {

}

exports.updateUserById = async => {

}
