(function(){
  angular
    .modlule('loct8rApp')
    .controller('reviewModal', reviewModal);
  reviewModal.$inject=['$modalInstance'];
  function reviewModal($modalInstance) {
    var vm = this;

    vm.modal = {
      cancel: function(){
        $modalInstance.dismiss('cancel');
      }
    };
  }
})();
