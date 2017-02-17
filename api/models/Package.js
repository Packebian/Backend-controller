var Promise = require('bluebird')
/**
 * Package.js
 *
 * @description :: reprensentation of a linux package
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'Packages',
  attributes: {
    user: {
      model: 'User',
      required: true
    },
    ticket: {
      model: 'Ticket',
    },
    name: {
      type: 'string',
      required: true,
      unique: true
    },
    maintainer: {
      type: 'string',
      required: true
    },
    architecture: {
      type: 'string',
      required: true
    },
    major: {
      type: 'string',
    },
    class: {
      type: 'string',
    },
    description: {
      type: 'string'
    },
    dependencies: {
      type: 'string'
    },
    versions: {
      type: 'array'
    },
    builds: {
      collection: 'Build',
      via: 'package'
    },
    messages: {
      collection: 'Message',
      via: 'package'
    }
  },
  /* Check complex conditions before persisting the Object in the database */
  beforeValidate : function(values, next) {
    var promises = [];

    /* value user should point to an existing user */
    promises.push(new Promise(function (resolve, reject) {
      User
        .findOne({id: values.user})
        .then(function (record) {
          if(record == undefined) {
            return reject("ERROR : Creation of Ticket failed because user doesn't exist");
          }
          resolve();
        })
        .catch(function (err) { reject(err) });
    }));

    /* if it is defined, value ticket should point to an existing ticket */
    promises.push(new Promise(function (resolve, reject) {
      if(values.ticket != undefined){
        Ticket
          .findOne({id: values.ticket})
          .then(function (record) {
            if(record == undefined) {
              return reject("ERROR : Creation of Package failed because ticket doesn't exist");
            }
            resolve();
          })
          .catch(function (err) { reject(err) });
      } else {
        resolve();
      }
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
