"use strict";

/**
 * AuthController
 *
 * @description :: Server-side logic for Authentication
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  /* Disable Blueprints */
  _config: {
    actions: false,
    shortcuts: false,
    rest: false
  },

  login: function(req, res){
    var type = req.param("type");
    var body = req.body;

    sails.log.debug(type);
    sails.log.debug(body);

    var promise;
    switch(type) {
      case "auth0":
        promise = auth0Service.login(req.body.token);
        break;
      default:
        res.serverError("auth: authentication type doesn't exist");
    }


    if(promise) {
      promise
        .then(result => res.ok(result))
        .catch(error => res.serverError(error));
    } else {
      res.serverError();
    }
  },

  logout: function(req, res){
    return res.ok({});
  }

};
