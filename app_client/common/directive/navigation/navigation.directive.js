(function () {

  angular
    .module('loct8rApp')
    .directive('navigation', navigation);

  function navigation () {
    return {
      restrict: 'EA',
      templateUrl: '/common/directive/navigation/navigation.template.html'
    };
  }


})();
