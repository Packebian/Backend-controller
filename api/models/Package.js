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
    id: {
      type: 'integer',
      primaryKey: true
    },
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
    },
    toJSON: function() {
      var pack = this;
      var obj = this.toObject();
      // Remove too verbose content of Vote
      if(obj.ticket) obj.ticket = obj.ticket.id;
      delete obj.builds;
      delete obj.messages;
      return obj;
    }
  },
  /* generate integer if mongodb is used */
  beforeCreate : function (values, cb) {
    delete values.id; // remove id from values if one was given

    // TODO: Test if mongodb is used

    Sequence.next(Package.tableName, function(err, num) {
      if (err) return cb(err);
      values.id = num;
      cb();
    });
  },
  /* Check complex conditions before persisting the Object in the database */
  beforeValidate : function(values, next) {
    var promises = [];

    /* value user should point to an existing user */
    if(values.user != undefined){
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
    }

    /* if it is defined, value ticket should point to an existing ticket */
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
