'use strict';

const express = require('express');
const request = require('request');

const User = require('../models/user');

let router = express.Router();


router.get('/', User.authMiddleware, (req,res) => {
  User.find({}, (err, users) => {
    res.status(err ? 400 : 200).send(err || users)
  })
})

module.exports = router;
