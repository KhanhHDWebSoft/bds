const  { isAuthenticated } = require('../middleware/authMiddleware');

module.exports = (app) => {
    app.use('/api', require('./homeRoute'))
    app.use('/api/user', isAuthenticated, require('./userRoute'))
    app.use('/api/auth', require('./authRoute'))
    app.use('/api/district', require('./districtRoute'))
    app.use('/api/ward', require('./wardRoute'))
    app.use('/api/city', require('./cityRoute'))

    app.use((req, res, next) => {
        let err = new Error('Api route not found')
        err.status = 404;
        next(err);
    })

    app.use((error, req, res, next) => {
        return res.status(error.status || 500).json({
            message: error.message || 'Something went wrong.'
        });
    });
}
