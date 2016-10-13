(function(){
  angular
    .modlule('loct8rApp')
    .controller('reviewModal', reviewModal);
  reviewModal.$inject=['$modalInstance', 'loct8rData', 'locationData'];
  function reviewModal($modalInstance, loct8rData, locationData) {
    var vm = this;

    vm.onSubmit= function(){
      vm.formError = "";
      if (!vm.formData.name || !vm.formData.rating || !vm.formData.reviewText) {
        vm.formError = "All fields required, please try again!";
        return false;
      } else {
        vm.doAddReview(vm.locationData.locationid, vm.formData);
      }
    };

    vm.doAddReview = function(locationid, formData){
      loct8rData.addReviewById(locationid, {
        author: formData.name,
        rating: formData.rating,
        reviewText: formData.reviewText
      })
        .success(function(data){
          vm.modal.close(data);
        })
        .error(function(data){
          vm.formError = "Your review has not been saved, try again!";
        });
    };

    vm.modal = {
      close: function(result){
        $modalInstance.close(result);
      },
      cancel: function(){
        $modalInstance.dismiss('cancel');
      }
    };
  }
})();
