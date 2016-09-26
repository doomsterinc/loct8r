(function(){
  angular
      .module('loct8rApp')
      .controller('locationDetailCtrl', locationDetailCtrl);

  locationDetailCtrl.$inject = ['$routeParams'];
  function locationDetailCtrl($routeParams) {
    var vm = this;
    vm.locationid = $routeParams.locationid;
    vm.pageHeader = {
      title : 'Location Detail page'
    };
  }
})();
