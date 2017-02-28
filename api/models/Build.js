var Promise = require('bluebird')
/**
 * Build.js
 *
 * @description :: representation of a build of a package
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'Builds',
  attributes: {
    version: {
      type: 'string',
      required: true
    },
    package: {
      model: 'Package',
      required: true
    },
    result: {
      type: 'string',
      required: true
    },
    toJSON: function() {
      var build = this;
      var obj = this.toObject();
      // Remove some fields of build json
      obj.package = obj.package.id;
      return obj;
    }
  },
  /* Check complex conditions before persisting the Object in the database */
  beforeValidate : function(values, next) {
    var promises = [];

    /* value package should point to an existing package */
    if(values.package != undefined) {
      promises.push(new Promise(function (resolve, reject) {
        Package
          .findOne({id: values.package})
          .then(function (record) {
            if(record == undefined) {
              return reject("value package should match an existing package");
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
