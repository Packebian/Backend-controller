## TicketId
+ id: 1 (number) - Ticket unique identifier


## ExternalTicketId
+ ticket: 1 (number) - Ticket unique identifier


## TicketAllInfos
+ Include TicketCreateInfos
+ status: 1 (required, number) - Ticket's status. -1 if refused, 1 if accepted, 0 otherwise.
+ results (required) - Results of the votes on the ticket
    + upvotes: 5 (required, number) - Number of upvotes
    + downvotes: 0 (required, number) - Number of downvotes
    + neutrals: 0 (required, number) - Number of neutral votes
+ createdAt: `2017-02-27T08:39:58.641Z` (required, string) - date/time (ISO8601 format) of creation of the Ticket
+ updatedAt: `2017-02-27T08:39:58.641Z` (required, string) - date/time (ISO8601 format) of last modification of the Ticket


## TicketCreateInfos
+ name: processim (required, string) - Ticket's name
+ maintainer: naida@nichols.net (required, string) - Ticket's maintainer
+ architecture: all (required, string) - Ticket's architecture (Package's architecture)
+ major: RICM3 (string) - Major for which this ticket was created (Package's major)
+ class: ALM (string) - Class for which this ticket was created (Package's class)
+ description: Code you processor (string) - Ticket's description (Package's description)
+ dependencies: gcc (string) - Ticket's dependencies (Package's dependencies)
+ versions (array) - Ticket's versions (Package's versions)
    + 1.0 (string)
    + 1.1 (string)
    + 1.2 (string)


## TicketReqPOST
+ Include ExternalUserId (required) - Creator of ticket
+ Include TicketCreateInfos


## TicketReqPUT
+ major: RICM (string) - Major for which this ticket was created (major of package)
+ class: ALM2 (string) - Class for which this ticket was created (class of package)


## TicketResGET
+ Include TicketId
+ Include TicketAllInfos
+ user (required) - Creator of ticket
    + Include UserAllInfos


## TicketResGETAll (array)
+ (TicketResGET)


## TicketResPOST
+ Include TicketId
+ Include ExternalUserId (required)
+ Include TicketAllInfos


## TicketResPUT
+ Include TicketResGET


## TicketResDELETE
+ Include TicketResGET
