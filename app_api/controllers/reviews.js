var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

/* GET a review by the locationid */
module.exports.reviewsReadOne = function(req, res) {
  
};

/* POST a new review */
/* /api/locations/:locationid/review */
module.exports.reviewsCreate = function(req, res) {
  sendJSONresponse(res, 200, {'status': 'sucess'});
};

/* PUT /api/locations/:locationid/reviews/:reviewid */
module.exports.reviewsUpdateOne = function(req, res) {
  sendJSONresponse(res, 200, {'status': 'sucess'});
};

/* DELETE /api/locations/:locationid/reviews/:reviewid */
module.exports.reviewsDeleteOne = function(req, res) {
  sendJSONresponse(res, 200, {'status': 'sucess'});
};
