import http from "node:http";

const server = http.createServer((request, response) => {
  response.end(`안녕하세요? 저는 서버입니다.`);
});

server.listen(3000, () => {
  console.log(`서버 대기 중!`);
});
