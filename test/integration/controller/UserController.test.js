var request = require('supertest');
var chai = require('chai');
chai.should();

dataUserC = require('./User.dataC.js');

/*
 * Tests of the User controller
 *
 */
describe('CONTROLLER user', function() {

  /* *************************** */
  /* Set of tests on POST /users */
  /* *************************** */
  describe('POST /users', function() {

    /* POST /users : Create a User using a complete JSON */
    it('should create a user using a full json', function(done) {
      request(sails.hooks.http.app)
        .post('/users')
        .set('Accept', 'application/json')
        .send(dataUserC.userFull)
        .expect(201)
        .end(function(err, res) {
          if (err) return done(err);

          // TODO: Test if res is a User
          res.body.should.be.instanceof(Object);

          done();
        });
    });

    /* POST /users : Create a user using a minimal JSON with only required information */
    it('should create a user using minimal json', function (done) {
      request(sails.hooks.http.app)
        .post('/users')
        .set('Accept', 'application/json')
        .send(dataUserC.userMinimal)
        .expect(201)
        .end(function(err, res) {
          if (err) return done(err);

          // TODO: Test if res is a User
          res.body.should.be.instanceof(Object);

          dataUserC.userMinimal.id = res.body.id // Retrieve id to destroy it later

          done();
        });
    });

    /* User.create() : Try to create a user using an existing email */
    it('should fail to create a user using an existing email', function (done) {
      request(sails.hooks.http.app)
        .post('/users')
        .set('Accept', 'application/json')
        .send(dataUserC.userUsedEmail)
        .expect(400)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });

    /* User.create() : Try to create a user using an existing username */
    it('should fail to create a user using an existing username', function (done) {
      request(sails.hooks.http.app)
        .post('/users')
        .set('Accept', 'application/json')
        .send(dataUserC.userUsedUsername)
        .expect(400)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });


    /* User.create() : Try to create a user using a wrong email (bad format) */
    it('should fail to create a user using an wrong email', function (done) {
      request(sails.hooks.http.app)
        .post('/users')
        .set('Accept', 'application/json')
        .send(dataUserC.userWrongEmail)
        .expect(400)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });

  });



  /* ************************** */
  /* Set of tests on GET /users */
  /* ************************** */
  describe('GET /users', function() {

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
        .get('/users/' + dataUserC.userFull.id)
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

  /* ************************** */
  /* Set of tests on PUT /users */
  /* ************************** */
  describe('PUT /users/{:id}', function() {

    /* PUT /users/{:id} : Update a User and retrieve an array of the new User  */
    it('should update a user', function (done) {
      request(sails.hooks.http.app)
        .put('/users/' + dataUserC.userFull.id)
        .set('Accept', 'application/json')
        .send(dataUserC.userFullUpdated)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);

          // TODO: Test if res is a User
          res.body.should.be.instanceof(Object);

          done();
        });
    });

    /* PUT /users/{:id} : Try to update a User giving him an already used email */
    it('should fail to update a user because email is already used', function (done) {
      request(sails.hooks.http.app)
        .put('/users/' + dataUserC.userFull.id)
        .set('Accept', 'application/json')
        .send(dataUserC.userUsedEmail)
        .expect(400)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });

    /* PUT /users/{:id} : Try to update a User giving him an already used username */
    it('should fail to update a user because username is already used', function (done) {
      request(sails.hooks.http.app)
        .put('/users/' + dataUserC.userFull.id)
        .set('Accept', 'application/json')
        .send(dataUserC.userUsedUsername)
        .expect(400)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });

    /* PUT /users/{:id} : Try to update a User giving him a wrong email (bad format) */
    it('should fail to update a user because username is already used', function (done) {
      request(sails.hooks.http.app)
        .put('/users/' + dataUserC.userFull.id)
        .set('Accept', 'application/json')
        .send(dataUserC.userWrongEmail)
        .expect(400)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
  });

  /* ***************************** */
  /* Set of tests on DELETE /users */
  /* ***************************** */
  describe('DELETE /users/{:id}', function() {

    /* DELETE /users/{:id} : Delete a single user */
    it('should destroy a user', function (done) {
      request(sails.hooks.http.app)
        .delete('/users/' + dataUserC.userFull.id)
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
  });


  /* ******************************************** */
  /* Clearing dataUserC created during Tests of /users */
  /* ******************************************** */
  describe('dataUserC clearing', function() {
    /* Should remove everything that was created during the tests of /users */
    it('should clear all dataUserC created during the tests of /users', function (done) {
      User.destroy({id : [ dataUserC.userMinimal.id ]})
        .then(function(res) {
          done();
        })
        .catch(done);
    });
  });

});
