INSERT INTO auth.users VALUES ('demo@example.org', 'demo');

CREATE TABLE todos (
  id serial primary key,
  done boolean not null default false,
  task text not null,
  due timestamptz
);
