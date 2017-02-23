var request = require('supertest');
var chai = require('chai');
chai.should();

dataUserM = require('./10-User.dataM.js');

/*
 * Tests of the User model
 *
 */
describe('MODEL User', function() {

  /* ***************************** */
  /* Set of tests on User.Create() */
  /* ***************************** */
  describe('User.create()', function() {

    /* User.create() : Create a user using a complete JSON */
    it('should create a user using a full json', function (done) {
      User.create(dataUserM.userFull)
        .then(function(res) {
          done();
        })
        .catch(done);
    });

    /* User.create() : Create a user using a minimal JSON with only required information */
    it('should create a user using minimal json', function (done) {
      User.create(dataUserM.userMinimal)
        .then(function(res) {
          dataUserM.userMinimal.id = res.id // Retrieve id to destroy it later
          done();
        })
        .catch(done);
    });

    /* User.create() : Try to create a user using an existing email */
    it('should fail to create a user using an existing email', function (done) {
      User.create(dataUserM.userUsedEmail)
        .then(done)
        .catch(function(err){
          done();
        });
    });

    /* User.create() : Try to create a user using an existing username */
    it('should fail to create a user using an existing username', function (done) {
      User.create(dataUserM.userUsedUsername)
        .then(done)
        .catch(function(err){
          done();
        });
    });

    /* User.create() : Try to create a user using a wrong email (bad format) */
    it('should fail to create a user using an wrong email', function (done) {
      User.create(dataUserM.userWrongEmail)
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
      User.findOne(dataUserM.userMinimal.id)
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

    /* User.update() : Update a user and retrieve an array of the new user  */
    it('should update a user', function (done) {
      User.update(dataUserM.userFull.id, dataUserM.userFullUpdated)
        .then(function(res) {
          // TODO: Test if res is an array of user
          res.should.be.instanceof(Array);
          done();
        })
        .catch(done);
    });

    /* User.update() : Try to update a user giving him an already used email */
    it('should fail to update a user because email is already used', function (done) {
      User.update(dataUserM.userFull.id, dataUserM.userUsedEmail)
        .then(done)
        .catch(function(err){
          done();
        });
    });

    /* User.update() : Try to update a user giving him an already used username */
    it('should fail to update a user because username is already used', function (done) {
      User.update(dataUserM.userFull.id, dataUserM.userUsedUsername)
        .then(done)
        .catch(function(err){
          done();
        });
    });

    /* User.update() : Try to update a user giving him a wrong email (bad format) */
    it('should fail to update a user because username is already used', function (done) {
      User.update(dataUserM.userFull.id, dataUserM.userWrongEmail)
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

    /* User.destroy(id) : Delete a single user */
    it('should destroy a user', function (done) {
      User.destroy(dataUserM.userFull.id)
        .then(function(res) {
          res.should.be.instanceof(Array);
          res.length.should.be.equal(1);
          done();
        })
        .catch(done);
    });

    /* User.destroy([id..]) : Delete serveral users */
    it('should destroy several users', function (done) {
      User.destroy({id : [ dataUserM.userMinimal.id ]})
        .then(function(res) {
          res.should.be.instanceof(Array);
          done();
        })
        .catch(done);
    });
  });


  /* ******************************************* */
  /* Clearing data created during Tests of User */
  /* ****************************************** */
  describe('data clearing', function() {
    /* Should remove everything that was created during the tests of User */
    it('should clear all data created during the tests of user', function (done) {
      done()
    });
  });
});
