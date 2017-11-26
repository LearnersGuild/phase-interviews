DROP DATABASE IF EXISTS recipes;
CREATE DATABASE recipes;

\c recipes

CREATE TABLE ingredients (
  id SERIAL PRIMARY KEY,
  name VARCHAR(64)
);

CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(64) UNIQUE
);

CREATE TABLE recipe_ingredients (
  id SERIAL PRIMARY KEY,
  recipe_id INTEGER REFERENCES recipes,
  ingredient_id INTEGER REFERENCES ingredients,
  amount INTEGER,
  amount_units VARCHAR(8)
);
