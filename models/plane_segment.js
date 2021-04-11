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
  takeoff_time: {
    type: Date,
    required: true
  },
  takeoff_airport: {
    type: String,
    required: true,
  },
  land_time: {
    type: Date,
    required: true
  },
  land_airport: {
    type: Date,
    required: true
  },
  /* If positive number, means origin is later than destination. i.e.: RO vs UK, value is 2 */
  timezone_origin_vs_destination: {
    type: Number,
  },
  ...timestamps,
});

schema.plugin(validate);

const name = 'plane_segment';
module.exports = model(name, schema);
