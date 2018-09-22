INSERT INTO auth.users VALUES ('demo@example.org', 'demo');

CREATE TABLE IF NOT EXISTS item_types (
  id SERIAL PRIMARY KEY,
  item_category TEXT NOT NULL,
  item_labels JSONB,
  description TEXT,
  requirements JSONB,
  exp_time_months INTEGER,
  image JSONB
);

CREATE TABLE IF NOT EXISTS agencies (
  id SERIAL PRIMARY KEY,
  image JSONB,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT,
  agency TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS clients (
  id SERIAL PRIMARY KEY,
  lname TEXT NOT NULL,
  fname TEXT NOT NULL,
  shopping_list JSONB,
  email TEXT,
  phone TEXT,
  custom_info JSONB,
  agent TEXT,
  image JSONB,
  approval_status TEXT DEFAULT 'Pending',
  agency_id INTEGER,
  FOREIGN KEY (agency_id) REFERENCES agencies (id)
);

CREATE TABLE shopping_list_items (
  id SERIAL PRIMARY KEY,
	item_category TEXT NOT NULL,
	item_labels JSONB,
	item_priority INTEGER,
	date_requested DATE DEFAULT CURRENT_DATE,
  client_id INTEGER,
  FOREIGN KEY (client_id) REFERENCES clients (id)
	);

CREATE TABLE IF NOT EXISTS drop_locations(
  id SERIAL PRIMARY KEY,
  address TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS item_status(
  id SERIAL PRIMARY KEY,
  msg TEXT,
  image JSONB,
  status TEXT NOT NULL,
  updated_at DATE,
  shopping_list_item_id INTEGER,
  drop_locations INTEGER,
  FOREIGN KEY (drop_locations) REFERENCES drop_locations(id),
  FOREIGN KEY (shopping_list_item_id) REFERENCES shopping_list_items(id)
);

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
  FOREIGN KEY (location_id) REFERENCES shopping_list_items(id)
);
