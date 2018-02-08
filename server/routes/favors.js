'use strict';

const express = require('express');
const require = require('request');

const User = require('../models/favor');

let router = express.Router();


router.get('/favor', req, res) => {
  User.find({}, (err, favor) => {
    res.status(err ? 400 : 200).send(err || user);
  });
});
