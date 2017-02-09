var request = require('supertest');
var chai = require('chai');
chai.should();

/*
 * Tests of the User controller
 *
 */
describe('CONTROLLER user', function() {

  /* ************************** */
  /* Set of tests on GET /users */
  /* ************************** */
  describe('GET /users', function() {

    /* GET /users : The response should be a JSON */
    it('should respond with JSON', function(done) {
      request(sails.hooks.http.app)
        .get('/users')
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });

    /* GET /users : The returned JSON should be an array of user */
    it('should be a JSON array of users', function(done) {
      request(sails.hooks.http.app)
        .get('/users')
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);

          // TODO: Test if res is an array of User
          res.body.should.be.instanceof(Array);

          done();
        });
    });
  });


  /* ******************************** */
  /* Set of tests on GET /users/{:id} */
  /* ******************************** */
  describe('GET /users/{:id}', function() {

    /* GET /users/{:id} : The response should be a JSON */
    it('should respond with JSON', function(done) {
      request(sails.hooks.http.app)
        .get('/users')
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);

          done();
        });
    });

    /* GET /users/{:id} : The returned JSON should be a user */
    it('should return a JSON of a user with the id {:id}', function(done) {
      request(sails.hooks.http.app)
        .get('/users/1')
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);

          // TODO: Test if res is a User
          res.body.should.be.instanceof(Object).and.not.instanceof(Array);

          done();
        });
    });
  });

});
