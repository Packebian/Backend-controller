## MessageId
+ id: 1 (number) - Message unique identifier


## ExternalMessageId
+ package: 1 (number) - Message unique identifier


## MessageAllInfos
+ Include MessageCreateInfos
+ createdAt: `2017-02-27T08:40:06.359Z` (required, string) - date/time (ISO8601 format) of creation of the Message
+ updatedAt: `2017-02-27T08:40:06.359Z` (required, string) - date/time (ISO8601 format) of last modification of the Message


## MessageCreateInfos
+ content: `Upvoted` (required, string) - Content of Message


## MessageReqPOST
+ Include ExternalUserId
+ Include ExternalTicketId
+ Include MessageCreateInfos


## MessageReqPUT
+ content: `Upvoted !` (required, string) - Content of Message


## MessageResGET
+ Include MessageId
+ Include ExternalTicketId
+ Include MessageAllInfos
+ user (required) - Creator of message
    + Include UserAllInfos


## MessageResGETAll (array)
+ (MessageResGET)


## MessageResPOST
+ Include MessageId
+ Include ExternalUserId
+ Include ExternalTicketId
+ Include MessageAllInfos


## MessageResPUT
+ Include MessageResGET


## MessageResDELETE
+ Include MessageResGET
