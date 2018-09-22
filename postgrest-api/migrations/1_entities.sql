INSERT INTO auth.users VALUES ('demo@example.org', 'demo');

CREATE TABLE IF NOT EXISTS item_types (
  id SERIAL PRIMARY KEY,
  item_category TEXT NOT NULL,
  item_labels JSONB,
  description TEXT,
  requirements JSONB,
  exp_time_months INTEGER,
  image_path TEXT


CREATE TABLE IF NOT EXISTS agencies (
  id SERIAL PRIMARY KEY,
  image_path TEXT,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT,
  agency TEXT NOT NULL
);

CREATE TABLE shopping_list_items (
  id SERIAL PRIMARY KEY,
	item_category VARCHAR(255) NOT NULL,
	item_labels jsonb,
	priority INTEGER,
	date_requested DATE DEFAULT CURRENT_DATE,
  FOREIGN KEY (agency_id) REFERENCES agencies (id)
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
  image_path TEXT,
  agency_id INTEGER,
  approval_status VARCHAR(100),
  FOREIGN KEY (agency_id) REFERENCES agencies (id)
);

CREATE TABLE IF NOT EXISTS drop_locations (
  id SERIAL PRIMARY KEY,
  address TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS item_status(
  id SERIAL PRIMARY KEY,
  client_list_item_id INTEGER,
  msg TEXT,
  image_path TEXT,
  address TEXT NOT NULL,
  status TEXT NOT NULL,
  updated_at DATE,
  FOREIGN KEY (client_list) REFERENCES shopping_list_items(id)


CREATE TABLE IF NOT EXISTS item_inventory (
  id SERIAL PRIMARY KEY,
  item_type INTEGER,
  item_labels JSONB,
  item_status INTEGER,
  image_path TEXT,
  donor_email TEXT,
  location_id INTEGER,
  added_by TEXT NOT NULL,
  FOREIGN KEY (item_type) REFERENCES item_types(id),
  FOREIGN KEY (item_status) REFERENCES item_status(id),
  FOREIGN KEY (location_id) REFERENCES drop_locations(id)
);
