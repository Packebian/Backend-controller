var request = require('supertest');
var chai = require('chai');
chai.should();

dataTicketM = require('./Ticket.dataM.js');

/*
 * Tests of the Ticket model
 *
 */
describe('MODEL Ticket', function() {

  /* ******************************* */
  /* Set of tests on Ticket.Create() */
  /* ******************************* */
  describe('Ticket.create()', function() {

    /* Ticket.create() : Create a Ticket using a complete JSON */
    it('should create a ticket using a full json', function (done) {
      Ticket.create(dataTicketM.ticketFull)
        .then(function(res) {
          done();
        })
        .catch(done);
    });

    /* Ticket.create() : Create a Ticket using a minimal JSON with only required information */
    it('should create a user using minimal json', function (done) {
      Ticket.create(dataTicketM.ticketMinimal)
        .then(function(res) {
          dataTicketM.ticketMinimal.id = res.id // Retrieve id to destroy it later
          done();
        })
        .catch(done);
    });
  });


  /* ****************************** */
  /* Set of tests on Ticket.find()  */
  /* ****************************** */
  describe('Ticket.find()', function() {

    /* Ticket.find() : Retrieve all tickets in a JSON array */
    it('should return a JSON array of tickets', function (done) {
      Ticket.find()
        .then(function(res) {
          // TODO: Test if res is an array of ticket
          res.should.be.instanceof(Array);
          done();
        })
        .catch(done);
    });
  });

  /* ******************************** */
  /* Set of tests on Ticket.findOne() */
  /* ******************************** */
  describe('Ticket.findOne()', function() {

    /* Ticket.find() : Retrieve a Ticket in a JSON array */
    it('should return a JSON object of a single ticket', function (done) {
      Ticket.findOne(dataTicketM.ticketMinimal.id)
        .then(function(res) {
          // TODO: Test if res is a User
          res.should.be.instanceof(Object).and.not.instanceof(Array);
          done();
        })
        .catch(done);
    });
  });

  /* ******************************* */
  /* Set of tests on Ticket.update() */
  /* ****************************** */
  describe('Ticket.update()', function() {

    /* Ticket.update() : Update a Ticket and retrieve an array of the new Ticket  */
    it('should update a ticket', function (done) {
      Ticket.update(dataTicketM.ticketFull.id, dataTicketM.ticketFullUpdated)
        .then(function(res) {
          // TODO: Test if res is an array of ticket
          res.should.be.instanceof(Array);
          done();
        })
       .catch(done);
    });
  });

  /* ******************************** */
  /* Set of tests on Ticket.Destroy() */
  /* ******************************** */
  describe('Ticket.Destroy()', function() {

    /* Ticket.destroy(id) : Delete a single ticket */
    it('should destroy a ticket', function (done) {
      Ticket.destroy(dataTicketM.ticketFull.id)
        .then(function(res) {
          done();
        })
        .catch(done);
    });

    /* User.destroy([id..]) : Delete several ticket */
    it('should destroy several tickets', function (done) {
      Ticket.destroy({id : [ dataTicketM.ticketMinimal.id ]})
        .then(function(res) {
          done();
        })
        .catch(done);
    });
  });


  /* ******************************************** */
  /* Clearing dataTicketM created during Tests of Ticket */
  /* ******************************************** */
  describe('dataTicketM clearing', function() {
    /* Should remove everything that was created during the tests of User */
    it('should clear all dataTicketM created during the tests of Ticket', function (done) {
      done();
    });
  });
});
