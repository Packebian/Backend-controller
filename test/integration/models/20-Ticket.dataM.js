"use strict";

/*
 * Data used for the tests of the Ticket model
 */
module.exports = {
  ticketFull : {
    id: 100,
    user: 1,
    status: 0,
    name: "processim",
    maintainer: "naida@nichols.net",
    architecture: "all",
    major: "RICM3",
    class: "ALM",
    description: "Code you processor",
    dependencies: "gcc",
    versions : ["1.0", "1.1", "1.2"]
  },

  ticketMinimal : {
    user: 2,
    name: "processim",
    maintainer: "naida@nichols.net",
    architecture: "all"
  },

  ticketFullUpdated : {
    name : "processimd",
    status : 1
  }
}
