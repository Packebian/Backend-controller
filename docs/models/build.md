## BuildId
+ id: 1 (number) - Build unique identifier


## ExternalBuildId
+ package: 1 (number) - Build unique identifier


# BuildAllInfos
+ Include BuildCreateInfos
+ result: `Pending` (required, string) - Result of build
+ createdAt: `2017-02-27T08:40:09.056Z` (required, string) - date/time (ISO8601 format) of creation of the Package
+ updatedAt: `2017-02-27T08:40:09.056Z` (required, string) - date/time (ISO8601 format) of last modification of the Package


# BuildCreateInfos
+ version: `1.1` (required, string) - Version of the package to build


# BuildReqPOST
+ Include ExternalPackageId (required)
+ Include BuildCreateInfos


# BuildReqPUT
+ result: `Failure` (string) - Result of build


# BuildResGET
+ Include BuildId
+ Include ExternalPackageId
+ Include BuildAllInfos


# BuildResGETAll (array)
+ (BuildResGET)


# BuildResPOST
+ Include BuildId
+ Include ExternalPackageId
+ Include BuildAllInfos


# BuildResPUT
+ Include BuildResGET


# BuildResDELETE
+ Include BuildResGET
