/*
 * Data used for the tests of the Build model
 */
module.exports = {
  buildFull : {
    id: 100,
    version: "1.2",
    package: 1,
    result: "Pending"
  },

  buildMinimal : {
    version: "5",
    package: 2,
    result: "Fail"
  },

  buildFullUpdated : {
    result: "Success"
  }
}
