const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/config');
const { user } = require('../models');

exports.register = async (req, res) => {
    try {
        const hashedPassword = bcrypt.hashSync(req.body.password, 8);
        await user.create({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        }, (err, user) => {
            if(err) {
                res.status(500).send({status: 'error', message: err})
                return
            }
            const token = jwt.sign({ id: user._id }, config.secret, {
                expiresIn: 86400
            })
            res.status(200).send({status: 'success', data: { auth: true, token }})
        });

    } catch(e) {
        res.status(500).send({ status:'error', message: e })
    }
}

exports.login = async (req, res) => {
    try {
        await user.findOne({username: req.body.username}, (err, user) => {
            if(err) return res.status(500).send('server error');
            if(!user) {
                return res.status(404).send({status: 'error', message: 'username not found'})
            }
            const passwordValid = bcrypt.compareSync(req.body.password, user.password);
            if (!passwordValid) {
                return res.status(404).send({status: 'error', message: 'password is not valid'})
            }

            const token = jwt.sign({id: user._id}, config.secret, {
                expiresIn: 86400
            });

            return res.status(200).send({status: 'success', data: { auth: true, token }})
        })
    } catch(e) {

    }
}
