INSERT INTO auth.users VALUES ('demo@example.org', 'demo');

CREATE TABLE IF NOT EXISTS item_types (
  id SERIAL,
	item_category VARCHAR(255) NOT NULL,
	item_labels jsonb, 
	description VARCHAR(255),
	requirements jsonb,
	exp_time TIME,
	PRIMARY KEY (id)
	image_path VARCHAR(100),
	) ;


CREATE TABLE IF NOT EXISTS client (
  id SERIAL,
	lname VARCHAR(50) NOT NULL,
	fname VARCHAR(50) NOT NULL,
	shopping_list jsonb,
	email VARCHAR(80),
	phone VARCHAR(20),
	custom_info jsonb,
	agent VARCHAR(80),
	image_path VARCHAR(100),
	agency_id INTEGER REFERENCES agencies(id),
	PRIMARY KEY (id)
	) ;

 
CREATE TABLE IF NOT EXISTS agencies (
    id SERIAL,
    image_path VARCHAR(100),
	email VARCHAR(50) NOT NULL,
	phone VARCHAR(20) NOT NULL,
	address VARCHAR(100),
	agency VARCHAR(100) NOT NULL,
	PRIMARY KEY (id)
	);

CREATE TABLE IF NOT EXISTS drop_locations (
  id SERIAL,
  address VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
  );

CREATE TABLE IF NOT EXISTS item_status(
  id SERIAL,
  client_id INTEGER REFERENCES client(id),
  msg TEXT, 
  image_path VARCHAR(100),
  address VARCHAR(100) NOT NULL,
  status VARCHAR(100) NOT NULL,
  updated_at DATE,
  PRIMARY KEY (id)
  );

CREATE TABLE IF NOT EXISTS item_inventory (
  id SERIAL,
  item_type INTEGER REFERENCES item_types(id),
  item_labels jsonb,
  item_status INTEGER REFERENCES item_status(id),
  image_path VARCHAR(100),
  donor_email VARCHAR(100),
  location_id INTEGER REFERENCES drop_locations(id),
  added_by VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
  );






	