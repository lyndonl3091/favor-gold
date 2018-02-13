'use strict'

const express = require('express');

let router = express.Router();

router.use('/users', require('./users'));
router.use('/favors', require('./favors'));

module.exports = router;
