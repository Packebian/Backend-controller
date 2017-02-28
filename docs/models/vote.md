## VoteId
+ id: `58a5702f90b3871c00e9fc91` (string) - Vote unique identifier


## VoteExternal
+ vote: `58a5702f90b3871c00e9fc91` (string) - Vote unique identifier


## VoteFull
+ Include VoteId
+ Include UserExternal
+ Include TicketExternal
+ vote: 1 (number) - Vote on the ticket. -1 if downvote, 1 if upvote, 0 if neutral.
+ createdAt: `2017-02-27T08:40:01.632Z` (string) - date/time (ISO8601 format) of creation of the Ticket
+ updatedAt: `2017-02-27T08:40:01.632Z` (string) - date/time (ISO8601 format) of last modification of the Ticket


## VoteList (array)
+ (VoteFull)


## VoteCreate
+ Include UserExternal
+ Include TicketExternal
+ vote: 1 (number) - Vote on the ticket. -1 if downvote, 1 if upvote, 0 if neutral.


## VoteUpdate
+ vote: `-1` (number) - Vote on the ticket. -1 if downvote, 1 if upvote, 0 if neutral.
