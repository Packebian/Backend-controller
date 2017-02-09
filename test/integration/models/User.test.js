var request = require('supertest');
var should = require('should');

/*
 * Tests of the User model
 *
 */
describe('MODEL User', function() {

    /* Set of tests on find() functions of User */
    describe('User.find()', function() {

      /* User.find() : The response should be a JSON array */
      it('should return a JSON array of users', function (done) {
        User.find()
          .then(function(res) {
            // TODO: Test if res is an array of User
            res.should.be.instanceof(Array);
            done();
          })
        .catch(done);
      });
    });

    /* Set of tests on findOne(id) functions of User */
    describe('User.findOne(id)', function() {

      /* User.find(id) : The response should be a JSON array with a single object */
      it('should return a JSON object of a single user', function (done) {
        User.findOne(1)
          .then(function(res) {
            // TODO: Test if res is a User
            res.should.be.instanceof(Object).and.not.instanceof(Array);
            done();
          })
        .catch(done);
      });
    });
});
