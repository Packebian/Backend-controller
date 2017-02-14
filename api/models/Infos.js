/**
 * Infos.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'Infos',
  attributes: {
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
    }
  }
};
