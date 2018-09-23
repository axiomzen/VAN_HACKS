-- INSERT INTO item_types
INSERT INTO item_types
VALUES (1, 'Crib', '["size"]', 'a young child''s bed with barred or latticed sides.', '["instructions", "good condition", "clean"]', 36, '{}'), (2, 'Stroller', '["size", "type"]', 'A chair on wheels, typically folding, in which a baby or young child can be pushed along.', '["instructions", "good condition", "clean"]', 36, '{}'), (3, 'Diapers', '["size", "type"]', 'A piece of absorbent material wrapped around a baby''s bottom and between its legs to absorb and retain urine and feces', '["New"]', null, '{}'), (4, 'Toys', '["type", "age group"]', 'an object for a child to play with, typically a model or miniature replica of something.', '["Good Condition", "Clean"]', 12, '{}');

INSERT INTO agencies
VALUES (1, '{}', null, '778-331-4500', null, 'http://www.vacfss.com/programs/child-protection/', 'Aboriginal Child Protection Agency East Vancouver'), (2, '{}', null, '604-253-4044', null, 'UGM.ca', 'Union Gospel Mission'), (3, '{}', null, '604-895-5849', null, 'singlemothers@ywcavan.org', 'YWCA Single Mother’s Support Services'), (4, '{}', null, '604-872-7676', null, 'http://salvationarmyvcfs.com/', 'Salvation Army');

INSERT INTO clients
VALUES (2, 'Smith', 'Lora', 'LoraSmith@gmail.com', '905-323-1324', '{}', 'Mellany Mulik', '{}', 'Pending', 1);
