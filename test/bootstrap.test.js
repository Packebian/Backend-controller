var sails = require('sails');
var config = require('../config/env/test');
var Barrels = require('barrels');

before(function(done) {
  // Increase the Mocha timeout so that Sails has enough time to lift.
  this.timeout(4000);

  sails.lift(config, function(err) {
    if (err) return done(err);

    // Load fixtures
    var barrels = new Barrels();

    // Save original objects in `fixtures` variable
    fixtures = barrels.data;

    // Populate the DB
    barrels.populate(function(err) {
      done(err, sails);
    });
  });
});

after(function(done) {
  console.log(); // Skip a line before displaying Sails lowering logs
  sails.lower(done);
});
