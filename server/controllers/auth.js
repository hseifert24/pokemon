/* eslint-disable new-cap */

import express from 'express';
import User from '../models/user';
import passport from 'passport';

const router = module.exports = express.Router();

// index
router.get('/', (req, res) => {
  User.find().exec((err, pokemon) => {
    res.send({ pokemon });
  });
});

router.post('/register', (req, res) => {
  User.create(req.body, (err, user) => {
    if (!user) {
      return res.status(400).send();
    }

    return res.status(200).send();
  });
});

// login
router.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
  res.send({ payload: req.user });
});
