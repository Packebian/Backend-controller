## Message List [/messages]

### Get Messages [GET]
Get a list of messages.

+ Response 200 (application/json; charset=utf-8)

    + Attributes (MessageList)

+ Response 500 (application/json; charset=utf-8)

### Create New Message [POST]
Create a new Message

+ Request with body (application/json; charset=utf-8)

    + Attributes (MessageCreate)

+ Response 201

    + Attributes (MessageFull)

+ Response 500 (application/json; charset=utf-8)


## Message [/messages/{id}]

+ Parameters

    + id: `58ace71e81e82ce24d71ea81` (required, string) - The message ID

### Get Message [GET]
Get a single Message.

+ Response 200 (application/json; charset=utf-8)

    + Attributes (MessageFull)

+ Response 404 (application/json; charset=utf-8)

### Update a Message [PUT]
Every field is optionnal. Here is an example of a request updating the content of a message.

+ Request (application/json; charset=utf-8)

    + Attributes (MessageUpdate)

+ Response 200 (application/json; charset=utf-8)

    + Attributes (MessageFull)
        + Include MessageUpdate

+ Response 404 (application/json; charset=utf-8)

+ Response 500 (application/json; charset=utf-8)


### Delete a Message [DELETE]
Delete a single message

+ Response 200 (application/json; charset=utf-8)

    + Attributes (MessageFull)

+ Response 404 (application/json; charset=utf-8)
