/* eslint-disable new-cap */

import express from 'express';
import passport from 'passport';
import Pokemon from '../models/pokemon';
const router = module.exports = express.Router();
const auth = passport.authenticate('jwt', { session: false });
// index
router.get('/', auth, (req, res) => {
  Pokemon.find().exec((err, pokemon) => {
    res.send({ pokemon });
  });
});

router.post('/', auth, (req, res) => {
  Pokemon.create(req.body, (err, pokemon) => {
    res.send({ pokemon });
  });
});
