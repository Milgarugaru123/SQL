import fs from "node:fs/promises";
import http from "node:http";

const src = `txt/donchicken.txt`;
// const src = `../txt/donchicken.txt`;

const server = http.createServer(async (req, res) => {
  const text = await fs.readFile(src, `utf-8`);
  res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
  res.end(text);
});

server.listen(3000, () => {
  console.log(`오늘의 돈치킨 메뉴`);
});
