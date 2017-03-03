## UserId
+ id: 1 (number) - User unique identifier


## ExternalUserId
+ user: 1 (number) - User unique identifier


## UserAllInfos
+ Include UserReqPOST
+ createdAt: `2017-02-27T08:39:54.459Z` (required, string) - date/time (ISO8601 format) of creation of the User
+ updatedAt: `2017-02-27T08:39:54.459Z` (required, string) - date/time (ISO8601 format) of last modification of the User


## UserCreateInfos
+ username: nnichols (required, string) - username of User
+ email: naida@nichols.net (required, string) - email of User
+ firstname: Naida (string) - first name of User
+ lastname: NICHOLS (string) - last name of User
+ userlevel: 2 (number) - permissions level of User


## UserReqPOST
+ Include UserCreateInfos


## UserReqPUT
+ firstname: Naidä (string) - first name of User
+ lastname: NICHÖL (string) - last name of User


## UserResGET
+ Include UserId
+ Include UserAllInfos


## UserResGETAll (array)
+ (UserResGET)


## UserResPOST
+ Include UserId
+ Include UserAllInfos


## UserResPUT
+ Include UserResGET


## UserResDELETE
+ Include UserResGET
