## PackageId
+ id: `4ac26132d5ef125de13bac31` (string) - Package unique identifier


## PackageExternal
+ package: `4ac26132d5ef125de13bac31` (string) - Package unique identifier


## PackageFull
+ Include PackageId (required)
+ user - Package creator (required)
    + Include UserFull
+ Include TicketExternal
+ name: processim (required, string) - Package's name
+ maintainer: naida@nichols.net (required, string) - Package's maintainer
+ architecture: all (required, string) - Package's architecture
+ major: RICM3 (string) - Major for which this package was created
+ class: ALM (string) - Class for which this package was created
+ description: Code you processor (string) - Package's description
+ dependencies: gcc (string) - Package's dependencies
+ versions (array) - Package's versions
    + 1.0 (string)
    + 1.1 (string)
    + 1.2 (string)
+ createdAt: `2017-02-27T08:40:04.135Z` (required, string) - date/time (ISO8601 format) of creation of the Package
+ updatedAt: `2017-02-27T08:40:04.135Z` (required, string) - date/time (ISO8601 format) of last modification of the Package


## PackageList (array)
+ (PackageFull)


## PackageCreate
+ Include UserExternal (required)
+ name: processim (required, string) - Package's name
+ maintainer: naida@nichols.net (required, string) - Package's maintainer
+ architecture: all (required, string) - Package's architecture
+ major: RICM3 (string) - Major for which this package was created
+ class: ALM (string) - Class for which this package was created
+ description: Code you processor (string) - Package's description
+ dependencies: gcc (string) - Package's dependencies
+ versions (array) - Package's versions
    + 1.0 (string)
    + 1.1 (string)
    + 1.2 (string)

## PackageUpdate
+ major: RICM (string) - Major for which this package was created
+ class: ALM2 (string) - Class for which this package was created
