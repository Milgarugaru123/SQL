import http from "node:http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": `text/plain; charset=utf-8` });
  res.end(`쥬씨코인, 이민욱, 윤정은`);
});

server.listen(3000, () => {
  const t = new Date();
  console.log(`지각자 리스트 (${t.getTime()})`);
});

/* nodemon 사용하면, 파일 수정될 때마다 서버도 알아서 재시작됨 */
