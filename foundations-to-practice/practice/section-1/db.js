const pgp = require('pg-promise')()

const db = pgp('psql:///localhost/icecream_flavors')
db.connect()
