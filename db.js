const pg = require('pg');
const uuid = require('uuid');
const client = new pg.Client(
  process.env.DATABASE_URL || 'postgres://localhost/acme_schools'
);

client.connect();

const sync = async () => {
  const SQL = `
  DROP TABLE IF EXISTS student;
  DROP TABLE IF EXISTS school;

  CREATE TABLE school(
    id UUID PRIMARY KEY,
    name VARCHAR (100) NOT NULL
  );

  CREATE TABLE student(
    id UUID PRIMARY KEY,
    name VARCHAR NOT NULL,
    "schoolId" UUID REFERENCES school(id) DEFAULT NULL
  );
`;
  await client.query(SQL);
};

module.exports = {
  sync,
};
