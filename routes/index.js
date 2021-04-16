/* TODO: add routes for all models */

const accommodation = require('./accommodation');
const attraction = require('./attraction');
const car = require('./car');
const country = require('./country');
const identity = require('./identity');
const plane = require('./plane');
const planeSegment = require('./plane-segment');
const todo = require('./todo');
const transfer = require('./transfer');
const trip = require('./trip');

module.exports = {
  accommodation,
  attraction,
  car,
  country,
  identity,
  plane,
  planeSegment,
  todo,
  transfer,
  trip,
};
