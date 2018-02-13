'use strict';

const express = require('express');
const request = require('request');

const Favor = require('../models/favor');

let router = express.Router();

router.get('/favor', (req, res) => {
  Favor.find({}, (err, favor) => {
    res.status(err ? 400 : 200).send(err || favor);
  });
});

module.exports = router;
