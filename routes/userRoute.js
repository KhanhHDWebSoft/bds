const userController = require('../controllers/userController')

const router = require('express').Router({ mergeParams: true });

router.get('/', userController.getUsers)
router.get('/:id/get', userController.getUserById)
router.put('/:id/update', userController.updateUserById)
router.delete(':id/delete', userController.deleteUserById)

module.exports = router;
