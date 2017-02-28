/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'Users',
  attributes: {
    username: {
      type: 'string',
      required: true,
      unique: true
    },
    lastname: {
      type: 'string'
    },
    firstname: {
      type: 'string'
    },
    email: {
      type: 'string',
      unique: true,
      email: true
    },
    userlevel: {
      type: 'integer',
      enum: [0, 1, 2],
      defaultsTo: 0
    }
  }
};
