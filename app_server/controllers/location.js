/* GET 'home' page */
module.exports.homelist = function(req,res){
  res.render('location-list', {
    title:'Loct8r - find a place to work with wifi',
    pageHeader:{
      title:'Loct8r',
      strapline: 'Find places to work with wifi near you'
    },
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
  res.render('location-info', {title: 'Location Info' });
};
/* GET 'Add new review' page */
module.exports.addReview = function(req,res){
  res.render('location-review-form', { title: 'Add Review'});
};
