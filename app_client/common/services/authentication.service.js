(function(){
  angular
      .module('loct8rApp')
      .service('authentication', authentication);

  authentication.$inject = ['$http','$window'];
  function authentication ($http, $window){

    var saveToken = function(token){
      $window.localStorage['loct8r-token'] = token;
    };

    var getToken = function() {
      return $window.localStorage['loct8r-token'];
    };

    register = function(user) {
      return $http.post('/api/register', user).success(function(data) {
        saveToken(data.token);
      });
    };

    login = function(user) {
      return $http.post('/api/register', user).success(function(data) {
        saveToken(data.token);
      });
    };

    logout = function() {
      $window.localStorage.removeItem('loct8r-token');
    };

    var isLoggedIn = function() {
      var token = getToken();

      if (token) {
        var payload = JSON.parse($window.atob(token.split('.')[1]));

        return payload.exp > Date.now() / 1000;
      } else {
        return false;
      }
    };

    return {
      saveToken: saveToken,
      getToken: getToken,
      register: register,
      login: login
    };
  }
})();
