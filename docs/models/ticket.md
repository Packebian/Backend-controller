## TicketId
+ id: `58a5702f90b3871c00e9fc91` (string) - Ticket unique identifier

## TicketFull
+ Include TicketId
+ user - Ticket creator
    + Include UserFull
+ status: 1 (string) - Status of ticket. -1 if refused, 1 if accepted, 0 otherwise.
+ name: processim (string) - name of ticket
+ maintainer: naida@nichols.net (string) - Maintainer of User
+ architecture: all (string) - architecture of the ticket (architecture of package)
+ major: RICM3 (string) - Major for which this ticket was created (major of package)
+ class: ALM (string) - Class for which this ticket was created (class of package)
+ description: Code you processor (string) - Description of ticket (description of package)
+ dependencies: gcc (string) - dependencies of the ticket
+ versions (array) - versions of the package
    + 1.0 (string)
    + 1.2 (string)
+ results - Results of votes on tickets
  + upvotes: 5 (number) - Number of upvotes on the ticket
  + downvotes: 0 (number) - Number of downvotes on the ticket
  + neutrals: 0 (number) - Number of neutral votes on the ticket
+ createdAt: `2017-02-27T08:39:58.641Z` (string) - date/time (ISO8601 format) of creation of the Ticket
+ updatedAt: `2017-02-27T08:39:58.641Z` (string) - date/time (ISO8601 format) of last modification of the Ticket


## TicketList (array)
+ (TicketFull)


## TicketCreate
+ user: 58a42055d5ef19d5f69cd3f1 (required, string) - User id of creator
+ name: processim (required, string) - name of ticket
+ maintainer: naida@nichols.net (required, string) - Maintainer of User
+ architecture: all (required, string) - architecture of the ticket (architecture of package)
+ major: RICM3 (string) - Major for which this ticket was created (major of package)
+ class: ALM (string) - Class for which this ticket was created (class of package)
+ description: Code you processor (string) - Description of ticket (description of package)
+ dependencies: gcc (string) - dependencies of the ticket
+ versions (array) - versions of the package
    + 1.0 (string)
    + 1.2 (string)

## TicketUpdate
+ major: RICM (string) - Major for which this ticket was created (major of package)
+ class: ALM2 (string) - Class for which this ticket was created (class of package)
