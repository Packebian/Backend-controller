"use strict";
/**
 * Auth
 *
 * @module      :: Policy
 * @description :: policy to allow authenticated user and
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */

module.exports = function isAuthenticated(req, res, next) {

  var token;
  var errMessage;

  if (req.headers && req.headers.authorization) {
    var parts = req.headers.authorization.split(" ");

    if (parts.length === 2) {
      var scheme = parts[0];
      var credentials = parts[1];

      if (/^Bearer$/i.test(scheme)) {
        token = credentials;
      }
    }
  }

  if(!token) { res.forbidden(401, {err: errMessage}); }

  jwtService.verify(token)
      .then(next())
      .catch(error => res.forbidden(error));

};
