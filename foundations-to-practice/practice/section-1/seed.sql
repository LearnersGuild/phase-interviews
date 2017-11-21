\c icecream_flavors

INSERT INTO chunk_types (name) VALUES
  ('candy'),
  ('nuts'),
  ('fruit'),
  ('other')
;

INSERT INTO chunks (name, type_id) VALUES
  ('almonds', 2),
  ('toffee', 1),
  ('chocolate chips', 1),
  ('marshmallows', 1),
  ('gumballs', 1),
  ('pecans', 2),
  ('strawberries', 3),
  ('pistachios', 2),
  ('graham crackers', 4)
;

INSERT INTO flavors (name) VALUES
  ('mocha almond fudge'),
  ('mint chip'),
  ('rocky road'),
  ('bubble gum'),
  ('butter pecan'),
  ('strawberry cheesecake'),
  ('pistachio'),
  ('coffee toffee crunch'),
  ('s\'mores')
;

INSERT INTO flavor_chunks (chunk_id, flavor_id) VALUES
  (1, 1),
  (2, 3),
  (3, 1),
  (3, 3),
  (3, 4),
  (4, 5),
  (5, 6),
  (6, 7),
  (7, 8),
  (8, 2),
  (9, 1),
  (9, 3),
  (9, 9),
  (6, 9)
;
