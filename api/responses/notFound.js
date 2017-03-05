"use strict";
/**
 * 404 (Not Found) Handler
 *
 * Usage:
 * return res.notFound();
 * return res.notFound(err);
 *
 * @param  {Object} data
 */

module.exports = function notFound (data) {

  // Access to `req` and `res`
  // var req = this.req;
  var res = this.res;

  // Set status code
  res.status(404);

  // Log error to console
  if (data !== undefined) {
    sails.log.verbose("Sending 404 (\"Not Found\") response: \n", data);
  }
  else {
    sails.log.verbose("Sending 404 (\"Not Found\") response");
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
