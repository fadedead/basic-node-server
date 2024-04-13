const http = require("node:http");
const fs = require("fs");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      fs.readFile("./index.html", (err, data) => {
        if (err) {
          res.writeHead(404, { "content-type": "text/html" });
          return res.end("404 not found");
        }

        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else if (req.url === "/about") {
      fs.readFile("./about.html", (err, data) => {
        if (err) {
          res.writeHead(404, { "content-type": "text/html" });
          return res.end("404 not found");
        }

        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else if (req.url === "/contact-me") {
      fs.readFile("./contact-me.html", (err, data) => {
        if (err) {
          res.writeHead(404, { "content-type": "text/html" });
          return res.end("404 not found");
        }

        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else {
      fs.readFile("./404.html", (err, data) => {
        if (err) {
          res.writeHead(404, { "content-type": "text/html" });
          return res.end("404 not found");
        }

        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        return res.end();
      });
    }
  })
  .listen(8080);
