## Ticket
+ id: 2a4a3d19b (required, string) - Unique identifier
+ user: 68a5sdf67 (required, string) - id of the ticket creator
+ status: 1 (string) - Status of ticket. -1 if refused, 1 if accepted, 0 otherwise.
+ name: processim (required, string) - name of ticket
+ maintainer: naida@nichols.net (required, string) - email adress of User
+ architecture: all (required, string) -
+ major: RICM3 (string) -
+ class: ALM (string) -
+ description: Code you processor (string) -
+ dependencies: gcc (string) - dependencies of the ticket
+ versions (array) - versions of the package
    + 1.0 (string)
    + 1.2 (string)


## TicketList (array)
+ (Ticket)
