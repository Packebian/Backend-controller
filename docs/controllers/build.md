## Build List [/builds]

### Get Builds [GET]
Get a list of builds.

+ Response 200 (application/json; charset=utf-8)

    + Attributes (BuildList)

+ Response 500 (application/json; charset=utf-8)

### Create New Build [POST]
Create a new Build

+ Request with body (application/json; charset=utf-8)

    + Attributes (BuildCreate)

+ Response 201

    + Attributes (BuildFull)

+ Response 500 (application/json; charset=utf-8)


## Build [/builds/{id}]

+ Parameters

    + id: `4ef41ce7a13a51ac76c24ac2` (required, string) - The build ID

### Get Build [GET]
Get a single Build.

+ Response 200 (application/json; charset=utf-8)

    + Attributes (BuildFull)

+ Response 404 (application/json; charset=utf-8)

### Update a Build [PUT]
Every field is optionnal. Here is an example of a request updating the result of a build.

+ Request (application/json; charset=utf-8)

    + Attributes (BuildUpdate)

+ Response 200 (application/json; charset=utf-8)

    + Attributes (BuildFull)
        + Include BuildUpdate

+ Response 404 (application/json; charset=utf-8)

+ Response 500 (application/json; charset=utf-8)


### Delete a Build [DELETE]
Delete a single build

+ Response 200 (application/json; charset=utf-8)

    + Attributes (BuildFull)

+ Response 404 (application/json; charset=utf-8)
