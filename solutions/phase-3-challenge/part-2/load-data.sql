-- Import items from CSV
COPY items(name, price, section)
FROM '/Users/tanner/LearnersGuild/phase-interviews/solutions/phase-3-challenge/part-2/seed-data/items.csv'
WITH (FORMAT 'csv', HEADER);

-- Import shoppers from CSV
COPY shoppers(id, name)
FROM '/Users/tanner/LearnersGuild/phase-interviews/solutions/phase-3-challenge/part-2/seed-data/shoppers.csv'
WITH (FORMAT 'csv', HEADER);

-- Add orders data
INSERT INTO orders (id, shopper_id, date_placed) values
  (1, 7, '6/6/2017'),
  (2, 2, '7/29/2016'),
  (3, 9, '3/25/2017'),
  (4, 4, '12/27/2016'),
  (5, 9, '11/27/2016'),
  (6, 6, '11/30/2016'),
  (7, 8, '4/14/2017'),
  (8, 8, '5/16/2017'),
  (9, 2, '4/12/2017'),
  (10, 1, '10/13/2016'),
  (11, 9, '2/17/2017'),
  (12, 10, '12/5/2016'),
  (13, 5, '3/8/2017'),
  (14, 8, '1/16/2017'),
  (15, 4, '11/6/2016'),
  (16, 7, '1/24/2017'),
  (17, 7, '7/18/2016'),
  (18, 3, '4/10/2017'),
  (19, 3, '11/11/2016'),
  (20, 8, '1/23/2017');

-- Add order items data
INSERT INTO order_items (order_id, item_id) VALUES
  (20, 3),
  (5, 14),
  (9, 29),
  (13, 9),
  (11, 25),
  (15, 25),
  (14, 7),
  (5, 5),
  (17, 23),
  (8, 26),
  (20, 18),
  (19, 22),
  (2, 25),
  (12, 12),
  (6, 9),
  (6, 16),
  (2, 6),
  (11, 28),
  (17, 33),
  (17, 30),
  (12, 26),
  (16, 22),
  (6, 4),
  (1, 30),
  (10, 4),
  (5, 34),
  (16, 24),
  (9, 6),
  (11, 9),
  (16, 15),
  (7, 1),
  (19, 38),
  (6, 9),
  (4, 20),
  (7, 2),
  (3, 10),
  (9, 22),
  (18, 36),
  (16, 13),
  (5, 12),
  (14, 18),
  (4, 4),
  (6, 20),
  (1, 8),
  (16, 24),
  (13, 37),
  (10, 26),
  (8, 7),
  (9, 40),
  (17, 25);
