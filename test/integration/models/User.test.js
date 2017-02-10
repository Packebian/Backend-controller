var request = require('supertest');
var chai = require('chai');
chai.should();

data = require('./User.data.js');

/*
 * Tests of the User model
 *
 */
describe('MODEL User', function() {

  /* ***************************** */
  /* Set of tests on User.Create() */
  /* ***************************** */
  describe('User.create()', function() {

    /* User.create() : Create a User using a complete JSON */
    it('should create a user using a full json', function (done) {
      User.create(data.userFull)
        .then(function(res) {
          done();
        })
        .catch(done);
    });

    /* User.create() : Create a user using a minimal JSON with only required information */
    it('should create a user using minimal json', function (done) {
      User.create(data.userMinimal)
        .then(function(res) {
          data.userMinimal.id = res.id // Retrieve id to destroy it later
          done();
        })
        .catch(done);
    });

    /* User.create() : Try to create a user using an existing email */
    it('should fail to create a user using an existing email', function (done) {
      User.create(data.userUsedEmail)
        .then(done)
        .catch(function(err){
          done();
        });
    });

    /* User.create() : Try to create a user using an existing username */
    it('should fail to create a user using an existing username', function (done) {
      User.create(data.userUsedUsername)
        .then(done)
        .catch(function(err){
          done();
        });
    });

    /* User.create() : Try to create a user using a wrong email (bad format) */
    it('should fail to create a user using an wrong email', function (done) {
      User.create(data.userWrongEmail)
        .then(done)
        .catch(function(err){
          done();
        });
    });
  });


  /* **************************** */
  /* Set of tests on User.find()  */
  /* **************************** */
  describe('User.find()', function() {

    /* User.find() : Retrieve all users in a JSON array */
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

  /* ****************************** */
  /* Set of tests on User.findOne() */
  /* ****************************** */
  describe('User.findOne()', function() {

    /* User.find() : Retrieve a user in a JSON array */
    it('should return a JSON object of a single user', function (done) {
      User.findOne(data.userMinimal.id)
        .then(function(res) {
          // TODO: Test if res is a User
          res.should.be.instanceof(Object).and.not.instanceof(Array);
          done();
        })
        .catch(done);
    });
  });

  /* ***************************** */
  /* Set of tests on User.update() */
  /* **************************** */
  describe('User.update()', function() {

    /* User.update() : Update a User and retrieve an array of the new User  */
    it('should update a user', function (done) {
      User.update(data.userFull.id, data.userFullUpdated)
        .then(function(res) {
          // TODO: Test if res is an array of User
          res.should.be.instanceof(Array);
          done();
        })
        .catch(done);
    });

    /* User.update() : Try to update a User giving him an already used email */
    it('should fail to update a user because email is already used', function (done) {
      User.update(data.userFull.id, data.userUsedEmail)
        .then(done)
        .catch(function(err){
          done();
        });
    });

    /* User.update() : Try to update a User giving him an already used username */
    it('should fail to update a user because username is already used', function (done) {
      User.update(data.userFull.id, data.userUsedUsername)
        .then(done)
        .catch(function(err){
          done();
        });
    });

    /* User.update() : Try to update a User giving him a wrong email (bad format) */
    it('should fail to update a user because username is already used', function (done) {
      User.update(data.userFull.id, data.userWrongEmail)
        .then(done)
        .catch(function(err){
          done();
        });
    });
  });

  /* ****************************** */
  /* Set of tests on User.Destroy() */
  /* ****************************** */
  describe('User.Destroy()', function() {

    /* User.delete(id) : Delete a single user */
    it('should destroy a user', function (done) {
      User.destroy(data.userFull.id)
        .then(function(res) {
          done();
        })
        .catch(done);
    });

    /* User.destroy([id..]) : Delete serveral users */
    it('should destroy several users', function (done) {
      User.destroy({id : [ data.userMinimal.id ]})
        .then(function(res) {
          done();
        })
        .catch(done);
    });
  });


  /* ****************************************** */
  /* Clearing data created during Tests of User */
  /* ****************************************** */
  describe('Data clearing', function() {
    /* Should remove everything that was created during the tests of User */
    it('should clear all data created during the tests of User', function (done) {
      done()
    });
  });
});
