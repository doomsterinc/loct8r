var request = require('request');
var apiOptions = {
  server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'http://arcane-fortress-27171.herokuapp.com/';
}

// format distance
var _isNumeric = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
var _formatDistance = function (distance) {
  var numDistance, unit;
  if (distance && _isNumeric(distance)) {
    if (distance > 1) {
      numDistance = parseFloat(distance).toFixed(1);
      unit = 'km';
    } else {
      numDistance = parseInt(distance * 1000,10);
      unit = 'm';
    }
    return numDistance + unit;
  } else {
    return "?";
  }
};

//render Homepage
var renderHomepage = function(req, res, responseBody){
  var message;
  if (!(responseBody instanceof Array)) {
    message = "API lookup error";
    responseBody = [];
  } else {
    if (!responseBody.length) {
      message = "No places found nearby";
    }
  }
  res.render('locations-list', {
      title: 'loct8r - find a place to work with wifi',
      pageHeader: {
          title: 'loct8r',
          strapline: 'Find places to work with wifi near you!'
      },
      sidebar: "Looking for wifi and a seat? loct8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let loct8r help you find the place you're looking for.",
      locations: responseBody,
      message : message
  });
};

//render Detail page
var renderDetailPage = function (req, res, locDetail){
  res.render('location-info', {
      title: locDetail.name,
      pageHeader: {
          title: locDetail.name
      },
      sidebar: {
          context: 'is on loct8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
          callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
      },
      location: locDetail
  });
};
//treating errors in location info details
var _showError = function(req, res, status){
  
};
/* GET 'home' page */
module.exports.homelist = function(req, res) {
  var requestOptions, path;
  path = '/api/locations'
  requestOptions = {
    url : apiOptions.server + path,
    method : "GET",
    json : {},
    qs : {
      lng : -0.7992599,
      lat : 51.378091,
      maxDistance : 20
    }
  };
  request(requestOptions, function(err, response, body) {
      var i, data;
      data = body;
      if (response.statusCode === 200 && data.length) {
        for (i = 0; i < data.length; i++) {
          data[i].distance = _formatDistance(data[i].distance);
        }
      }
      renderHomepage(req, res, data);
    }
  );
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res) {
  var requestOptions, path;
  path = "/api/locations/" + req.params.locationid;
  requestOptions = {
    url : apiOptions.server + path,
    method : "GET",
    json: {}
  };
  request(requestOptions, function(err, response, body){
    var data = body;
    if (response.statusCode === 200) {
      data.coords = {
        lng : body.coords[0],
        lat : body.coords[1]
      };
      renderDetailPage(req, res, data);
    } else {
      _showError(req, res, response.statusCode);
    }
  });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review Starcups on loct8r',
        pageHeader: {
            title: 'Review Starcups'
        }
    });
};
