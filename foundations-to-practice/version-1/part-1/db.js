const pgp = require('pg-promise')()

const db = pgp('postgres://localhost/recipes')
db.connect()