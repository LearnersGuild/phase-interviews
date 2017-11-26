\c recipes

INSERT INTO recipes (name) VALUES
  ('chocolate chip cookies'),
  ('pound cake'),
  ('chocolate brownies')
;

INSERT INTO ingredients (name) VALUES
  ('flour'), -- 1
  ('sugar'), -- 2
  ('vanilla'), -- 3
  ('chocolate chips'), -- 4
  ('butter'), -- 5
  ('salt'), -- 6
  ('baking soda'), -- 7
  ('brown sugar'), -- 8
  ('eggs') -- 9
;

INSERT INTO recipe_ingredients (recipe_id, ingredient_id, amount, amount_units) VALUES
  (1, 1, 2.25, 'cups'),
  (1, 2, 1, 'tsp'),
  (1, 6, 1, 'tsp'),
  (1, 5, 1, 'cup'),
  (1, 8, 0.75, 'cup'),
  (1, 2, 0.75, 'cup'),
  (1, 6, 1, 'tsp'),
  (1, 9, 2, '')
;
