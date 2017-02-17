var Promise = require('bluebird')
/**
 * Vote.js
 *
 * @description :: reprensentation of a vote on ticket
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'Votes',
  attributes: {
    user: {
      model: 'User',
      required: true
    },
    ticket: {
      model: 'Ticket',
      required: true
    },
    vote: {
      type: 'Integer',
      enum: [-1, 0, 1],
      defaultsTo: 0
    }
  },
  /* Check complex conditions before persisting the Object in the database */
  beforeValidate : function(values, next) {
    var promises = [];

    /* Check the user/ticket couple is unique */
    promises.push(new Promise(function (resolve, reject) {
      Vote
        .findOne({user: values.user, ticket: values.ticket})
        .then(function (record) {
          if(record != undefined) {
            return reject("ERROR : Creation of Vote failed because already exists");
          }
          resolve();
        })
        .catch(function (err) { reject(err) });
    }));

    /* value user should point to an existing user */
    promises.push(new Promise(function (resolve, reject) {
      User
        .findOne({id: values.user})
        .then(function (record) {
          if(record == undefined) {
            return reject("ERROR : Creation of Vote failed because user doesn't exist");
          }
          resolve();
        })
        .catch(function (err) { reject(err) });
    }));

    /* value ticket should point to an existing ticket */
    promises.push(new Promise(function (resolve, reject) {
      Ticket
        .findOne({id: values.ticket})
        .then(function (record) {
          if(record == undefined) {
            return reject("ERROR : Creation of Vote failed because ticket doesn't exist");
          }
          resolve();
        })
        .catch(function (err) { reject(err) });
    }));

    /* Wait for all promises call next if no error */
    Promise.all(promises)
      .spread(function(){
        next();
      })
      .catch(function(err){
        /* At least one promise threw an error */
        sails.log.info(err);
        next(err)
      });
  }
};
