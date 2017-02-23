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
  beforeCreate : function(values, next) {
    var promises = [];

    /* Check that either package or ticket is set */
    promises.push(new Promise(function (resolve, reject) {
      if( values.ticket == undefined && values.package == undefined) {
        return reject("either package or ticket should be set");
      } else if (values.ticket != undefined && values.package != undefined) {
        return reject("package and ticket can't be both set");
      }
      resolve();
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

  },
  /* Check complex conditions before persisting the Object in the database */
  beforeValidate : function(values, next) {
    var promises = [];

    /* If value package is set, it should point to an existing package */
    if(values.package != undefined) {
      promises.push(new Promise(function (resolve, reject) {
        Package
          .findOne({id: values.package})
          .then(function (record) {
            if(record == undefined) {
              return reject("value package should match an existing package");
            }
            resolve();
          })
          .catch(function (err) { reject(err) });
      }));
    }

    /* If value ticket is set, it should point to an existing ticket */
    if(values.ticket != undefined) {
      promises.push(new Promise(function (resolve, reject) {
        Ticket
          .findOne({id: values.ticket})
          .then(function (record) {
            if(record == undefined) {
              return reject("value ticket should match an existing ticket");
            }
            resolve();
          })
          .catch(function (err) { reject(err) });
      }));
    }

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
