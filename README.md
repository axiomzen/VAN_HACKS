# {VAN}HACKS 2018 -- Axiom Zen


## Usage

- Start PostgREST and the database:
  - `cd postgrest-api`
  - `docker-compose up`
  - PostgREST API is now running on port 3000
  - Postgres database is now running on port 5432
  - Swagger UI is now running in port 8080

- Start the backend (proxies to PostgREST API):
  - `cd backend`
  - `yarn install`
  - `POSTGREST_HOST=localhost:3000 node app.js`
  - The backend is now running on port 2000,
    proxying requests to the PostgREST API on port 3000

- Start the frontend:
  - `cd frontend`
  - `yarn install`
  - `yarn start`
  - The frontend is now running on port 4000

- Open http://localhost:4000

- Credentials:

  User: `demo@example.org`
  Password `demo`

