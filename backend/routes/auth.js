const express  = require('express');
const router = express.Router();

router.get('/' , (req, res) => {
    obj = {
        a : 'Game of Thornes',
        number : 13
    }
    res.json(obj);
})

module.exports = router
