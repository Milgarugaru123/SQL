import http from "node:http";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: `localhost`,
  port: 3306,
  user: `root`,
  password: `1234`,
  database: `newmenus`,
});

const server = http.createServer(async (req, res) => {
  const { url } = req;
  res.setHeader("content-type", `text/plain; charset=utf-8`);
  if (url == `/`) {
    res.end(`호무 페이지`);
  } else if (url == `/menu`) {
    const [menus] = await pool.execute(`select name, kcal, price from menus`);
    res.end(JSON.stringify(menus));
  } else if (url == `/parttimer`) {
    const [parttimers] = await pool.execute(`select * from parttimers`);
    res.end(
      JSON.stringify(
        parttimers.map((x) => {
          return `${x.name} (${x.position})`;
        }),
      ),
    );
  } else {
    res.end(`[404] 없는 페이지`);
  }
});

server.listen(3000, () => {
  console.log(`test`);
});
