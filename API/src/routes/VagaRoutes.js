const express = require('express');
const router = express.Router();
const VagaController = require('../controller/VagaController');


router.post('/', VagaController.create)

router.get('/all', VagaController.getAll);

router.get('/myfavorites', VagaController.getMyFavorites);

router.put('/changeStatus/', VagaController.changeStatus);

router.get('/:id', VagaController.getById);

module.exports = router;
