## Package List [/packages]

### Get Packages [GET]
Get a list of packages.

+ Response 200 (application/json)

    + Attributes (PackageList)

+ Response 500 (application/json)

### Create New Package [POST]
Create a new Package

+ Request with body (application/json)

    + Attributes (PackageCreate)

+ Response 201

    + Attributes (PackageFull)

+ Response 500 (application/json)


## Package [/packages/{id}]

+ Parameters

    + id: `4ac26132d5ef125de13bac31` (required, string) - The package ID

### Get Package [GET]
Get a single Package.

+ Response 200 (application/json)

    + Attributes (PackageFull)

+ Response 404 (application/json)

### Update a Package [PUT]
Every field is optionnal. Here is an example of a request updating the major and class of a package.

+ Request (application/json)

    + Attributes (PackageUpdate)

+ Response 200 (application/json)

    + Attributes (PackageFull)
        + Include PackageUpdate

+ Response 404 (application/json)

+ Response 500 (application/json)


### Delete a Package [DELETE]
Delete a single package

+ Response 204

    + Attributes (PackageFull)

+ Response 404 (application/json)
