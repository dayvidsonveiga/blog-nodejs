const express = require('express');
const router = express.Router();

// Rota de editor

router.get('/editor', (req, res) => {

    res.render('editor');

})

module.exports = router;






