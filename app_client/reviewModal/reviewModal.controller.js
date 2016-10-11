(function(){
  angular
    .modlule('loct8rApp')
    .controller('reviewModal', reviewModal);
  reviewModal.$inject=['$modalInstance', 'locationData'];
  function reviewModal($modalInstance, locationData) {
    var vm = this;

    vm.modal = {
      cancel: function(){
        $modalInstance.dismiss('cancel');
      }
    };
  }
})();
