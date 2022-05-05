const express = require('express');
const router = express.Router();

const usuarioControllers = require('../controllers/usuarioControllers');

router.get('/', usuarioControllers.list);
router.post('/add', usuarioControllers.save);

module.exports = router;
