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
    }
  }
};
