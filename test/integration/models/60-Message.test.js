var request = require('supertest');
var chai = require('chai');
chai.should();

dataMessageM = require('./60-Message.dataM.js');

/*
 * Tests of the Message model
 *
 */
describe('MODEL Message', function() {

  /* ******************************** */
  /* Set of tests on Message.Create() */
  /* ******************************** */
  describe('Message.create()', function() {

    /* Message.create() : Create a message using a complete JSON */
    it('should create a message using a full json', function (done) {
      Message.create(dataMessageM.messageFull)
        .then(function(res) {
          done();
        })
        .catch(done);
    });

    /* Message.create() : Create a message using a minimal JSON with only required information */
    it('should create a Message using minimal json', function (done) {
      Message.create(dataMessageM.messageMinimal)
        .then(function(res) {
          dataMessageM.messageMinimal.id = res.id // Retrieve id to destroy it later
          done();
        })
        .catch(done);
    });
  });


  /* ******************************* */
  /* Set of tests on Message.find()  */
  /* ******************************* */
  describe('Message.find()', function() {

    /* Message.find() : Retrieve all messages in a JSON array */
    it('should return a JSON array of messages', function (done) {
      Message.find()
        .then(function(res) {
          // TODO: Test if res is an array of message
          res.should.be.instanceof(Array);
          done();
        })
        .catch(done);
    });
  });

  /* ********************************* */
  /* Set of tests on Message.findOne() */
  /* ********************************* */
  describe('Message.findOne()', function() {

    /* Message.find() : Retrieve a message in a JSON array */
    it('should return a JSON object of a single message', function (done) {
      Message.findOne(dataMessageM.messageMinimal.id)
        .then(function(res) {
          // TODO: Test if res is a message
          res.should.be.instanceof(Object).and.not.instanceof(Array);
          done();
        })
        .catch(done);
    });
  });

  /* ******************************** */
  /* Set of tests on Message.update() */
  /* ******************************* */
  describe('Message.update()', function() {

    /* Message.update() : Update a Message and retrieve an array of the new Message  */
    it('should update a message', function (done) {
      Message.update(dataMessageM.messageFull.id, dataMessageM.messageFullUpdated)
        .then(function(res) {
          // TODO: Test if res is an array of message
          res.should.be.instanceof(Array);
          done();
        })
       .catch(done);
    });
  });

  /* ********************************* */
  /* Set of tests on Message.Destroy() */
  /* ********************************* */
  describe('Message.Destroy()', function() {

    /* Message.destroy(id) : Delete a single message */
    it('should destroy a message', function (done) {
      Message.destroy(dataMessageM.messageFull.id)
        .then(function(res) {
          res.should.be.instanceof(Array);
          res.length.should.be.equal(1);
          done();
        })
        .catch(done);
    });

    /* Message.destroy([id..]) : Delete several message */
    it('should destroy several messages', function (done) {
      Message.destroy({id : [ dataMessageM.messageMinimal.id ]})
        .then(function(res) {
          res.should.be.instanceof(Array);
          done();
        })
        .catch(done);
    });
  });


  /* ********************************************* */
  /* Clearing data created during Tests of message */
  /* ********************************************* */
  describe('data clearing', function() {
    /* Should remove everything that was created during the tests of message */
    it('should clear all data created during the tests of message', function (done) {
      done();
    });
  });
});
