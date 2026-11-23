import { readFile } from "node:fs/promises";

const src = `txt/coffee.txt`;
const str = [...((await readFile(src, `utf8`)) + `\r\n`)].reduce((x, y) => {
  if (y == `\r`) return x + ` 꿀맛!` + y;
  else return x + y;
}, ``);

console.log(str);
