import { createServer } from "http";

const port = process.env.PORT || 3003;

const requestHandler = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Notification Service running");
};

const server = createServer(requestHandler);

server.listen(port, () => {
  console.log(`Notification Service listening on port ${port}`);
});
