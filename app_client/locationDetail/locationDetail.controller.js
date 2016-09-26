(function(){
  angular
      .module('loct8rApp')
      .controller('locationDetailCtrl', locationDetailCtrl);

  function locationDetailCtrl() {
    var vm = this;
    vm.pageHeader = {
      title : 'Location Detail page'
    };
  }
})();
