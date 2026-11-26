import http from "node:http";
import mysql from "mysql2/promise";
import { fakerKO as faker } from "@faker-js/faker";

const companyPool = mysql.createPool({
  host: `localhost`,
  port: 3306,
  user: `root`,
  password: `1234`,
  database: `company`,
});

const employeeServer = http.createServer(async (req, res) => {
  const { url } = req;
  res.setHeader(`content-type`, `text/plain; charset=utf-8`);

  if (url == `/`) {
    res.end(`시사 회사`);
  } else if (url == `/add`) {
    const [employees] = await companyPool.execute(`select id from employees`);
    if (employees.length < 1000) {
      Array(100)
        .fill(0)
        .forEach(async (x, i) => {
          const fakeName = faker.person.fullName();
          const fakeDept = faker.person.jobTitle();
          await companyPool.query(
            `insert into employees (name, department) values (?, ?)`,
            [fakeName, fakeDept],
          );
        });
      res.end(`직원 100명 추가됨`);
    } else res.end(`직원 수 한도 도달`);
  } else if (url == `/employee`) {
    const [employees] = await companyPool.execute(
      `select name, department from employees`,
    );
    res.end(
      employees.reduce(
        (a, c, i) =>
          a + `${c.name} [${c.department}]${(i + 1) % 5 ? `\t|\t` : `\n`}`,
        ``,
      ),
    );
  } else res.end(`더 이상의 자세한 설명은 생략한다.`);
});

employeeServer.listen(3000, () => {
  console.log(`회사 서버 오픈`);
});
