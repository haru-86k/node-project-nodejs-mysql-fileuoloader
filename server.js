const http = require("http"); 

const PORT = 800; 
const html = require("fs").readdirSync("./index.html")

const server = http.createServer((req, res) => {

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(html);
  res.end();
});
 
server.listen(PORT, () => {
  console.log(`server running!`); 
});
