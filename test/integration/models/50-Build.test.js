"use strict";

var request = require('supertest');
var chai = require('chai');
chai.should();

var dataBuildM = require('./50-Build.dataM.js');

/*
 * Tests of the Build model
 *
 */
describe('MODEL Build', function() {

  /* ****************************** */
  /* Set of tests on Build.Create() */
  /* ****************************** */
  describe('Build.create()', function() {

    /* Build.create() : Create a build using a complete JSON */
    it('should create a build using a full json', function (done) {
      Build.create(dataBuildM.buildFull)
        .then(function(res) {
          dataBuildM.buildFull.id = res.id // Retrieve id to destroy it later
          done();
        })
        .catch(done);
    });

    /* Build.create() : Create a build using a minimal JSON with only required information */
    it('should create a Build using minimal json', function (done) {
      Build.create(dataBuildM.buildMinimal)
        .then(function(res) {
          dataBuildM.buildMinimal.id = res.id // Retrieve id to destroy it later
          done();
        })
        .catch(done);
    });
  });


  /* ***************************** */
  /* Set of tests on Build.find()  */
  /* ***************************** */
  describe('Build.find()', function() {

    /* Build.find() : Retrieve all builds in a JSON array */
    it('should return a JSON array of builds', function (done) {
      Build.find()
        .then(function(res) {
          // TODO: Test if res is an array of build
          res.should.be.instanceof(Array);
          done();
        })
        .catch(done);
    });
  });

  /* ******************************* */
  /* Set of tests on Build.findOne() */
  /* ******************************* */
  describe('Build.findOne()', function() {

    /* Build.find() : Retrieve a build in a JSON array */
    it('should return a JSON object of a single build', function (done) {
      Build.findOne(dataBuildM.buildMinimal.id)
        .then(function(res) {
          // TODO: Test if res is a build
          res.should.be.instanceof(Object).and.not.instanceof(Array);
          done();
        })
        .catch(done);
    });
  });

  /* ****************************** */
  /* Set of tests on Build.update() */
  /* ***************************** */
  describe('Build.update()', function() {

    /* Build.update() : Update a Build and retrieve an array of the new Build  */
    it('should update a build', function (done) {
      Build.update(dataBuildM.buildFull.id, dataBuildM.buildFullUpdated)
        .then(function(res) {
          // TODO: Test if res is an array of build
          res.should.be.instanceof(Array);
          done();
        })
       .catch(done);
    });
  });

  /* ******************************* */
  /* Set of tests on Build.Destroy() */
  /* ******************************* */
  describe('Build.Destroy()', function() {

    /* Build.destroy(id) : Delete a single build */
    it('should destroy a build', function (done) {
      Build.destroy(dataBuildM.buildFull.id)
        .then(function(res) {
          res.should.be.instanceof(Array);
          res.length.should.be.equal(1);
          done();
        })
        .catch(done);
    });

    /* Build.destroy([id..]) : Delete several build */
    it('should destroy several builds', function (done) {
      Build.destroy({id : [ dataBuildM.buildMinimal.id ]})
        .then(function(res) {
          res.should.be.instanceof(Array);
          done();
        })
        .catch(done);
    });
  });


  /* ******************************************* */
  /* Clearing data created during Tests of build */
  /* ******************************************* */
  describe('data clearing', function() {
    /* Should remove everything that was created during the tests of build */
    it('should clear all data created during the tests of build', function (done) {
      done();
    });
  });
});
