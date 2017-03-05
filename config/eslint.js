"use strict";
/*
 * Configuration of the eslint hook
 */
module.exports.eslint = {
  // St check to false to disable eslint check
  check: true,

  active: false,
  usePolling: false,
  formatter: "stylish",
  dirs: [
    "api",
    "config",
    "test"
  ],
  ignored: [

  ]
};
