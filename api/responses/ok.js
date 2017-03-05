"use strict";
/**
 * 200 (OK) Response
 *
 * Usage:
 * return res.ok();
 * return res.ok(data);
 *
 * @param  {Object} data
 */

module.exports = function sendOK (data) {

  // Access to `req` and `res`
  // var req = this.req;
  var res = this.res;

  sails.log.silly("res.ok() :: Sending 200 (\"OK\") response");

  // Set status code
  res.status(200);

  // Always respond with JSON
  return res.jsonx(data);
};
