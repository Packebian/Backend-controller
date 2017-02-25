## Users List [/users]

### Get Users [GET]
Get a list of users.

+ Response 200 (application/json)

    + Attributes (UserList)

+ Response 500 (application/json)

### Create New User [POST]
Create a new User

+ Request with body (application/json)

    + Body

            {
                "username": "nnichols",
                "email": "naida@nichols.net",
                "firstname": "Naida",
                "lastname": "NICHOLS",
                "userlevel": 0
            }

+ Response 201

    + Attributes (User)

+ Response 500 (application/json)


## User [/users/{id}]

+ Parameters

    + id: `68a5sdf67` (required, string) - The user ID

### Get User [GET]
Get a single User.

+ Response 200 (application/json)

    + Attributes (User)

+ Response 404 (application/json)

### Update a User [PUT]

+ Request (application/json)

    + Body

            {
                "id": "68a5sdf67",
                "username": "nnichols",
                "email": "naida@nichols.net",
                "firstname": "Naida",
                "lastname": "NICHOLS",
                "userlevel": 0
            }

+ Response 200 (application/json)

    + Attributes (User)

+ Response 404 (application/json)

+ Response 500 (application/json)


### Delete a User [DELETE]
Delete a single user

+ Response 204

    + Attributes (User)

+ Response 404 (application/json)
