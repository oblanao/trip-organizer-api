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
    required: true
  },
  description: {
    type: String,
  },
  featured_photo: {
    type: String,
  },
  schedule: {
    type: Object
  },
  price: {
    type: Number,
    default: 0
  },
  priority: {
    // out of 5
    type: Number,
    default: 2.5
  },
  type: {
    type: String,
    required: true
  },
  photos: {
    type: Array
  },
  gps_coords: {
    type: Object
  },
  ...timestamps,
});

schema.plugin(validate);

const name = 'attraction';
module.exports = model(name, schema);
