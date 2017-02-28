## Vote List [/votes]

### Get Votes [GET]
Get a list of votes.

+ Response 200 (application/json)

    + Attributes (VoteList)

+ Response 500 (application/json)

### Create New Vote [POST]
Create a new Vote

+ Request with body (application/json)

    + Attributes (VoteCreate)

+ Response 201

    + Attributes (VoteFull)

+ Response 500 (application/json)


## Vote [/votes/{id}]

+ Parameters

    + id: `58ac7aec913c8ef3f69e4ae1` (required, string) - The vote ID

### Get Vote [GET]
Get a single Vote.

+ Response 200 (application/json)

    + Attributes (VoteFull)

+ Response 404 (application/json)

### Update a Vote [PUT]
Every field is optionnal. Here is an example of a request updating the value of a vote.

+ Request (application/json)

    + Attributes (VoteUpdate)

+ Response 200 (application/json)

    + Attributes (VoteFull)
        + Include VoteUpdate

+ Response 404 (application/json)

+ Response 500 (application/json)


### Delete a Vote [DELETE]
Delete a single vote

+ Response 204

    + Attributes (VoteFull)

+ Response 404 (application/json)
