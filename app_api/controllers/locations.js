var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

/* GET list of locations */
module.exports.locationsListByDistance = function(req, res) {
  sendJSONresponse(res, 200, {'status': 'sucess'});
};

/* GET a location by the id */
module.exports.locationsReadOne = function(req, res) {
  if(req.params && req.params.locationid){
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

/* POST a new location */
/* /api/locations */
module.exports.locationsCreate = function(req, res) {
  sendJSONresponse(res, 200, {'status': 'sucess'});
};

/* PUT /api/locations/:locationid */
module.exports.locationsUpdateOne = function(req, res) {
  sendJSONresponse(res, 200, {'status': 'sucess'});
};

/* DELETE /api/locations/:locationid */
module.exports.locationsDeleteOne = function(req, res) {
  sendJSONresponse(res, 200, {'status': 'sucess'});
};
