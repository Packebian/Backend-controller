var request = require('supertest');
var chai = require('chai');
chai.should();

dataPackageM = require('./40-Package.dataM.js');

/*
 * Tests of the Package model
 *
 */
describe('MODEL Package', function() {

  /* ******************************** */
  /* Set of tests on Package.Create() */
  /* ******************************** */
  describe('Package.create()', function() {

    /* Package.create() : Create a package using a complete JSON */
    it('should create a package using a full json', function (done) {
      Package.create(dataPackageM.packageFull)
        .then(function(res) {
          done();
        })
        .catch(done);
    });

    /* Package.create() : Create a package using a minimal JSON with only required information */
    it('should create a Package using minimal json', function (done) {
      Package.create(dataPackageM.packageMinimal)
        .then(function(res) {
          dataPackageM.packageMinimal.id = res.id // Retrieve id to destroy it later
          done();
        })
        .catch(done);
    });
  });


  /* ******************************* */
  /* Set of tests on Package.find()  */
  /* ******************************* */
  describe('Package.find()', function() {

    /* Package.find() : Retrieve all packages in a JSON array */
    it('should return a JSON array of packages', function (done) {
      Package.find()
        .then(function(res) {
          // TODO: Test if res is an array of package
          res.should.be.instanceof(Array);
          done();
        })
        .catch(done);
    });
  });

  /* ********************************* */
  /* Set of tests on Package.findOne() */
  /* ********************************* */
  describe('Package.findOne()', function() {

    /* Package.find() : Retrieve a package in a JSON array */
    it('should return a JSON object of a single package', function (done) {
      Package.findOne(dataPackageM.packageMinimal.id)
        .then(function(res) {
          // TODO: Test if res is a package
          res.should.be.instanceof(Object).and.not.instanceof(Array);
          done();
        })
        .catch(done);
    });
  });

  /* ******************************** */
  /* Set of tests on Package.update() */
  /* ******************************* */
  describe('Package.update()', function() {

    /* Package.update() : Update a Package and retrieve an array of the new Package  */
    it('should update a package', function (done) {
      Package.update(dataPackageM.packageFull.id, dataPackageM.packageFullUpdated)
        .then(function(res) {
          // TODO: Test if res is an array of package
          res.should.be.instanceof(Array);
          done();
        })
       .catch(done);
    });
  });

  /* ********************************* */
  /* Set of tests on Package.Destroy() */
  /* ********************************* */
  describe('Package.Destroy()', function() {

    /* Package.destroy(id) : Delete a single package */
    it('should destroy a package', function (done) {
      Package.destroy(dataPackageM.packageFull.id)
        .then(function(res) {
          res.should.be.instanceof(Array);
          res.length.should.be.equal(1);
          done();
        })
        .catch(done);
    });

    /* Package.destroy([id..]) : Delete several package */
    it('should destroy several packages', function (done) {
      Package.destroy({id : [ dataPackageM.packageMinimal.id ]})
        .then(function(res) {
          res.should.be.instanceof(Array);
          done();
        })
        .catch(done);
    });
  });


  /* ********************************************* */
  /* Clearing data created during Tests of package */
  /* ********************************************* */
  describe('data clearing', function() {
    /* Should remove everything that was created during the tests of package */
    it('should clear all data created during the tests of package', function (done) {
      done();
    });
  });
});
