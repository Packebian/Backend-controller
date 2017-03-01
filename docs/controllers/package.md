## Package List [/packages]

### Get Packages [GET]
Get a list of packages.

+ Response 200 (application/json; charset=utf-8)

    + Attributes (PackageList)

+ Response 500 (application/json; charset=utf-8)

### Create New Package [POST]
Create a new Package

+ Request with body (application/json; charset=utf-8)

    + Attributes (PackageCreate)

+ Response 201

    + Attributes (PackageFull)

+ Response 500 (application/json; charset=utf-8)


## Package [/packages/{id}]

+ Parameters

    + id: `4ac26132d5ef125de13bac31` (required, string) - The package ID

### Get Package [GET]
Get a single Package.

+ Response 200 (application/json; charset=utf-8)

    + Attributes (PackageFull)

+ Response 404 (application/json; charset=utf-8)

### Update a Package [PUT]
Every field is optionnal. Here is an example of a request updating the major and class of a package.

+ Request (application/json; charset=utf-8)

    + Attributes (PackageUpdate)

+ Response 200 (application/json; charset=utf-8)

    + Attributes (PackageFull)
        + Include PackageUpdate

+ Response 404 (application/json; charset=utf-8)

+ Response 500 (application/json; charset=utf-8)


### Delete a Package [DELETE]
Delete a single package

+ Response 200 (application/json; charset=utf-8)

    + Attributes (PackageFull)

+ Response 404 (application/json; charset=utf-8)
