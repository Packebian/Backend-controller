## Users List [/users]

### Get Users [GET]
Get a list of users.

+ Response 200 (application/json)

    + Attributes (UserList)

+ Response 500 (application/json)

### Create New User [POST]
Create a new User.

+ Request with body (application/json)

    + Attributes (UserCreate)


+ Response 201

    + Attributes (UserFull)

+ Response 500 (application/json)


## User [/users/{id}]

+ Parameters

    + id: `58a42055d5ef19d5f69cd3f1` (required, string) - The user ID

### Get User [GET]
Get a single User.

+ Response 200 (application/json)

    + Attributes (UserFull)

+ Response 404 (application/json)

### Update a User [PUT]
To update a User, only the id is required. Every other field are optionnal. Here is an example of a request updating the firstname and lastname of a user.

+ Request (application/json)

    + Attributes (UserUpdate)

+ Response 200 (application/json)

    + Attributes (UserFull)

+ Response 404 (application/json)

+ Response 500 (application/json)


### Delete a User [DELETE]
Delete a single user

+ Response 204

    + Attributes (UserFull)

+ Response 404 (application/json)
