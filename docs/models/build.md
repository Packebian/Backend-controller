## BuildId
+ id: 1 (number) - Build unique identifier


## BuildExternal
+ package: 1 (number) - Build unique identifier


## BuildFull
+ Include BuildId (required)
+ version: `1.1` (required, string) - Version of the package built
+ result: Success (required, string) - Result of build
+ createdAt: `2017-02-27T08:40:09.056Z` (required, string) - date/time (ISO8601 format) of creation of the Package
+ updatedAt: `2017-02-27T08:40:09.056Z` (required, string) - date/time (ISO8601 format) of last modification of the Package


## BuildList (array)
+ (BuildFull)


## BuildCreate
+ Include PackageId (required)
+ version: `1.1` (required, number) - Version of the package to build


## BuildUpdate
+ result: Pending (required, string) - Result of build
