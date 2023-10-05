const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Hello from server");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Servering at port 3000");
});
