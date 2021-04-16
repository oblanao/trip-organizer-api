const { Schema, Types, model } = require('mongoose');
const { validate } = require('./plugins');
const { timestamps } = require('./schemas');

const schema = new Schema({
  identity: {
    type: Types.ObjectId,
    ref: 'identity',
    required: true,
  },
  name: {
    type: String,
  },
  url: {
    type: String,
  },
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  features: {
    type: Array
  },
  featured_photo: {
    type: String,
  },
  ...timestamps,
});

schema.plugin(validate);

const name = 'car';
module.exports = model(name, schema);
