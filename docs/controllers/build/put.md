## Update a Build [PUT /builds/{id}]
Every field is optionnal. Here is an example of a request updating the results of a Build.

+ Parameters

    + id: 1 (required, integer) - The build ID

+ Request with body (application/json; charset=utf-8)

    + Attributes (BuildReqPUT)

    <!-- include(../auth/authHeader.md) -->

+ Response 200 (application/json; charset=utf-8)

    + Attributes (BuildResPUT)

+ Response 404 (application/json; charset=utf-8)

+ Response 500 (application/json; charset=utf-8)
