const router = require('express').Router({mergeParams: true});
const districtController = require('../controllers/districtController.js');

router.get('/', districtController.getAllDistrict)
router.get('/migrate', districtController.migrateData)

module.exports = router;
