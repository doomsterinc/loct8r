var mongoose = require('mongoose');
/* Location Schema */
var locationSchema = new mongoose.Schema({
  name: {type: String, required: true},
  address: String,
  rating: {type: Number, "default": 0},
  facilities: [String]
});
