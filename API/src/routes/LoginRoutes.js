const express = require('express');
const router = express.Router();

const LoginController = require('../controller/LoginController');


router.post('/', LoginController.login);

router.get('/recoverPassword/:email', LoginController.recoverPassword);


module.exports = router;