CREATE DATABASE adventurersbackpack;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


CREATE TABLE IF NOT EXISTS adventurers(
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS wallet (
    gold INT,
    silver INT,
    copper INT,
    platinum INT,
    owner_id UUID,
  
  FOREIGN KEY(owner_id) REFERENCES adventurers(id)
);