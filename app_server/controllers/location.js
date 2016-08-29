/* GET 'home' page */
module.exports.homelist = function(req,res){
  res.render('location-list', { title: 'Home' });
};
/* GET 'Location Info' page */
module.exports.locationInfo = function(req,res){
  res.render('location-info', {title: 'Location Info' });
};
/* GET 'Add new review' page */
module.exports.addReview = function(req,res){
  res.render('index', { title: 'Add Review'});
};
