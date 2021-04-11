const { Schema, Types, model } = require('mongoose');
const { paginate, validate } = require('./plugins');
const { timestamps } = require('./schemas');

/**
 * Identities manage login related operations
 */
const name = 'trip';
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
  tagline: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  countries: [{
    type: Types.ObjectId,
    ref: 'country',
    required: true,
  }],
  start_date: {
    type: Date,
    required: true
  },
  end_date: {
    type: Date,
    required: true
  },
  members: [{
    type: Types.ObjectId,
    ref: 'identity',
    required: true
  }],
  planes: [{
    type: Types.ObjectId,
    ref: 'plane'
  }],
  car: {
    type: Types.ObjectId,
    ref: 'car'
  },
  transfers: [{
    type: Types.ObjectId,
    ref: 'transfer'
  }],
  day_plans: [{
    type: Types.ObjectId,
    ref: 'day_plan'
  }],
  accommodations: [{
    type: Types.ObjectId,
    ref: 'accommodation'
  }],
  files: [{
    type: Types.ObjectId,
    ref: 'file'
  }],
  ...timestamps,
});

schema.plugin(paginate);
schema.plugin(validate);

module.exports = model(name, schema);
