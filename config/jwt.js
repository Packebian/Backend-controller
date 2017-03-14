"use strict";
/*
 * JWT default config
 * (sails.config.jwt)
 */
module.exports.jwt = {
  secret: process.env.JWT_SECRET,
  optionsSign: {
    algorithm: process.env.JWT_ALGO,
    expiresIn: process.env.JWT_LIFE,
    issuer: process.env.JWT_ISSUER,
    audience: process.env.JWT_AUDIENCE
  },
  optionsVerify: {
    algorithm: [process.env.JWT_ALGO],
    issuer: process.env.JWT_ISSUER,
    audience: process.env.JWT_AUDIENCE
  }
};
