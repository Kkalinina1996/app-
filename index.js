require("dotenv").config();
const http = require("http");
const port = process.env.PORT || 3333;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("hello world");
});
server.listen(port, () => {
  console.log(`Server is launched at http://localhost:${port}`);
});