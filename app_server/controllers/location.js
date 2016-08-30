/* GET 'home' page */
module.exports.homelist = function(req,res){
  res.render('location-list', {
    title:'Loct8r - find a place to work with wifi',
    pageHeader:{
      title:'Loct8r',
      strapline: 'Find places to work with wifi near you'
    }
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
