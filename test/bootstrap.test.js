var sails = require('sails');
var config = require('../config/env/test');
var Promise = require('bluebird');
var Barrels = require('barrels');


var global = module.exports = {
  clearDatabase: function (cb){
    var promises = [];

    /* Destroy Builds */
    promises.push(new Promise(function (resolve, reject) {
      Build.destroy({}).then(records => resolve()).catch(err => reject(err))
    }));
    /* Destroy Message */
    promises.push(new Promise(function (resolve, reject) {
      Message.destroy({}).then(records => resolve()).catch(err => reject(err))
    }));
    /* Destroy Packages */
    promises.push(new Promise(function (resolve, reject) {
      Package.destroy({}).then(records => resolve()).catch(err => reject(err))
    }));
    /* Destroy Votes */
    promises.push(new Promise(function (resolve, reject) {
      Vote.destroy({}).then(records => resolve()).catch(err => reject(err))
    }));
    /* Destroy Tickets */
    promises.push(new Promise(function (resolve, reject) {
      Ticket.destroy({}).then(records => resolve()).catch(err => reject(err))
    }));
    /* Destroy Users */
    promises.push(new Promise(function (resolve, reject) {
      User.destroy({}).then(records => resolve()).catch(err => reject(err))
    }));
    /* Destroy Sequences */
    promises.push(new Promise(function (resolve, reject) {
      Sequence.destroy({}).then(records => resolve()).catch(err => reject(err))
    }));

    /* Wait for all promises call next if no error */
    Promise.all(promises)
      .spread(function(){
        console.log("Cleared all the database");
        cb();
      })
      .catch(function(err){
        /* At least one promise threw an error */
        console.log(err);
        cb(err)
      });
  }
}

before(function(done) {
  // Increase the Mocha timeout so that Sails has enough time to lift.
  this.timeout(30000);

  sails.lift(config, function(err) {
    if (err) return done(err);

    // Load fixtures
    var barrels = new Barrels();

    // Save original objects in `fixtures` variable
    fixtures = barrels.data;

    // Delete everything in the database and then start populating and the app
    global.clearDatabase(function(err){
      if (err) return done(err);

      // Populate the DB
      barrels.populate([
          'user',
          'ticket',
          'vote',
          'package',
          'build',
          'message',
        ],
        function(err) {
          if (err) return done(err);
          done(err, sails);
        }
      );
    })
  });
});

describe('Sails', function() {
  it('should lift sails without errors', function(done) {
    done();
  });
});

after(function(done) {
  /* Clear barrels */
  console.log(); // Skip a line before displaying Sails lowering logs

  // Delete everything in the database and lower the app
  global.clearDatabase(function(err){
    if(err) done(err)

    sails.lower(done);
  })
});
