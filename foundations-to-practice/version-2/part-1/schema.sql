DROP DATABASE IF EXISTS flights;
CREATE DATABASE flights;

\c flights

CREATE TABLE flights (
  id SERIAL PRIMARY KEY,
  flight_number VARCHAR(8)
);

CREATE TABLE passengers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(64)
);

CREATE TABLE flight_passengers (
  id SERIAL PRIMARY KEY,
  flight_id INTEGER REFERENCES flights,
  passenger_id INTEGER REFERENCES passengers
  --departs_at DATETIME
);
