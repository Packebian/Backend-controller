"use strict";
/**
 * 500 (Server Error) Response
 *
 * Usage:
 * return res.serverError();
 * return res.serverError(err);
 *
 * @param  {Object} data
 */

module.exports = function serverError (data) {

  // Access to `req` and `res`
  // var req = this.req;
  var res = this.res;

  // Set status code
  res.status(500);

  // Log error to console
  if (data !== undefined) {
    sails.log.error("Sending 500 (\"Server Error\") response: \n", data);
  }
  else {
    sails.log.error("Sending empty 500 (\"Server Error\") response");
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
