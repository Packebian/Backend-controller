## VoteId
+ id: 1 (required, number) - Vote unique identifier


## ExternalVoteId
+ vote: 1 (required, number) - Vote unique identifier


## VoteAllInfos
+ Include VoteCreateInfos
+ createdAt: `2017-02-27T08:40:01.551Z` (required, string) - date/time (ISO8601 format) of creation of the Ticket
+ updatedAt: `2017-02-27T08:40:01.551Z` (required, string) - date/time (ISO8601 format) of last modification of the Ticket


## VoteCreateInfos
+ vote: 1 (required, number) - Vote on the ticket. -1 if downvote, 1 if upvote, 0 if neutral.


## VoteReqPOST
+ Include ExternalUserId
+ Include ExternalTicketId
+ Include VoteCreateInfos


## VoteReqPUT
+ vote: `-1` (number) - Vote on the ticket. -1 if downvote, 1 if upvote, 0 if neutral.


## VoteResGET
+ Include VoteId
+ Include ExternalUserId
+ Include ExternalTicketId
+ Include VoteAllInfos


## VoteResGETAll (array)
+ (VoteResGET)


## VoteResPOST
+ Include VoteId
+ Include ExternalUserId
+ Include ExternalTicketId
+ Include VoteAllInfos


## VoteResPUT
+ Include VoteResGET


## VoteResDELETE
+ Include VoteResGET
