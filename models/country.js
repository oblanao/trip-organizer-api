const { Schema, model } = require('mongoose');
const { validate } = require('./plugins');
const { timestamps } = require('./schemas');

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  flag: {
    type: String
  },
  gps_coords: {
    type: Object
  },
  population: {
    type: Number
  },
  climate: {
    type:Object
  },
  featured_photo: {
    type: String
  },
  Photos: [{
    type: String
  }],
  immigration_requirements: {
    type: Object
  },
  covid_requirements: {
    type: Object,
  },
  ...timestamps,
});

schema.plugin(validate);

const name = 'country';
module.exports = model(name, schema);
