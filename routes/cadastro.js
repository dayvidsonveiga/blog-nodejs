const express = require('express');
const router = express.Router();

// Rota de cadastro

router.get('/cadastro', (req, res) => {

    res.render('cadastro');

})

module.exports = router;
