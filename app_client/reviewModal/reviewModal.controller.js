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

    vm.onSubmit= function(){
      vm.formError = "";
      if () {

      }else {
        console.log((vm.formData));
        return false;
      }
    };
  }
})();
