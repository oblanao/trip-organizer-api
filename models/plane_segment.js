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
  ...timestamps,
});

schema.plugin(validate);

const name = 'plane_segment';
module.exports = model(name, schema);
