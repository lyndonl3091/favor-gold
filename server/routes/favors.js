'use strict';

const express = require('express');
const request = require('request');

const Favor = require('../models/favor');

let router = express.Router();

// get ALL favor
router.get('/', (req, res) => {
  Favor.find({}, (err, favor) => {
    res.status(err ? 400 : 200).send(err || favor);
  });
});

// post favors


// update favor

module.exports = router;
