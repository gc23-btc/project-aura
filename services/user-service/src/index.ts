import { createServer } from "http";

const port = process.env.PORT || 3002;

const requestHandler = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("User Service running");
};

const server = createServer(requestHandler);

server.listen(port, () => {
  console.log(`User Service listening on port ${port}`);
});
