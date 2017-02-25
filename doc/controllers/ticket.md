## Tickets List [/tickets]

### Get Tickets [GET]
Get a list of tickets.

+ Response 200 (application/json)

    + Attributes (TicketList)

+ Response 500 (application/json)

### Create New Ticket [POST]
Create a new Ticket

+ Request with body (application/json)

    + Body

            {
                "user": "68a5sdf67",
                "status": "1",
                "name": "processim",
                "maintainer": "naida@nichols.net",
                "architecture": "all",
                "major": "RICM3",
                "class": "ALM",
                "description": "Code you processor",
                "dependencies": "gcc",
                "versions": [
                    "1.0",
                    "1.2"
                ]
            }

+ Response 201

    + Attributes (Ticket)

+ Response 500 (application/json)


## Ticket [/tickets/{id}]

+ Parameters

    + id: `68a5sdf67` (required, string) - The ticket ID

### Get Ticket [GET]
Get a single Ticket.

+ Response 200 (application/json)

    + Attributes (Ticket)

+ Response 404 (application/json)

### Update a Ticket [PUT]

+ Request (application/json)

    + Body

            {
                "id": "2a4a3d19b",
                "user": "68a5sdf67",
                "status": "1",
                "name": "processim",
                "maintainer": "naida@nichols.net",
                "architecture": "all",
                "major": "RICM3",
                "class": "ALM",
                "description": "Code you processor",
                "dependencies": "gcc",
                "versions": [
                    "1.0",
                    "1.2"
                ]
            }

+ Response 200 (application/json)

    + Attributes (Ticket)

+ Response 404 (application/json)

+ Response 500 (application/json)


### Delete a Ticket [DELETE]
Delete a single ticket

+ Response 204

    + Attributes (Ticket)

+ Response 404 (application/json)
