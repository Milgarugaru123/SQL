import http from "node:http";
import fs from "node:fs/promises";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: `localhost`,
  user: `root`,
  port: 3306,
  password: `1234`,
  database: `company`,
});

http
  .createServer(async (req, res) => {
    const { url } = req;
    if (url == `/`) {
      res.setHeader(`content-type`, `text/html; charset=utf-8`);
      res.end(await fs.readFile(`yesterday.html`));
      //   const [employees] = await pool.query(
      //     `select name, department from employees`,
      //   );
      //   const list = document.querySelector(`#list`);
      //   employees.forEach((x) => {
      //     const li = document.createElement(`li`);
      //     li.innerHTML = `${x.name} [${x.department}]`;
      //     list.appendChild(li);
      //   });
    } else if (url == `/style.css`) {
      res.setHeader(`content-type`, `text/css`);
      res.end(await fs.readFile(`yesterday.css`));
    } else {
      res.statusCode = 404;
      res.end(`뭘 봐`);
    }
  })
  .listen(3001, () => {
    console.log(`html server`);
  });
