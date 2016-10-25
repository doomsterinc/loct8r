(function(){
  angular
      .module('loct8rApp')
      .service('authentication', authentication);

  authentication.$inject = ['$window'];
  function authentication ($window){

    var saveToken = function(token){
      $window.localStorage['loct8r-token'] = token;
    };

    var getToken = function() {
      return $window.localStorage['loct8r-token'];
    };

    return {
      saveToken: saveToken,
      getToken: getToken
    };
  }
})();
