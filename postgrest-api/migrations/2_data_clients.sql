
INSERT INTO item_types(item_category, item_labels, description, requirements, exp_time_months, image)
VALUES ('Crib', '["size"]', 'a young child''s bed with barred or latticed sides.', '["The crib has no cracks or breaks", "The crib does not have a drop-side", "Instructions for proper assembly and use are available, with crib or online", "The crib has not been recalled", "All hardware is complete and in a plastic bag or envelope attached to the crib. There are no missing parts."]', 36, '{}'),
 ('Stroller', '["size", "type"]', 'A chair on wheels, typically folding, in which a baby or young child can be pushed along.', '["instructions", "good condition", "clean"]', 36, '{}'),
  ('Diapers', '["size", "type"]', 'A piece of absorbent material wrapped around a baby''s bottom and between its legs to absorb and retain urine and feces', '["New"]', null, '{}'), 
  ('Toys', '["type", "age group"]', 'an object for a child to play with, typically a model or miniature replica of something.', '["Good Condition", "Clean"]', 12, '{}');

INSERT INTO agencies (image, email, phone, address, website, agency)
VALUES ('{}', null, '778-331-4500', null, 'http://www.vacfss.com/programs/child-protection/', 'Aboriginal Child Protection Agency East Vancouver'), 
('{}', null, '604-253-4044', null, 'UGM.ca', 'Union Gospel Mission'), 
('{}', null, '604-895-5849', null, 'singlemothers@ywcavan.org', 'YWCA Single Mother’s Support Services'),
('{}', null, '604-872-7676', null, 'http://salvationarmyvcfs.com/', 'Salvation Army');

INSERT INTO clients (lname, fname, email, phone, custom_info, agent, image, agency_id)
VALUES ('Smith', 'Lorean', 'LoreanLSmith@gmail.com', '905-323-1324', '{}', 'Mellany Mulik', '{}', 1),
('Regal', 'Ross', 'RossRegal@gmail.com', '225-333-1537', '{}', 'Tina Broth', '{}', 2);

INSERT INTO shopping_list_items (item_priority, client_id, item_type)
VALUES (10, 1, 1), (4, 2, 1), (9, 2, 3);

INSERT INTO item_inventory (item_type, image, donor_email, added_by)
VALUES 
(1, '{}', 'samH204@hotmail.com', 'Samantha H'), 
(1, '{}', 'Mather@gmail.com', 'Stephanie B'),
(1, '{}', 'talliT@gmail.com', 'Stephanie B'),
(2, '{}', 'jonnieK@outlook.com', 'Stephanie B'),
(3, '{}', 'samH20@hotmail.com', 'Samantha H'),
(1, '{}', 'jimmyhshoe@gmail.com', 'Samantha H'),
(2, '{}', 'jimmyhshoe@gmail.com', 'Samantha H'),
(4, '{}', 'jimmyhshoe@gmail.com', 'Samantha H');

INSERT INTO item_match (item_inventory_id, shopping_list_item_id)
VALUES (5, 3);

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
