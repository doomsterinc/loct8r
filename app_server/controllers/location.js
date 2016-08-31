/* GET 'home' page */
module.exports.homelist = function(req,res){
  res.render('location-list', {
    title:'Loct8r - find a place to work with wifi',
    pageHeader:{
      title:'Loct8r',
      strapline: 'Find places to work with wifi near you'
    },
    sidebar: "Looking for wifi and a seat? Loct8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loct8r help you find the place you're looking for.",
    locations:[{
      name: 'Starcups',
      address: '125 High Street, Reading, RG6 1PS',
      rating: 3,
      facilities:['Hot Drinks', 'Food', 'Premium wifi'],
      distance: '100m'
    },{
      name: 'Cafe Hero',
      address: '127 High Street, Reading, RG6 1PS',
      rating: 4,
      facilities:['Hot Drinks', 'Food', 'Premium wifi'],
      distance: '200m'
    },{
      name: 'Burguer Queen',
      address: '130 High Street, Reading, RG6 1PS',
      rating: 2,
      facilities:['Food', 'Premium wifi'],
      distance: '150m'
    }]
  });
};
/* GET 'Location Info' page */
module.exports.locationInfo = function(req,res){
  res.render('location-info', {
    title: 'Starcups',
    pageHeader: {title: 'Starcups'},
    sidebar: {
      context: 'is on Loct8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
      callToAction: 'If you\'ve been and you like it - or if you don\'t please leave a review to help other people just like you.'
    },
  });
};
/* GET 'Add new review' page */
module.exports.addReview = function(req,res){
  res.render('location-review-form', { title: 'Add Review'});
};
