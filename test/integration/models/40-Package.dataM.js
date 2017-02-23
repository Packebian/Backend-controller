/*
 * Data used for the tests of the Package model
 */
module.exports = {
  packageFull : {
    id: 100,
    user: 1,
    ticket: 1,
    name: "processim-dev",
    maintainer: "naida@nichols.net",
    architecture: "all",
    major: "RICM3",
    class: "ALM",
    description: "Code you processor",
    dependencies: "gcc g++",
    versions : ["1.0", "1.1", "1.2"]
  },

  packageMinimal : {
    user: 3,
    name: "wireshark-dev",
    maintainer: "skyler-morrow@mi6.uk",
    architecture: "all"
  },

  packageFullUpdated : {
    name : "processimd-dev",
    dependencies: "gcc"
  }
}
