"use strict";

var Promise = require("bluebird");
/**
 * Vote.js
 *
 * @description :: reprensentation of a vote on a ticket
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "Votes",
  autoPK: false,
  attributes: {
    id: {
      type: "integer",
      primaryKey: true
    },
    user: {
      model: "User",
      type: "integer",
      required: true
    },
    ticket: {
      model: "Ticket",
      type: "integer",
      required: true
    },
    vote: {
      type: "Integer",
      enum: [-1, 0, 1],
      defaultsTo: 0
    },
    toJSON: function() {
      var obj = this.toObject();
      // Remove too verbose content of Vote
      if(obj.ticket !== undefined && obj.ticket.id !== undefined) { obj.ticket = obj.ticket.id; }
      if(obj.user !== undefined && obj.user.id !== undefined) { obj.user = obj.user.id; }
      return obj;
    }
  },
  /* generate integer if mongodb is used */
  beforeCreate: function (values, cb) {
    // Retrieve adapter
    var connectionName = sails.config.models.connection;
    var adapter = sails.config.connections[connectionName].adapter;

    // remove id from values unless the adapter is sails-disk
    if(adapter !== "sails-disk") { delete values.id; }

    // If the adapter is not sails-mongo, the id should be generated by database
    if(adapter !== "sails-mongo") { return cb(); }

    Sequence.next(Vote.tableName, function(err, num) {
      if (err) { return cb(err); }
      values.id = num;
      return cb();
    });
  },
  /* Check complex conditions before persisting the Object in the database */
  beforeValidate: function(values, next) {
    var promises = [];

    /* Check the user/ticket couple is unique */
    promises.push(new Promise(function (resolve, reject) {
      Vote
        .findOne({user: values.user, ticket: values.ticket})
        .then(function (record) {
          if(record !== undefined) {
            return reject("vote: the vote already exists");
          }
          return resolve();
        })
        .catch(function (err) { return reject(err); });
    }));

    /* value user should point to an existing user */
    if(values.user !== undefined) {
      promises.push(new Promise(function (resolve, reject) {
        User
          .findOne(values.user)
          .then(function (record) {
            if(record === undefined) {
              return reject("vote: value user should match an existing user");
            }
            return resolve();
          })
          .catch(function (err) { return reject(err); });
      }));
    }

    /* value ticket should point to an existing ticket */
    if(values.ticket !== undefined) {
      promises.push(new Promise(function (resolve, reject) {
        Ticket
          .findOne(values.ticket)
          .then(function (record) {
            if(record === undefined) {
              return reject("vote: value ticket should match an existing ticket");
            }
            return resolve();
          })
          .catch(function (err) { return reject(err); });
      }));
    }

    /* Wait for all promises call next if no error */
    Promise.all(promises)
      .spread(function(){
        return next();
      })
      .catch(function(err){
        /* At least one promise threw an error */
        sails.log.info(err);
        return next(err);
      });
  }
};
