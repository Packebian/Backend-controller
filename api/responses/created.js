"use strict";
/**
 * 201 (CREATED) Response
 *
 * Usage:
 * return res.created();
 * return res.created(data);
 *
 * @param  {Object} data
 */

module.exports = function created (data) {

  // Access to `req` and `res`
  // var req = this.req;
  var res = this.res;

  sails.log.silly("res.created() :: Sending 201 (\"CREATED\") response");

  // Set status code
  res.status(201);

  // Always respond with JSON
  return res.jsonx(data);
};
