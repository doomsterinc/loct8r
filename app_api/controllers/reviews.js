var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

/* GET a review by the locationid */
module.exports.reviewsReadOne = function(req, res) {
  console.log("Getting single review");
  if (req.params && req.params.locationid && req.params.reviewid) {
    Loc
      .findById(req.params.locationid)
      .select('name reviews')
      .exec(
        function(err, location) {
          console.log(location);
          var response, review;
          if (!location) {
            sendJSONresponse(res, 404, {
              "message": "locationid not found"
            });
            return;
          } else if (err) {
            sendJSONresponse(res, 400, err);
            return;
          }
          if (location.reviews && location.reviews.length > 0) {
            review = location.reviews.id(req.params.reviewid);
            if (!review) {
              sendJSONresponse(res, 404, {"message": "reviewid not found"});
            } else {
              response = {
                location: {
                  name: location.name,
                  id: req.params.locationid
                },
                review: review
              };
              sendJSONresponse(res, 200, response);
            }
          } else {
            sendJSONresponse(res, 404, {
              "message": "No reviews found"
            });
          }
        }
    );
  } else {
    sendJSONresponse(res, 404, {
      "message": "Not found, locationid and reviewid are both required"
    });
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
