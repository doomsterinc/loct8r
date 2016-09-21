angular
    .module('loct8rApp')
    .controller('homeCtrl', homeCtrl);

function homeCtrl () {
  var vm = this;
  vm.pageHeader = {
    title: 'Loct8r',
    strapline: 'Find places to work with wifi near you!'
  };
  vm.sidebar = {
    content : "Looking for wifi and a seat? loct8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let loct8r help you find the place you're looking for."
  };
};
