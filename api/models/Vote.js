var Promise = require('bluebird')
/**
 * Vote.js
 *
 * @description :: reprensentation of a vote on a ticket
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'Votes',
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
      required: true
    },
    vote: {
      type: 'Integer',
      enum: [-1, 0, 1],
      defaultsTo: 0
    },
    toJSON: function() {
      var vote = this;
      var obj = this.toObject();
      // Remove too verbose content of Vote
      obj.ticket = obj.ticket.id;
      obj.user = obj.user.id;
      return obj;
    }
  },
  /* generate integer if mongodb is used */
  beforeCreate : function (values, cb) {
    delete values.id; // remove id from values if one was given

    // TODO: Test if mongodb is used

    Sequence.next(Vote.tableName, function(err, num) {
      if (err) return cb(err);
      values.id = num;
      cb();
    });
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
            return reject("the vote already exists");
          }
          resolve();
        })
        .catch(function (err) { reject(err) });
    }));

    /* value user should point to an existing user */
    if(values.user != undefined) {
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

    /* value ticket should point to an existing ticket */
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
