/**
 * Package.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'Packages',
  attributes: {
    user: {
      columnName: 'user_id',
      model: 'User',
      required: true
    },
    ticket: {
      columnName: 'ticket_id',
      model: 'Ticket',
      required: true,
      unique: true
    },
    infos: {
      columnName: 'info_id',
      model: 'Infos',
      required: true,
      unique: true
    }
  }
};
