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
    required: true,
  },
  carrier: {
    type: String,
    required: true,
  },
  plane_segments: [
    {
      type: Types.ObjectId,
      ref: 'plane_segment',
    },
  ],
  included_luggage: {
    num_hand_luggage: {
      type: Number,
      required: true,
    },
    hand_luggage_size: {
      type: Number /* in kg */,
      required: true,
    },
    num_checked_luggage: {
      type: Number,
      required: true,
    },
    cheked_luggage_size: {
      type: Number,
      required: true,
    },
    luggage_cost: {
      type: Number,
    },
  },
  included_meal: {
    type: Boolean,
    required: true,
    default: true,
  },
  price: {
    /* per person */
    type: Number,
    required: true,
  },
  ...timestamps,
});

schema.plugin(validate);

const name = 'plane';
module.exports = model(name, schema);
