/**
 * Message.js
 *
 * @description :: reprensentation of a message. Messages can be linked to a ticket or a package
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'Messages',
  attributes: {
    user: {
      model: 'User',
      required: true
    },
    message: {
      type: 'string',
      required: true
    },
    package: {
      model: 'Package'
    },
    ticket: {
      model: 'Ticket'
    }
  },
  /* Check complex conditions before persisting the Object in the database */
  beforeValidate : function(values, next) {
    /* Check the either package or ticket is set */
    if( values.ticket == undefined && values.package == undefined) {
      sails.log.info("Creation of Message failed because package or ticket should either be set");
      next("ERROR : Creation of Message failed because package or ticket should either be set");
    } else if (values.ticket != undefined && values.package != undefined) {
      sails.log.info("Creation of Message failed because package and ticket can't be both set");
      next("ERROR : Creation of Message failed because package and ticket can't be both set");
    }else{
      next();
    }
  }
};
