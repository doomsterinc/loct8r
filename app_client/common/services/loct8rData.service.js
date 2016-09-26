(function() {

  angular
    .module('loct8rApp')
    .service('loct8rData', loct8rData);

  loct8rData.$inject = ['$http'];
  function loct8rData ($http) {
    var locationByCoords = function (lat, lng) {
      return $http.get('/api/locations?lng=' + lng + '&lat=' + lat + '&maxDistance=20');
    };
    var locationById = function(locationid){
      return $http.get('/api/locations/' + locationid);
    };
    return {
      locationByCoords : locationByCoords,
      locationById : locationById
    };
  }

})();
