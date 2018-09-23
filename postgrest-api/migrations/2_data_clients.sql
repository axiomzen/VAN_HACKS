-- INSERT INTO item_types
INSERT INTO item_types
VALUES (1, 'Crib', '["size"]', 'a young child''s bed with barred or latticed sides.', '["instructions", "good condition", "clean"]', 36, '{}'), (2, 'Stroller', '["size", "type"]', 'A chair on wheels, typically folding, in which a baby or young child can be pushed along.', '["instructions", "good condition", "clean"]', 36, '{}'), (3, 'Diapers', '["size", "type"]', 'A piece of absorbent material wrapped around a baby''s bottom and between its legs to absorb and retain urine and feces', '["New"]', null, '{}'), (4, 'Toys', '["type", "age group"]', 'an object for a child to play with, typically a model or miniature replica of something.', '["Good Condition", "Clean"]', 12, '{}');

INSERT INTO agencies
VALUES (1, '{}', null, '778-331-4500', null, 'http://www.vacfss.com/programs/child-protection/', 'Aboriginal Child Protection Agency East Vancouver'), (2, '{}', null, '604-253-4044', null, 'UGM.ca', 'Union Gospel Mission'), (3, '{}', null, '604-895-5849', null, 'singlemothers@ywcavan.org', 'YWCA Single Mother’s Support Services'), (4, '{}', null, '604-872-7676', null, 'http://salvationarmyvcfs.com/', 'Salvation Army');

INSERT INTO clients
VALUES (1, 'Smith', 'Lora', 'LoraSmith@gmail.com', '905-323-1324', '{}', 'Mellany Mulik', '{}', 'Pending', 1),
(2, 'Regal', 'Ross', 'RossRegal@gmail.com', '225-333-1537', '{}', 'Tina Broth', '{}', 'Pending', 2);

INSERT INTO shopping_list_items (id, item_priority, client_id, item_type)
VALUES (1, 10, 1, 1),(2, 4, 2, 1),(3, 9, 2, 3);


CREATE TABLE IF NOT EXISTS item_inventory (
  id SERIAL PRIMARY KEY,
  item_type INTEGER,
  item_labels JSONB,
  item_status INTEGER,
  image JSONB,
  donor_email TEXT,
  location_id INTEGER,
  added_by TEXT NOT NULL,
  FOREIGN KEY (item_type) REFERENCES item_types(id),
  FOREIGN KEY (item_status) REFERENCES item_status(id),
  FOREIGN KEY (location_id) REFERENCES drop_locations(id)
);

INSERT INTO item_inventory (id, item_type, image, donor_email, added_by)
VALUES 
(1, 1, '{}', 'jimmy4@hotmail.com', 'Samantha H'), 
(2, 1, '{}', 'Mather@gmail.com', 'Matheiw Matherr'),
(3, 1, '{}', 'talliT@gmail.com', 'Talia T'),
(4, 2, '{}', 'jonnieK@outlook.com', 'Jonnie K'),
(5, 3, '{}', 'jimmy4@hotmail.com', 'Samantha H');

INSERT INTO item_status (status, item_inventory_id, shopping_list_item_id)
VALUES ('matched', 5, 3);

INSERT INTO referrals_form_inputs
VALUES (1, 'First name', 'shortAnswer', 'FALSE');

INSERT INTO referrals_form_inputs
VALUES (2, 'Last name', 'shortAnswer', 'FALSE');

INSERT INTO referrals_form_inputs
VALUES (3, 'Email', 'shortAnswer', 'FALSE');

INSERT INTO referrals_form_inputs
VALUES (4, 'Phone number', 'shortAnswer', 'FALSE');

INSERT INTO referrals_form_inputs
VALUES (5, 'Photo (URL)', 'shortAnswer', 'FALSE');
