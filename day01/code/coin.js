import fs from "node:fs/promises";
import http from "node:http";

const src1 = `txt/goodCoin.txt`;
const src2 = `txt/badCoin.txt`;

const makeServer = (src) => {
  return http.createServer(async (req, res) => {
    const text = await fs.readFile(src, `utf-8`);
    res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
    res.end(text);
  });
};

const goodCoin = makeServer(src1);
const badCoin = makeServer(src2);

goodCoin.listen(3000, () => {
  console.log(`좋은 코인 리스트`);
});

badCoin.listen(3001, () => {
  console.log(`나쁜 코인 리스트`);
});
