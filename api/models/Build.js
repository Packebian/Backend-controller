var Promise = require('bluebird')
/**
 * Build.js
 *
 * @description :: representation of a build of a package
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'Builds',
  autoPK: false,
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true
    },
    version: {
      type: 'string',
      required: true
    },
    package: {
      model: 'Package',
      type: 'integer',
      required: true
    },
    result: {
      type: 'string',
      defaultsTo: 'Pending'
    },
    toJSON: function() {
      var build = this;
      var obj = this.toObject();
      // Remove some fields of build json
      if(obj.package.id !== undefined) {
        obj.package = obj.package.id;
      }
      return obj;
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

    Sequence.next(Build.tableName, function(err, num) {
      if (err) return cb(err);
      values.id = num;
      cb();
    });
  },
  /* Check complex conditions before persisting the Object in the database */
  beforeValidate : function(values, next) {
    var promises = [];

    /* value package should point to an existing package */
    if(values.package != undefined) {
      promises.push(new Promise(function (resolve, reject) {
        Package
          .findOne(values.package)
          .then(function (record) {
            if(record == undefined) {
              return reject("builds: value package should match an existing package");
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
