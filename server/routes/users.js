'use strict';

const express = require('express');
const require = require('request');

const User = require('../models/user');

let router = express.Router();


router.get('/', User.authMiddleware, (req, res) => {
  User.find({}, (err, user) => {
    res.status(err ? 400 : 200).send(err || user);
  });
});

module.exports = router;
