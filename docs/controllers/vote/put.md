## Update a Vote [PUT /votes/{id}]
Every field is optionnal. Here is an example of a request updating the value of a Vote.

+ Parameters

    + id: 1 (required, integer) - The vote ID

+ Request with body (application/json; charset=utf-8)

    + Attributes (VoteReqPUT)

    <!-- include(../auth/authHeader.md) -->

+ Response 200 (application/json; charset=utf-8)

    + Attributes (VoteResPUT)

+ Response 404 (application/json; charset=utf-8)

+ Response 500 (application/json; charset=utf-8)
