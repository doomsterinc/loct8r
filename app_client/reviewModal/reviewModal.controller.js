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
      if (!vm.formData.name || !vm.formData.rating || !vm.formData.reviewText) {
        vm.formError = "All fields required, please try again!";
        return false;
      } else {
        console.log((vm.formData));
        return false;
      }
    };
  }
})();
