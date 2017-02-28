## Message List [/messages]

### Get Messages [GET]
Get a list of messages.

+ Response 200 (application/json)

    + Attributes (MessageList)

+ Response 500 (application/json)

### Create New Message [POST]
Create a new Message

+ Request with body (application/json)

    + Attributes (MessageCreate)

+ Response 201

    + Attributes (MessageFull)

+ Response 500 (application/json)


## Message [/messages/{id}]

+ Parameters

    + id: `58ace71e81e82ce24d71ea81` (required, string) - The message ID

### Get Message [GET]
Get a single Message.

+ Response 200 (application/json)

    + Attributes (MessageFull)

+ Response 404 (application/json)

### Update a Message [PUT]
Every field is optionnal. Here is an example of a request updating the content of a message.

+ Request (application/json)

    + Attributes (MessageUpdate)

+ Response 200 (application/json)

    + Attributes (MessageFull)
        + Include MessageUpdate

+ Response 404 (application/json)

+ Response 500 (application/json)


### Delete a Message [DELETE]
Delete a single message

+ Response 204

    + Attributes (MessageFull)

+ Response 404 (application/json)
