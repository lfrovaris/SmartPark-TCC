const express = require('express');
const router = express.Router();

const MotoristaController = require('../controller/MotoristaController');

//../motorista/
router.post('/', MotoristaController.create);
//../motorista/ID
router.put('/:id', MotoristaController.update);
//../motorista/filter/all
router.get('/all', MotoristaController.getAll);

router.get('/:id', MotoristaController.getById);

module.exports = router;