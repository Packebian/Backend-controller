"use strict";

/**
 * jwt
 *
 * @description :: JSON Webtoken Service for sails
 * @help        :: See https://github.com/auth0/node-jsonwebtoken
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Services
 */

var JWT = require("jsonwebtoken");
var Promise = require("bluebird");

module.exports = {

  /**
   * Issue a JWT token using the given payload, secret and options.
   *
   * This function can be used with a callback or will return a promise if none is given.
   *
   * @method issueManual
   * @async
   * @param {Object} payload payload to use
   * @param {Object} tokenSecret secret to use
   * @param {options} options options to use. The format of this object is defined in the section sign https://github.com/auth0/node-jsonwebtoken#user-content-jwtsignpayload-secretorprivatekey-options-callback
   * @param {Function} callback callback function
   * @param {String} callback.error error message
   * @param {Object} callback.result json object
   * @return {Promise|String} A promise of the result that returns a string in case of success
   */
  issueManual: function(payload, tokenSecret, options, cb) {
    if(options !== undefined && options.expiresIn !== undefined){
      options = JSON.parse(JSON.stringify(options)); // make a copy of options
      options.expiresIn = options.expiresIn + Math.floor(Date.now() / 1000);
    }

    return new Promise(function(resolve, reject){
      if(!cb) {
        cb = function(err, token){
          if(err) { return reject(err); }
          return resolve(token);
        };
      }
      return JWT.sign(
        payload,
        tokenSecret,
        options,
        cb
      );
    });
  },

  /**
   * Issue a JWT token using the default options in the jwt config file.
   *
   * This function can be used with a callback or will return a promise if none is given.
   *
   * @method issue
   * @async
   * @param {Object} payload payload to use
   * @param {Function} callback callback function
   * @param {String} callback.error error message
   * @param {Object} callback.result json object
   * @return {Promise|String} A promise of the result that returns a string in case of success
   */
  issue: function(payload, cb) {
    var vm = this;
    return new Promise(function(resolve, reject){
      vm.issueManual(payload, sails.config.jwt.secret, sails.config.jwt.optionsSign)
        .then(function(result) {
          if(cb) { return cb(null, result); }
          return resolve(result);
        })
        .catch(function(error){
          if(cb) { return cb(error); }
          return reject(error);
        });
    });
  },

  /**
   * Verify a given JWT token using the given secret and options.
   *
   * This function can be used with a callback or will return a promise if none is given.
   *
   * @method verifyManual
   * @async
   * @param {String} token token to veriy
   * @param {Object} tokenSecret secret to use
   * @param {options} options option to use. The format of this object is definied in the section verify https://github.com/auth0/node-jsonwebtoken#user-content-jwtverifytoken-secretorpublickey-options-callback
   * @param {Function} callback callback function
   * @param {String} callback.error error message
   * @param {Object} callback.result json object
   * @return {Promise|Object} A promise of the result that returns an object in case of success
   */
  verifyManual: function(token, tokenSecret, options, cb) {
    if(options !== undefined && options.expiresIn !== undefined){
      options = JSON.parse(JSON.stringify(options)); // make a copy of options
      options.expiresIn = options.expiresIn + Math.floor(Date.now() / 1000);
    }
    return new Promise(function(resolve, reject){
      if(!cb) {
        cb = function(err, decoded){
          if(err) { return reject(err); }
          return resolve(decoded);
        };
      }
      return JWT.verify(
        token,
        tokenSecret,
        options,
        cb
      );
    });
  },

  /**
   * Verify a given JWT token using using the default options in the jwt config file.
   *
   * This function can be used with a callback or will return a promise if none is given.
   *
   * @method verify
   * @async
   * @param {String} token token to veriy
   * @param {Function} callback callback function
   * @param {String} callback.error error message
   * @param {Object} callback.result json object
   * @return {Promise|Object} A promise of the result that returns an object in case of success
   */
  verify: function(token, cb) {
    var vm = this;
    return new Promise(function(resolve, reject){
      vm.verifyManual(token, sails.config.jwt.secret, sails.config.jwt.optionsVerify)
        .then(function(result) {
          if(cb) { return cb(null, result); }
          return resolve(result);
        })
        .catch(function(error){
          if(cb) { return cb(error); }
          return reject(error);
        });
    });
  }
};
