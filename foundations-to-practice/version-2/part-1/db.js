const pgp = require('pg-promise')()

const db = pgp('postgres://localhost/flights')
db.connect()
