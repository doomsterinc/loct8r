var mongoose = require('mongoose');
var gracefulShutdown;

var dbURI = 'mongodb://localhost/Loct8r';
mongoose.connect(dbURI);

/*events mongoose*/
mongoose.connection.on('connected', function(){
  console.log('Mongoose connected ' + dbURI);
});
mongoose.connection.on('error', function(err){
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function(){
  console.log('Mongoose disconnected');
});

gracefulShutdown = function(msg, callback){
  mongoose.connection.close(function(){
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
};

/*for restarts of nodemon*/
process.once('SIGUSR2', function(){
  gracefulShutdown('nodemon restart', function(){
    process.kill(process.pid, 'SIGUSR2');
  });
});
/*for close of application*/
process.on('SIGNIT', function(){
  gracefulShutdown('app termination', function(){
    process.exit(0);
  });
});
/*for close application in Heroku*/
process.on('SIGTERM', function(){
  gracefulShutdown('Heroku app shutdown', function(){
    process.exit(0);
  });
});

require('./locations');
