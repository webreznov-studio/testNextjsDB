const Pool = require("pg").Pool;

const pool = new Pool({
  user: "yphgufcuilujsd",
  password: "b2fa413a9f9918e4c3fa1fb59f5d4ccbb9286b65683a00b8e978d627d0388bb8",
  host: "ec2-54-197-34-207.compute-1.amazonaws.com",
  port: 5432,
  database: "daogsq516giovp"
});

module.exports = pool;
