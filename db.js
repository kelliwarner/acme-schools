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

const readSchools = async () => {
  const SQL = `SELECT * FROM school`;
  const response = await client.query(SQL);
  return response.rows;
};

const createSchools = async name => {
  const SQL = `INSERT INTO school (id, name) VALUES ($1, $2) returning *`;
  const response = await client.query(SQL, [uuid(), name]);
  return response.rows[0];
};

const readStudents = async () => {
  const SQL = `SELECT * FROM student`;
  const response = await client.query(SQL);
  return response.rows;
};

const createStudents = async name => {
  const SQL = `INSERT INTO student (id, name) VALUES ($1, $2) returning *`;
  const response = await client.query(SQL, [uuid(), name]);
  return response.rows[0];
};

module.exports = {
  sync,
  readSchools,
  createSchools,
  readStudents,
  createStudents,
};
