## VoteId
+ id: `58ac7aec913c8ef3f69e4ae1` (string) - Vote unique identifier


## VoteExternal
+ vote: `58ac7aec913c8ef3f69e4ae1` (string) - Vote unique identifier


## VoteFull
+ Include VoteId (required)
+ Include UserExternal (required)
+ Include TicketExternal (required)
+ vote: 1 (required, number) - Vote on the ticket. -1 if downvote, 1 if upvote, 0 if neutral.
+ createdAt: `2017-02-27T08:40:01.551Z` (required, string) - date/time (ISO8601 format) of creation of the Ticket
+ updatedAt: `2017-02-27T08:40:01.551Z` (required, string) - date/time (ISO8601 format) of last modification of the Ticket


## VoteList (array)
+ (VoteFull)


## VoteCreate
+ Include UserExternal (required)
+ Include TicketExternal (required)
+ vote: 1 (required, number) - Vote on the ticket. -1 if downvote, 1 if upvote, 0 if neutral.


## VoteUpdate
+ vote: `-1` (number) - Vote on the ticket. -1 if downvote, 1 if upvote, 0 if neutral.
