var Promise = require('bluebird')
/**
 * Message.js
 *
 * @description :: reprensentation of a message. Messages can be linked to a ticket or a package
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'Messages',
  attributes: {
    user: {
      model: 'User',
      required: true
    },
    message: {
      type: 'string',
      required: true
    },
    package: {
      model: 'Package'
    },
    ticket: {
      model: 'Ticket'
    }
  },
  /* Check complex conditions before persisting the Object in the database */
  beforeValidate : function(values, next) {
    var promises = [];

    /* Check that either package or ticket is set */
    promises.push(new Promise(function (resolve, reject) {
      if( values.ticket == undefined && values.package == undefined) {
        return reject("ERROR : Creation of Message failed because package or ticket should either be set");
      } else if (values.ticket != undefined && values.package != undefined) {
        return reject("ERROR : Creation of Message failed because package and ticket can't be both set");
      }
      resolve();
    }));

    /* If value package is set, it should point to an existing package */
    promises.push(new Promise(function (resolve, reject) {
      if(values.package != undefined) {
        Package
          .findOne({id: values.package})
          .then(function (record) {
            if(record == undefined) {
              return reject("ERROR : Creation of Message failed because package doesn't exist");
            }
            resolve();
          })
          .catch(function (err) { reject(err) });
      } else {
        resolve();
      }
    }));

    /* If value ticket is set, it should point to an existing ticket */
    promises.push(new Promise(function (resolve, reject) {
      if(values.ticket != undefined) {
        Ticket
          .findOne({id: values.ticket})
          .then(function (record) {
            if(record == undefined) {
              return reject("ERROR : Creation of Message failed because ticket doesn't exist");
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
