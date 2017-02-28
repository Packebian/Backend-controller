## Ticket List [/tickets]

### Get Tickets [GET]
Get a list of tickets.

+ Response 200 (application/json)

    + Attributes (TicketList)

+ Response 500 (application/json)

### Create New Ticket [POST]
Create a new Ticket

+ Request with body (application/json)

    + Attributes (TicketCreate)

+ Response 201

    + Attributes (TicketFull)

+ Response 500 (application/json)


## Ticket [/tickets/{id}]

+ Parameters

    + id: `58a5702f90b3871c00e9fc91` (required, string) - The ticket ID

### Get Ticket [GET]
Get a single Ticket.

+ Response 200 (application/json)

    + Attributes (TicketFull)

+ Response 404 (application/json)

### Update a Ticket [PUT]
Every field is optionnal. Here is an example of a request updating the major and class of a ticket.

+ Request (application/json)

    + Attributes (TicketUpdate)

+ Response 200 (application/json)

    + Attributes (TicketFull)
        + Include TicketUpdate

+ Response 404 (application/json)

+ Response 500 (application/json)


### Delete a Ticket [DELETE]
Delete a single ticket

+ Response 204

    + Attributes (TicketFull)

+ Response 404 (application/json)
