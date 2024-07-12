const { createServer } = require('node:http');
const url=require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    const parseUrl=url.parse(req.url,true);
    if(req.method=='GET'&& parseUrl.pathname==='/hello' ){
        res.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        res.end('hello world');
    }
    else{
        res.statusCode=404;
        res.end('Not Found');
    }
    
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});