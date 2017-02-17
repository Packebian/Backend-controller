var Promise = require('bluebird')
/**
 * Ticket.js
 *
 * @description :: reprensentation of a ticket. A ticket is the request of the creation of a package
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'Tickets',
  attributes: {
    user: {
      model: 'User',
      required: true
    },
    status: {
      type: 'integer',
      enum: [-1, 0, 1],
      defaultsTo: 0
    },
    name: {
      type: 'string',
      required: true
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
      size: 255
    },
    class: {
      type: 'string',
      size: 255
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
    votes: {
      collection: 'Vote',
      via: 'ticket'
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
            return reject("value user should match an existing user");
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
