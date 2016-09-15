angular.module('loct8rApp', []);

var locationListCtrl = function($scope){
  $scope.data = {
    locations: [{
      name: 'Burguer Queen',
      address : "125 High Street, Reading, RG6 1PS",
      rating : 3,
      facilities : ['Hot Drinks', 'Food', 'Premium wifi'],
      distance : '0.296456',
      _id: '5370a35f2536f6785f8dfb6a'}
    },{
      name: 'Cafe Queen',
      address : "125 High Street, Reading, RG6 1PS",
      rating : 3,
      facilities : ['Hot Drinks', 'Food', 'Premium wifi'],
      distance : '0.296456',
      _id: '5370a35f2536f6785f8dfb6a'}
    },{
      name: 'Bistro Queen',
      address : "125 High Street, Reading, RG6 1PS",
      rating : 3,
      facilities : ['Hot Drinks', 'Food', 'Premium wifi'],
      distance : '0.296456',
      _id: '5370a35f2536f6785f8dfb6a'}
    },{
      name: 'Brecho Queen',
      address : "125 High Street, Reading, RG6 1PS",
      rating : 3,
      facilities : ['Hot Drinks', 'Food', 'Premium wifi'],
      distance : '0.296456',
      _id: '5370a35f2536f6785f8dfb6a'}
    },{
      name: 'Bangalo Queen',
      address : "125 High Street, Reading, RG6 1PS",
      rating : 3,
      facilities : ['Hot Drinks', 'Food', 'Premium wifi'],
      distance : '0.296456',
      _id: '5370a35f2536f6785f8dfb6a'}
    }]
  };
};

angular
    .module('loct8rApp')
    .controller('locationListCtrl', locationListCtrl);
