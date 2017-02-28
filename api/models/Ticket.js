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
    },

    /**
     * Retrieve the votes of this ticket and create a json object containing the results.
     * {upvotes: {number}, downvotes: {number}, neutral: {number}}
     *
     * This function can be used with a callback or will return a promise if none is given.
     *
     * @method results
     * @async
     * @param {Function} callback callback function
     * @param {String} callback.error error message
     * @param {Object} callback.result json object
     * @return {Promise|Object} A promise of the result that returns an object in case of success
     */
    results: function(cb) {
      ticket = this;
      return new Promise(function(resolve, reject) {
        Vote
          .find({ticket: ticket.id})
          .then(function (records) {
            var votes = {};
            votes.upvotes = 0;
            votes.downvotes = 0;
            votes.neutrals = 0;

            for(var record of records) {
              switch(record.vote) {
                case 1:
                  votes.upvotes++;
                  break;
                case 0:
                  votes.neutrals++;
                  break;
                case -1:
                  votes.downvotes++;
                  break;
                default:
              }
            }
            if(cb){ cb(null, votes); }
            resolve(votes);
          })
          .catch(function(err){
            if(cb){ cb(error); }
            reject(error);
          });
      });
    },

    toJSON: function() {
      var done = false;
      var ticket = this;
      var obj = this.toObject();
      delete obj.votes;

      this.results()
        .then(function(results) {
          obj.results = results;
          done = true;
        })
        .catch(function(error) {
          error => sails.log.error(error);
        });

      while(done === false) {
        require('deasync').sleep(10);
      }
      return obj;
    }
  },
  /* Check complex conditions before persisting the Object in the database */
  beforeValidate : function(values, next) {
    var promises = [];

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
