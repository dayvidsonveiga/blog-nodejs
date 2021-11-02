const express = require('express');
const router = express.Router();

// Rota de login

router.get('/login', (req, res) => {

    res.render('login');

})

module.exports = router;
