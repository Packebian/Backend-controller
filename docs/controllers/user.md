## User List [/users]

### Get Users [GET]
Get a list of users.

+ Response 200 (application/json; charset=utf-8)

    + Attributes (UserList)

+ Response 500 (application/json; charset=utf-8)

### Create New User [POST]
Create a new User.

+ Request with body (application/json; charset=utf-8)

    + Attributes (UserCreate)

+ Response 201 (application/json; charset=utf-8)

    + Attributes (UserFull)

+ Response 500 (application/json; charset=utf-8)


## User [/users/{id}]

+ Parameters

    + id: 1 (required, number) - The user ID

### Get User [GET]
Get a single User.

+ Response 200 (application/json; charset=utf-8)

    + Attributes (UserFull)

+ Response 404 (application/json; charset=utf-8)

### Update a User [PUT]
Every field is optionnal. Here is an example of a request updating the firstname and lastname of a user.

+ Request (application/json; charset=utf-8)

    + Attributes (UserUpdate)

+ Response 200 (application/json; charset=utf-8)

    + Attributes (UserFull)
        + Include UserUpdate

+ Response 404 (application/json; charset=utf-8)

+ Response 500 (application/json; charset=utf-8)


### Delete a User [DELETE]
Delete a single user

+ Response 200 (application/json; charset=utf-8)

    + Attributes (UserFull)

+ Response 404 (application/json; charset=utf-8)
