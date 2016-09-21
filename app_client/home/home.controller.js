angular
    .module('loct8rApp')
    .controller('homeCtrl', homeCtrl);

function homeCtrl ($scope) {
  $scope.pageHeader = {
    title: 'Loct8r',
    strapline: 'Find places to work with wifi near you!'
  };
  $scope.sidebar = {
    content : 'Looking for wifi and seat etc etc'
  };
};
