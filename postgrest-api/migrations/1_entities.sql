INSERT INTO auth.users VALUES ('demo@example.org', 'demo');

CREATE TABLE IF NOT EXISTS item_types (
  id SERIAL PRIMARY KEY,
  item_category VARCHAR(255) NOT NULL,
  item_labels jsonb,
  description VARCHAR(255),
  requirements jsonb,
  exp_time TIME,
  image_path VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS agencies (
  id SERIAL PRIMARY KEY,
  image_path VARCHAR(100),
  email VARCHAR(50) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  address VARCHAR(100),
  agency VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS clients (
  id SERIAL PRIMARY KEY,
  lname VARCHAR(50) NOT NULL,
  fname VARCHAR(50) NOT NULL,
  shopping_list jsonb,
  email VARCHAR(80),
  phone VARCHAR(20),
  custom_info jsonb,
  agent VARCHAR(80),
  image_path VARCHAR(100),
  agency_id INTEGER,
  FOREIGN KEY (agency_id) REFERENCES agencies (id)
);

CREATE TABLE IF NOT EXISTS drop_locations (
  id SERIAL PRIMARY KEY,
  address VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS item_status(
  id SERIAL PRIMARY KEY,
  client_id INTEGER,
  msg TEXT,
  image_path VARCHAR(100),
  address VARCHAR(100) NOT NULL,
  status VARCHAR(100) NOT NULL,
  updated_at DATE,
  FOREIGN KEY (client_id) REFERENCES clients(id)
);

CREATE TABLE IF NOT EXISTS item_inventory (
  id SERIAL PRIMARY KEY,
  item_type INTEGER,
  item_labels jsonb,
  item_status INTEGER,
  image_path VARCHAR(100),
  donor_email VARCHAR(100),
  location_id INTEGER,
  added_by VARCHAR(100) NOT NULL,
  FOREIGN KEY (item_type) REFERENCES item_types(id),
  FOREIGN KEY (item_status) REFERENCES item_status(id),
  FOREIGN KEY (location_id) REFERENCES drop_locations(id)
);
