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
      size: 255,
      required: true,
      unique: true
    },
    lastname: {
      type: 'string',
      size: 255
    },
    firstname: {
      type: 'string',
      size: 255
    },
    email: {
      type: 'string',
      size: 255,
      unique: true
    },
    userlevel: {
      type: 'integer',
      defaultsTo: 0
    }
  }
};
