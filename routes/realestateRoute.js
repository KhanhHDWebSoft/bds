const router = require('express').Router({ mergeParams: true });

router.get('/', () => console.log('res'))

module.exports = router;