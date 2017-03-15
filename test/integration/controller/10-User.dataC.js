"use strict";

/*
 * Data used for the tests of the User model
 */
module.exports = {
  userFull : {
    id: 100,
    username : "jdoe",
    email : "john@doe.com",
    firstname : "John",
    lastname : "Doe",
    userlevel : 0
  },

  userMinimal : {
    username : "jane",
    email : "jane@doe.com"
  },

  userFullUpdated : {
    lastname : "DOE",
    userlevel : 2
  },

  userUsedEmail : {
    username : "jane",
    email : "janedoe@example.com"
  },

  userUsedUsername : {
    username : "janedoe",
    email : "jane@doe.com"
  },

  userWrongEmail : {
    username : "janedoe",
    email : "janedoe.com"
  }

}
