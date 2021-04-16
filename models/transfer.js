const { Schema, Types, model } = require('mongoose');
const { validate } = require('./plugins');
const { timestamps } = require('./schemas');

const schema = new Schema({
  identity: {
    type: Types.ObjectId,
    ref: 'identity',
    required: true,
  },
  self_drive: {
    type: Boolean,
    required: true
  },
  // In minutes
  duration: {
    type: Number,
    required: true
  },
  total_km: {
    type: Number,
    required: true
  },
  start_gps_coords: {
    type: Object
  },
  end_gps_coords: {
    type: Object
  },
  price: {
    type: Number,
    default: 0
  },
  ...timestamps,
});

schema.plugin(validate);

const name = 'transfer';
module.exports = model(name, schema);
