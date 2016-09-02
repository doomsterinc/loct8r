var mongoose = require('mongoose');
/* Review Schema */
var reviewSchema = new mongoose.Schema({
  author: String,
  rating: {type: Number, required: true, min: 0, max: 5}
  reviewText: String,
  createdOn: {type: Date, default: Date.now}
});
/* Location Schema */
var locationSchema = new mongoose.Schema({
  name: {type: String, required: true},
  address: String,
  rating: {type: Number, "default": 0, min: 0, max: 5},
  facilities: [String],
  coords: {type: Number, index: '2dsphere'}
});
