import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  owernName: { type: String },
  dateCreated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Pokemon', schema);
