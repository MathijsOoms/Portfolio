INSERT INTO parkinglots (id, name, price_per_hour)
VALUES
  (1, 'Antwerpen port', 5.00),
  (2, 'Ghent center', 3.50);

INSERT INTO parkingspots (id, spot_number, occupying_user, parking_lot_id)
VALUES
  (1, 'A1', NULL, 1),
  (2, 'B2', NULL, 1),
  (3, 'C3', NULL, 1),
  (4, 'D4', NULL, 1),
  (5, 'E5', NULL, 1),
  (6, 'F1', NULL, 2),
  (7, 'G2', NULL, 2),
  (8, 'H3', NULL, 2),
  (9, 'I4', NULL, 2);