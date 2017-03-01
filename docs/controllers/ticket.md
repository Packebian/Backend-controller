## Ticket List [/tickets]

### Get Tickets [GET]
Get a list of tickets.

+ Response 200 (application/json; charset=utf-8)

    + Attributes (TicketList)

+ Response 500 (application/json; charset=utf-8)

### Create New Ticket [POST]
Create a new Ticket

+ Request with body (application/json; charset=utf-8)

    + Attributes (TicketCreate)

+ Response 201

    + Attributes (TicketFull)

+ Response 500 (application/json; charset=utf-8)


## Ticket [/tickets/{id}]

+ Parameters

    + id: `58a5702f90b3871c00e9fc91` (required, string) - The ticket ID

### Get Ticket [GET]
Get a single Ticket.

+ Response 200 (application/json; charset=utf-8)

    + Attributes (TicketFull)

+ Response 404 (application/json; charset=utf-8)

### Update a Ticket [PUT]
Every field is optionnal. Here is an example of a request updating the major and class of a ticket.

+ Request (application/json; charset=utf-8)

    + Attributes (TicketUpdate)

+ Response 200 (application/json; charset=utf-8)

    + Attributes (TicketFull)
        + Include TicketUpdate

+ Response 404 (application/json; charset=utf-8)

+ Response 500 (application/json; charset=utf-8)


### Delete a Ticket [DELETE]
Delete a single ticket

+ Response 200 (application/json; charset=utf-8)

    + Attributes (TicketFull)

+ Response 404 (application/json; charset=utf-8)
