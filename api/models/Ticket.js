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
  }
};
