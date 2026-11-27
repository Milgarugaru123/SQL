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

const menu = [
  { name: `김밥`, price: 4500 },
  { name: `우동`, price: 6500 },
  { name: `라면`, price: 5500 },
];

http
  .createServer(async (req, res) => {
    const { method } = req;
    if (method == `GET`) {
      res.setHeader(`content-type`, `application/json; charset=utf-8`);
      res.end(JSON.stringify(menu));
    } else if (method == `POST`) {
      menu.push({ name: `**김밥`, price: 5000 });
      res.setHeader(`content-type`, `text/plain; charset=utf-8`);
      res.end(`메뉴 개수: ${menu.length}`);
    } else if (method == `DELETE`) {
      menu.shift();
      res.setHeader(`content-type`, `text/plain; charset=utf-8`);
      res.end(`메뉴 개수: ${menu.length}`);
    } else {
      res.end(`무슨 요청을?`);
    }
  })
  .listen(3000, () => {
    console.log(`서버 메소드`);
  });
