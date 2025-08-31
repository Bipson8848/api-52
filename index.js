const http = require("http");
const app = require("./src/config/express.config");

//creating http server
const httpServer = http.createServer(app);

//running the host server
const PORT = 4030;
const HOST = "127.0.0.1";

httpServer.listen(PORT, HOST, (err) => {
  if (!err) {
    console.log(`server is live on http://${HOST}:${PORT}`);
  }
});
