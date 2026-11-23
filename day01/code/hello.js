import { readFile } from "node:fs/promises";

const src = `txt/hello.txt`;
const str = await readFile(src, `utf8`);

console.log(str);
