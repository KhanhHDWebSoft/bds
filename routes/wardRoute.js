const router = require('express').Router({mergeParams: true});
const wardController = require('../controllers/wardController.js');

router.get('/migrate', wardController.migrateData);

module.exports = router;
