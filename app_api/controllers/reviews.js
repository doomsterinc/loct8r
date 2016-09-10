var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

/* GET a review by the locationid */
module.exports.reviewsReadOne = function(req, res) {
  if(req.params && req.params.locationid && req.params.reviewid){
    Loc
        .findById(req.params.locationid)
        .exec(function(err, location){
          if(!location){
            sendJSONresponse(res, 404, {"message": "locationid not found"});
            return;
          }else if (err) {
            sendJSONresponse(res, 404, err);
            return;
          }
          sendJSONresponse(res, 200, location);
        });
  } else {
    sendJSONresponse(res, 404, {"message" : "No locationid in request"});
  }
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
