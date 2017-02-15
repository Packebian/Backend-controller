/**
 * Package.js
 *
 * @description :: reprensentation of a linux package
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'Packages',
  attributes: {
    user: {
      model: 'User',
      required: true
    },
    ticket: {
      model: 'Ticket',
    },
    name: {
      type: 'string',
      size: 255,
      required: true,
      unique: true
    },
    maintainer: {
      type: 'string',
      size: 255,
      required: true
    },
    architecture: {
      type: 'string',
      size: 255,
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
    }
  }
};
