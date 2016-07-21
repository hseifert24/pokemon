/* eslint-disable one-var, func-names, prefer-arrow-callback */
import User from '../models/user';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

passport.use(new LocalStrategy({ usernameField: 'email' },
  (email, password, done) => {
    User.findOne({ email }).populate('pokemon').exec((err, user) => {
      if (err) { return done(err); }
      if (!user || !user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect credentials.' });
      }
      return done(null, user);
    });
  }));
