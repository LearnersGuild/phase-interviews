\c flights

INSERT INTO flights (flight_number) VALUES
  ('1147A'),
  ('8896'),
  ('7'),
  ('8422B'),
  ('232'),
  ('432'),
  ('9007'),
  ('4')
;

INSERT INTO passengers (name) VALUES
  ('Michael Jackson'),
  ('Jermaine Jackson'),
  ('Marlon Jackson'),
  ('Tito Jackson'),
  ('Jackie Jackson'),
  ('Baby Spice'),
  ('Sporty Spice'),
  ('Scary Spice'),
  ('Posh Spice')
;

INSERT INTO flight_passengers (passenger_id, flight_id) VALUES
  (1, 1),
  (1, 2),
  (1, 3),
  (1, 4),
  (1, 5),
  (1, 7),
  (1, 8),
  (2, 2),
  (2, 4),
  (2, 6),
  (2, 8),
  (3, 3),
  (3, 4),
  (3, 5),
  (3, 6),
  (3, 7),
  (3, 8),
  (4, 1),
  (4, 2),
  (5, 1),
  (5, 2),
  (5, 3),
  (5, 4),
  (5, 6),
  (6, 1),
  (6, 2),
  (6, 3),
  (6, 4),
  (6, 5),
  (6, 6),
  (6, 7),
  (6, 8),
  (7, 4),
  (8, 1),
  (8, 3),
  (8, 5),
  (9, 2),
  (9, 3),
  (9, 4),
  (9, 5),
  (9, 6)
;
