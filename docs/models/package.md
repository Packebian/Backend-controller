## PackageId
+ id: 1 (number) - Package unique identifier


## ExternalPackageId
+ package: 1 (number) - Package unique identifier


## PackageAllInfos
+ Include PackageCreateInfos
+ createdAt: `2017-02-27T08:40:04.135Z` (required, string) - date/time (ISO8601 format) of creation of the Package
+ updatedAt: `2017-02-27T08:40:04.135Z` (required, string) - date/time (ISO8601 format) of last modification of the Package


## PackageCreateInfos
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


## PackageReqPOST
+ Include ExternalUserId (required)
+ Include ExternalTicketId
+ Include PackageCreateInfos


## PackageReqPUT
+ major: RICM (string) - Major for which this package was created
+ class: ALM2 (string) - Class for which this package was created


## PackageResGET
+ Include PackageId
+ Include PackageAllInfos
+ Include ExternalTicketId
+ user (required) - Creator of package
    + Include UserAllInfos


## PackageResGETAll (array)
+ (PackageResGET)


## PackageResPOST
+ Include PackageId
+ Include ExternalUserId (required)
+ Include ExternalTicketId
+ Include PackageAllInfos


## PackageResPUT
+ Include PackageResGET


## PackageResDELETE
+ Include PackageResGET
