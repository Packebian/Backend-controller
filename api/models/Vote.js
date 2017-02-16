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
    /* Check the user/ticket couple is unique */
    Vote
      .findOne({user: values.user, ticket: values.ticket})
      .exec(function (err, record) {
        if(record == undefined) {
          next();
        } else{
          sails.log.info("Creation of Vote failed because already exists");
          next("ERROR : Creation of Vote failed because already exists");
        }
      });
  }
};
