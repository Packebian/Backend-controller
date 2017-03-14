"use strict";

/**
 * auth0
 *
 * @description :: auth0 Service for sails
 * @help        :: See
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Services
 */

var Promise = require("bluebird");
var Request = require("request");

module.exports = {


  /**
   * From a JWT token given by auth0, this function will look for the user in the sails application
   * (create it if necessary) and return a JWT token that can be used to make request to the API
   *
   * @param {Object} token returned by auth0
   * @param {Function} callback callback function
   * @param {String} callback.error error message
   * @param {Object} callback.result json object
   * @return {Promise|String} A promise of the result that returns a string in case of success
   */
  login: function(token, cb){
    var auth0Data;
    var options = {
      algorithm: [process.env.AUTH0_ALGO]
    }
    /* Retrieve data in the given token */
    return jwtService.verifyManual(token, process.env.AUTH0_SECRET, options)
      /* Using the retrieved data, retrieve the user's information */
      .then(function(data){
        auth0Data = data;
        return User.findOne({auth0_id: auth0Data.sub})
      })
      /* Create the user in the database if necessary */
      .then(function(user){
        return new Promise(function(resolve, reject){
          if(user === undefined){
            /* Retrieve the user's informations from auth0 */
            var infoReq = {
              url: process.env.AUTH0_ENDPOINT + "/tokeninfo",
              header: {
                "content-type": "application/x-www-form-urlencoded"
              },
              form: {
                "id_token": token
              }
            }
            Request.post(infoReq, function(err, httpResponse, body){
              if(err) { reject(err); }
              if(httpResponse.statusCode !== 200) { reject(err); }

              /* Using the reply from auth0, create the user and resolve or reject on result */
              var userInfo = JSON.parse(body);
              User.create({
                username: userInfo.nickname,
                lastname: userInfo.family_name,
                firstname: userInfo.given_name,
                email: userInfo.email,
                auth0_id: auth0Data.sub
              })
              .then(record => resolve(record))
              .catch(err => reject(err));

            });
          } else {
            /* The user existed, just resolve */
            resolve(user);
          }
        });
      })
      /* Create our own JWT token */
      .then(function(user){
        return jwtService.issue(user);
      })
      /* Handle callback in case of success */
      .then(function(result){
        if(cb){ return cb(null, result); }
        return new Promise(function(resolve, reject) {
          resolve(result);
        });
      })
      /* Handle callback in case of error */
      .catch(function(error){
        if(cb){ return cb(error); }
        return new Promise(function(resolve, reject) {
          reject(error);
        });
      });
  }
}
