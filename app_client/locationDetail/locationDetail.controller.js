(function(){
  angular
      .module('loct8rApp')
      .controller('locationDetailCtrl', locationDetailCtrl);

  locationDetailCtrl.$inject = ['$routeParams', '$modal', 'loct8rData'];
  function locationDetailCtrl($routeParams, $modal, loct8rData) {
    var vm = this;
    vm.locationid = $routeParams.locationid;

    loct8rData.locationById(vm.locationid)
        .success(function(data){
          vm.data = {location: data};
          vm.pageHeader = {
            title : vm.data.location.name
          };
        })
        .error(function(e){
          console.log(e);
        });
    vm.popupReviewForm = function () {
      
    };
  }
})();
