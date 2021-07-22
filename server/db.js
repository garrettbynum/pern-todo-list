const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "$6dHTWZGtsc&E7#m2qXKeJh#",
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
