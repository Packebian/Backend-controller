## Login [POST /login{?type}]

A auth token is given to the API that will create a custom JWT token that can then be used to access the API. Currently, only auth0 token of the domain `packebian.eu.auth0.com`. token can be used.

+ Parameters

    + type: auth0 (required, string) - Type of given auth token

+ Request with body (application/json; charset=utf-8)

    + Attributes (authReqLogin)

+ Response 200 (application/json; charset=utf-8)

    + Attributes (authResLogin)