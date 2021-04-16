const { Schema, Types, model } = require('mongoose');
const { validate } = require('./plugins');
const { timestamps } = require('./schemas');

const schema = new Schema({
  identity: {
    type: Types.ObjectId,
    ref: 'identity',
    required: true,
  },
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
  },
  description: {
    type: String,
  },
  featured_photo: {
    type: String,
  },
  photos: {
    type: Array
  },
  star_rating: {
    type: Number
  },
  review_score: {
    type: Object
  },
  review_excerpts: {
    type: Array,
  },
  total_nights: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  room_type: {
    type: String
  },
  gps_coords: {
    type: Object
  },
  features: {
    type: Array
  },
  ...timestamps,
});

schema.plugin(validate);

const name = 'accommodation';
module.exports = model(name, schema);
