CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price NUMERIC(6, 2) NOT NULL,
  section VARCHAR(255) NOT NULL
);

CREATE TABLE shoppers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  shopper_id INTEGER REFERENCES shoppers (id),
  date_placed TIMESTAMP NOT NULL DEFAULT now()
);

CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders (id),
  item_id INTEGER REFERENCES items (id)
);
