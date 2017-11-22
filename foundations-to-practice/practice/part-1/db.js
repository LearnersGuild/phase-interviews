const pgp = require('pg-promise')()

const db = pgp('psql:///localhost/team_colors')
db.connect()
