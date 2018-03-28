'use strict';

const express = require('express');

const User = require('../models/user');

let router = express.Router();


router.get('/', User.authMiddleware, (req,res) => {
  User.find({}, (err, users) => {
    res.status(err ? 400 : 200).send(err || users)
  });
});

router.get('/profile', User.authMiddleware, (req, res) => {
  res.send(req.user);
});

module.exports = router;
