const router = require('express').Router({mergeParams: true});
const cityController = require('../controllers/cityController');

router.get('/migrate', cityController.migrateData)
router.get('/', cityController.getAllCity)

module.exports = router
