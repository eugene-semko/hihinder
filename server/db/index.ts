import { pass } from "../env";

const Pool = require("pg").Pool;
export const DB = process.env.DATABASE_URL
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    })
  : new Pool({
      user: "postgres",
      password: pass,
      host: "localhost",
      port: 5432,
      database: "hihi",
    });
