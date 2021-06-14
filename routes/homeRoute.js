const router = require('express').Router({mergeParams: true})

router.get('/', (req,res) => {
    res.status(200).json({message: "Welcome home api"});
})

module.exports = router;
