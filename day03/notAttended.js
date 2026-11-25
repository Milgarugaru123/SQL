import http from "node:http";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: `localhost`,
  port: 3306,
  user: `root`,
  password: `1234`,
  database: `newclass`,
});

const server = http.createServer(async (req, res) => {
  const [list] = await pool.execute(
    `select name, age, nickname from notattended`,
  );
  res.setHeader(`content-type`, `text/plain; charset=utf-8`);
  res.end(
    list.reduce((a, c) => a + `${c.name}(${c.age}) - ${c.nickname}\n`, ``),
  );
});

server.listen(3000, () => {
  console.log(`결석자 리스트`);
});
