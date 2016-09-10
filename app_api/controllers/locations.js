var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var theEarth = (function(){
  var earthRadius = 6371;
  var getDistanceFromRads = function(rads){
    return parseFloat(rads * earthRadius);
  };
  var getRadsFromDistance = function(distance){
    return parseFloat(distance / earthRadius);
  };
  return {
    getDistanceFromRads : getDistanceFromRads,
    getRadsFromDistance : getRadsFromDistance
  };
})();

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

/* GET list of locations */
module.exports.locationsListByDistance = function(req, res) {
  var lng = parseFloat(req.query.lng);
  var lat = parseFloat(req.query.lat);
  var maxDistance = parseFloat(req.query.maxDistance);
  var point = {
    type = "Point",
    coordinates : [lng, lat]
  };
  var geoOptions = {
    spherical : true,
    maxDistance: theEarth.getRadsFromDistance(maxDistance);
  };
  Loc.geoNear(point, geoOptions, callback);
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
