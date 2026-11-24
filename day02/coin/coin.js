import http from "node:http";
import fs from "node:fs/promises";

const src1 = `./good.txt`;
const src2 = `./bad.txt`;

const coin = http.createServer(async (req, res) => {
  const { url } = req;
  console.log(url);
  res.writeHead(200, { "content-type": `text/plain; charset=utf-8` });
  if (url == `/`) {
    res.end(`호무 페이지`);
  } else if (url == `/good`) {
    const goodCoin = await fs.readFile(src1, `utf-8`);
    res.end(goodCoin);
  } else if (url == `/bad`) {
    const badCoin = await fs.readFile(src2, `utf-8`);
    res.end(badCoin);
  } else {
    res.end(`그딴 건 없다.`);
  }
});

coin.listen(3000, () => {
  console.log(`코인장 오픈`);
});
