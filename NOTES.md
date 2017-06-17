# Notes

## Unused sections of challenges

### Part 3: SQL schema & queries for database

Design a database schema for the `clients.json` data from part 2 and put the schema SQL in a file `schema.sql` file.

The schema you design should be able to answer questions like:

- What is the state and city of a client with ID 8?
- What are the phone numbers of all clients?
- What are the rep names of all clients?

Then write some example queries (you don't have to execute them, but they should be correct SQL) in `queries.sql`.

#### Requirements

- [ ] __30:__ Schema defined creates a table with columns and data types appropriate to the data from `clients.json`.
- [ ] __20:__ In `queries.sql`, there is a query to find all clients whose company name starts with "B".
- [ ] __20:__ In `queries.sql`, there is a query to return the count of all clients in Florida.
- [ ] __20:__ In `queries.sql`, there is a query to find the 10 largest clients (i.e. companies that have the most employees).
