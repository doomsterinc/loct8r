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

    return {
      saveToken: saveToken,
      getToken: getToken,
      register: register,
      login: login
    };
  }
})();
