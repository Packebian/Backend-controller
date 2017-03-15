## Update a User [PUT /users/{id}]
Every field is optionnal. Here is an example of a request updating the firstname and lastname of a User.

+ Parameters

    + id: 1 (required, integer) - The user ID

+ Request with body (application/json; charset=utf-8)

    + Attributes (UserReqPUT)

    <!-- include(../auth/authHeader.md) -->

+ Response 200 (application/json; charset=utf-8)

    + Attributes (UserResPUT)

+ Response 404 (application/json; charset=utf-8)

+ Response 500 (application/json; charset=utf-8)
