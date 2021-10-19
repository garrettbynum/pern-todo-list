CREATE DATABASE perntodo;

DROP TABLE IF EXISTS todo;

CREATE TYPE status AS ENUM ('not started', 'in progress', 'completed');

CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255),
  status status
);
