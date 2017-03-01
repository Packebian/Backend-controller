## MessageId
+ id: 1 (number) - Message unique identifier


## MessageExternal
+ package: 1 (number) - Message unique identifier


## MessageFull
+ Include MessageId (required)
+ Include TicketExternal (required)
+ user (required) - Message creator
    + Include UserFull
+ message: `Upvoted` (required, string) - Content of Message
+ createdAt: `2017-02-27T08:40:06.359Z` (required, string) - date/time (ISO8601 format) of creation of the Message
+ updatedAt: `2017-02-27T08:40:06.359Z` (required, string) - date/time (ISO8601 format) of last modification of the Message


## MessageList (array)
+ (MessageFull)


## MessageCreate
+ Include TicketId (required)
+ Include UserExternal (required)
+ message: `Upvoted` (required, string) - Content of Message


## MessageUpdate
+ message: `Upvoted !` (required, string) - Content of Message
