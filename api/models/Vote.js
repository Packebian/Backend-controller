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
};
