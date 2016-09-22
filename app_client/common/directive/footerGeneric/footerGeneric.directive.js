(function () {

  angular
    .module('loct8rApp')
    .directive('footerGeneric', footerGeneric);

  function footerGeneric () {
    return {
      restrict: 'EA',
      templateUrl: '/common/directive/footerGeneric/footerGeneric.template.html'
    };
  }


})();
