angular.module('loct8rApp', []);

// format distance
var _isNumeric = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
var formatDistance = function () {
  return function (distance) {
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
};

var ratingStars = function () {
  return {
    scope : {
      thisRating : '=rating'
    },
    templateUrl : "/angular/rating-stars.html"
  };
};

//console.log("Hello from the Angular");
var locationListCtrl = function($scope, loct8rData, geolocation) {
  $scope.message = "Checking your location";
  $scope.getData = function (position) {
    $scope.message = "Searching for nearby places";
    loct8rData
        .success(function(data){
          $scope.message = data.length > 0 ? "": "No locations found";
          $scope.data = {locations: data};
        })
        .error(function(e){
          $scope.message = "Sorry, something's gone wrong";
        });
  };
  $scope.showError =function (error) {
    $scope.$apply(function(){
      $scope.message = error.message;
    });
  };
  $scope.noGeo = function(){
    $scope.$apply(function(){
      $scope.message = "Geolocation not supported by this browser";
    });
  };

  geolocation.getPosition($scope.getData, $scope.showError, $scope.noGeo);
};

var loct8rData = function($http){
  return $http.get('/api/locations?lng=-0.7992599&lat=51.378091&maxDistance=20');
  // static data for tests
  // [{
  //     name: 'Burger Queen',
  //     address: '125 High Street, Reading, RG6 1PS',
  //     rating: 3,
  //     facilities: ['Hot drinks', 'Food', 'Premium wifi'],
  //     distance: '0.296456',
  //     _id: '5370a35f2536f6785f8dfb6a'
  //   },{
  //     name: 'Costy',
  //     address: '125 High Street, Reading, RG6 1PS',
  //     rating: 5,
  //     facilities: ['Hot drinks', 'Food', 'Alcoholic drinks'],
  //     distance: '0.7865456',
  //     _id: '5370a35f2536f6785f8dfb6a'
  //   },{
  //     name: 'Cafe Hero',
  //     address: '125 High Street, Reading, RG6 1PS',
  //     rating: 0,
  //     facilities: ['Hot drinks', 'Food', 'Premium wifi'],
  //     distance: '0.94561236',
  //     _id: '5370a35f2536f6785f8dfb6a'
  //   },{
  //     name: 'Starcups',
  //     address: '125 High Street, Reading, RG6 1PS',
  //     rating: 1,
  //     facilities: ['Hot drinks', 'Food', 'Cold drinks'],
  //     distance: '1.06548',
  //     _id: '5370a35f2536f6785f8dfb6a'
  //   },{
  //     name: 'Simon\'s cafe',
  //     address: '125 High Street, Reading, RG6 1PS',
  //     rating: 3,
  //     facilities: ['Hot drinks', 'Food', 'Premium wifi'],
  //     distance: '2.3654',
  //     _id: '5370a35f2536f6785f8dfb6a'
  //   },{
  //     name: 'Sally\'s pub',
  //     address: '125 High Street, Reading, RG6 1PS',
  //     rating: 5,
  //     facilities: ['Hot drinks', 'Food', 'Alcoholic drinks'],
  //     distance: '4.213654',
  //     _id: '5370a35f2536f6785f8dfb6a'
  //   }];
};
var geolocation = function(){
  var getPosition = function(cbSuccess, cbError, cbNoGeo){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(cbSuccess, cbError);
    } else {
      cbNoGeo();
    }
  };
  return {
    getPosition : getPosition;
  };
};
angular
    .module('loct8rApp')
    .controller('locationListCtrl', locationListCtrl)
    .filter('formatDistance', formatDistance)
    .directive('ratingStars', ratingStars)
    .service('loct8rData', loct8rData)
    .service('geolocation', geolocation);
