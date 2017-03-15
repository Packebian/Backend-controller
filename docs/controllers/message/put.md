## Update a Message [PUT /messages/{id}]
Every field is optionnal. Here is an example of a request updating the content of a Message.

+ Parameters

    + id: 1 (required, integer) - The message ID

+ Request with body (application/json; charset=utf-8)

    + Attributes (MessageReqPUT)

    <!-- include(../auth/authHeader.md) -->

+ Response 200 (application/json; charset=utf-8)

    + Attributes (MessageResPUT)

+ Response 404 (application/json; charset=utf-8)

+ Response 500 (application/json; charset=utf-8)
