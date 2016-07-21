/* eslint-disable func-names, no-underscore-dangle */
import jwt from 'jwt-simple';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const Schema = mongoose.Schema;

const saltRounds = 8;

const schema = new Schema({
  email: { type: String, required: true, minlength: 3, index: { unique: true } },
  password: { type: String, required: true, minlength: 6 },
  pokemon: [{ type: mongoose.Schema.ObjectId, ref: 'Pokemon' }],
  dateCreated: { type: Date, default: Date.now },
});

schema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

schema.methods.token = function () {
  const sub = this._id;
  const exp = (Date.now() / 1000) + 60;
  const secret = process.env.SECRET;

  return jwt.encode({ sub, exp }, secret);
};

schema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});

module.exports = mongoose.model('User', schema);
