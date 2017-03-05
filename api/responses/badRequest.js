"use strict";
/**
 * 400 (Bad Request) Handler
 *
 * Usage:
 * return res.badRequest();
 * return res.badRequest(data);
 *
 * @param  {Object} data
 */

module.exports = function badRequest(data) {

  // Access to `req` and `res`
  // var req = this.req;
  var res = this.res;

  // Set status code
  res.status(400);

  // Log error to console
  if (data !== undefined) {
    sails.log.verbose("Sending 400 (\"Bad Request\") response: \n", data);
  }
  else {
    sails.log.verbose("Sending 400 (\"Bad Request\") response");
  }

  // Only include errors in response if application environment
  // is not set to 'production'.  In production, we shouldn't
  // send back any identifying information about errors.
  if (sails.config.environment === "production" && sails.config.keepResponseErrors !== true) {
    data = undefined;
  }

  // Always respond with JSON
  return res.jsonx(data);
};
