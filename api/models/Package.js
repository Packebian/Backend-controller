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
      required: true,
      unique: true
    },
    maintainer: {
      type: 'string',
      required: true
    },
    architecture: {
      type: 'string',
      required: true
    },
    major: {
      type: 'string',
    },
    class: {
      type: 'string',
    },
    description: {
      type: 'string'
    },
    dependencies: {
      type: 'string'
    },
    versions: {
      type: 'array'
    },
    builds: {
      collection: 'Build',
      via: 'package'
    },
    messages: {
      collection: 'Message',
      via: 'package'
    }
  }
};
