
CREATE ROLE anon NOLOGIN;
GRANT anon TO admin;
GRANT USAGE ON SCHEMA public TO anon;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO anon;

CREATE ROLE someone NOLOGIN;
GRANT someone TO admin;
GRANT USAGE ON SCHEMA public TO someone;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO someone;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO someone;

CREATE SCHEMA auth;

CREATE TABLE auth.users (
  email TEXT PRIMARY KEY CHECK ( email ~* '^.+@.+\..+$' ),
  password TEXT NOT NULL
);

CREATE EXTENSION pgcrypto;

CREATE FUNCTION auth.encrypt_password() RETURNS TRIGGER
LANGUAGE plpgsql as $$
  BEGIN
    IF tg_op = 'INSERT' OR new.password <> old.password THEN
      new.password = crypt(new.password, gen_salt('bf'));
    END IF;
    RETURN new;
  END
$$;

CREATE TRIGGER encrypt_password
  BEFORE INSERT OR UPDATE ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE auth.encrypt_password();

-- not available for direct queries because it lives in a separate schema
GRANT USAGE ON SCHEMA public, auth TO anon;
GRANT SELECT ON TABLE auth.users TO anon;

CREATE FUNCTION auth.exists(email text, password text) RETURNS BOOL
LANGUAGE plpgsql AS $$
  BEGIN
    RETURN (
      SELECT TRUE FROM auth.users
      WHERE users.email = exists.email
          AND users.password = crypt(exists.password, users.password)
      );
  END;
$$;



CREATE TYPE auth.jwt_token AS (
  token text
);


CREATE EXTENSION pgjwt;


CREATE FUNCTION login(email text, password text) RETURNS auth.jwt_token
LANGUAGE plpgsql AS $$
  DECLARE
    result auth.jwt_token;
  BEGIN
    IF auth.exists(email, password) IS NULL then
      RAISE invalid_password USING message = 'invalid user or password';
    END IF;

    SELECT sign(
      row_to_json(r), current_setting('app.jwt_secret')
      ) AS token
      FROM (
        SELECT
          'someone'::text AS role,
          login.email AS email,
          extract(epoch FROM now())::integer + current_setting('app.jwt_duration')::integer AS exp
      ) r
      INTO result;
    RETURN result;
  END;
$$;


GRANT EXECUTE ON FUNCTION login(text, text) TO anon;

