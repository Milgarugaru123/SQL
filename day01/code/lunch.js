// import fs from "node:fs";
import { readFileSync } from "node:fs";
import { readFile } from "node:fs/promises";

readFileSync(`txt/lunch.txt`, `utf8`);
readFile(`txt/lunch.txt`, `utf8`);

console.log();
