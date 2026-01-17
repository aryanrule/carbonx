const express = require('express');
const router = express.Router();

const { login , signup} = require('../Controller/Auth');

router.use('/login' , login);
router.use('/signup' , signup);

module.exports = router; 
