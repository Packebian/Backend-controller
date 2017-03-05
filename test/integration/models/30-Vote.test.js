"use strict";

var request = require('supertest');
var chai = require('chai');
chai.should();

var dataVoteM = require('./30-Vote.dataM.js');

/*
 * Tests of the Vote model
 *
 */
describe('MODEL Vote', function() {

  /* ***************************** */
  /* Set of tests on Vote.Create() */
  /* ***************************** */
  describe('Vote.create()', function() {

    /* Vote.create() : Create a vote using a complete JSON */
    it('should create a vote using a full json', function (done) {
      Vote.create(dataVoteM.voteFull)
        .then(function(res) {
          dataVoteM.voteFull.id = res.id // Retrieve id to destroy it later
          done();
        })
        .catch(done);
    });

    /* Vote.create() : Create a vote using a minimal JSON with only required information */
    it('should create a vote using minimal json', function (done) {
      Vote.create(dataVoteM.voteMinimal)
        .then(function(res) {
          dataVoteM.voteMinimal.id = res.id // Retrieve id to destroy it later
          done();
        })
        .catch(done);
    });
  });


  /* **************************** */
  /* Set of tests on Vote.find()  */
  /* **************************** */
  describe('Vote.find()', function() {

    /* Vote.find() : Retrieve all votes in a JSON array */
    it('should return a JSON array of votes', function (done) {
      Vote.find()
        .then(function(res) {
          // TODO: Test if res is an array of vote
          res.should.be.instanceof(Array);
          done();
        })
        .catch(done);
    });
  });

  /* ****************************** */
  /* Set of tests on Vote.findOne() */
  /* ****************************** */
  describe('Vote.findOne()', function() {

    /* Vote.find() : Retrieve a vote in a JSON array */
    it('should return a JSON object of a single vote', function (done) {
      Vote.findOne(dataVoteM.voteMinimal.id)
        .then(function(res) {
          // TODO: Test if res is a vote
          res.should.be.instanceof(Object).and.not.instanceof(Array);
          done();
        })
        .catch(done);
    });
  });

  /* ***************************** */
  /* Set of tests on Vote.update() */
  /* **************************** */
  describe('Vote.update()', function() {

    /* Vote.update() : Update a vote and retrieve an array of the new vote  */
    it('should update a vote', function (done) {
      Vote.update(dataVoteM.voteFull.id, dataVoteM.voteFullUpdated)
        .then(function(res) {
          // TODO: Test if res is an array of vote
          res.should.be.instanceof(Array);
          done();
        })
       .catch(done);
    });
  });

  /* ****************************** */
  /* Set of tests on Vote.Destroy() */
  /* ****************************** */
  describe('Vote.Destroy()', function() {

    /* Vote.destroy(id) : Delete a single vote */
    it('should destroy a vote', function (done) {
      Vote.destroy(dataVoteM.voteFull.id)
        .then(function(res) {
          res.should.be.instanceof(Array);
          res.length.should.be.equal(1);
          done();
        })
        .catch(done);
    });

    /* Vote.destroy([id..]) : Delete several vote */
    it('should destroy several votes', function (done) {
      Vote.destroy({id : [ dataVoteM.voteMinimal.id ]})
        .then(function(res) {
          res.should.be.instanceof(Array);
          done();
        })
        .catch(done);
    });
  });


  /* ****************************************** */
  /* Clearing data created during Tests of Vote */
  /* ****************************************** */
  describe('data clearing', function() {
    /* Should remove everything that was created during the tests of vote */
    it('should clear all data created during the tests of vote', function (done) {
      done();
    });
  });
});
