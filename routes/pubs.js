const express = require('express');
const router = express.Router();

// Rota de pubs

router.get('/pubs', (req, res) => {

    res.render('pubs');

})

module.exports = router;
