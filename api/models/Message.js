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
};
