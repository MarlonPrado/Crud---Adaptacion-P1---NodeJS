const express = require('express');
const router = express.Router();

const usuarioControllers = require('../controllers/usuarioControllers');

router.get('/', usuarioControllers.list);
router.get('/Registro', usuarioControllers.regis);
router.get('/Inicio', usuarioControllers.index);

router.post('/add', usuarioControllers.save);
router.get('/delete/:id', usuarioControllers.delete);

router.get('/update/:id', usuarioControllers.edit);

router.post('/update/:id', usuarioControllers.update);



module.exports = router;
