/**
 * User.js
 *
 * @description :: representation of a User.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'Users',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true
    },
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
  },
  /* generate integer if mongodb is used */
  beforeCreate : function (values, cb) {
    delete values.id; // remove id from values if one was given

    // TODO: Test if mongodb is used

    Sequence.next(User.tableName, function(err, num) {
      if (err) return cb(err);
      values.id = num;
      cb();
    });
  }
};
