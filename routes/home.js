const express = require('express');
const router = express.Router();

// Rota de home

router.get('/', (req, res) => {

    res.render('index');

})

module.exports = router;
