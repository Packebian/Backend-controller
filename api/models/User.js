/**
 * User.js
 *
 * @description :: representation of a User.
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
  },
  /* generate integer if mongodb is used */
  beforeCreate : function (values, cb) {
    // Retrieve adapter
    var connectionName = sails.config.models.connection
    var adapter = sails.config.connections[connectionName].adapter

    // remove id from values unless the adapter is sails-disk
    if(adapter !== 'sails-disk') delete values.id

    // If the adapter is not sails-mongo, the id should be generated by database
    if(adapter !== 'sails-mongo') return cb()

    Sequence.next(User.tableName, function(err, num) {
      if (err) return cb(err);
      values.id = num;
      cb();
    });
  }
};
