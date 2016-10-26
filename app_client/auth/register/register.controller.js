(function() {
  angular
      .module('loct8rApp')
      .controller('registerCtrl', registerCtrl);

  registerCtrl.$inject = ['$location', 'authentication'];
  function registerCtrl($location, authentication){
    var vm = this;

    vm.pageHeader = {
      title: 'Create a new Loct8r account'
    };

    vm.credentials = {
      name: "",
      email: "",
      password: ""
    };

    vm.returnPage = $location.search().page || '/';

    vm.onSubmit = function() {
      
    };
  };
})();
