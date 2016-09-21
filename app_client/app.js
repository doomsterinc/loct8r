angular.module('loct8rApp', ['ngRoute']);

function config ($routeProvider) {
  $routeProvider
      .when('/', {

      })
      .otherwise({redirectTo: '/'});
}

angular
    .module('loct8rApp')
    .config('$routeProvider', config);
