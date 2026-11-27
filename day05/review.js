import http from "node:http";
import fs from "node:fs/promises";
import mysql from "mysql2/promise";

const pool = await mysql.createPool({
  host: `localhost`,
  user: `root`,
  port: 3306,
  password: `1234`,
  database: `company`,
});

http
  .createServer(async (req, res) => {
    const [laters] = await pool.query(`select name, age from laters`);
    const html = await fs.readFile(`later.html`, `utf-8`);
    res.setHeader(`content-type`, `text/html; charset=utf-8`);
    res.end(html);
  })
  .listen(3000, () => {
    console.log(`명단 확인`);
  });
