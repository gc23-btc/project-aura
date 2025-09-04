import http from "http";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Auth Service");
});

server.listen(3000, () => {
  console.log("Auth service listening on port 3000");
});
