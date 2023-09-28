const { Client } = require("pg");

const client = new Client({
  // connection
  host: "localhost",
  port: 5432,
  // access
  user: "root",
  password: "root",
  database: "adventurersbackpack",
});

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);

  return rows;
};
