DROP DATABASE IF EXISTS icecream_flavors;
CREATE DATABASE icecream_flavors;

\c icecream_flavors

CREATE TABLE chunk_types (
  id SERIAL PRIMARY KEY,
  name VARCHAR(64)
);

CREATE TABLE chunks (
  id SERIAL PRIMARY KEY,
  name VARCHAR(64),
  type_id INTEGER REFERENCES chunk_types
);

CREATE TABLE flavors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(64)
);

CREATE TABLE flavor_chunks (
  id SERIAL PRIMARY KEY,
  chunk_id INTEGER REFERENCES chunks,
  flavor_id INTEGER REFERENCES flavors
);
