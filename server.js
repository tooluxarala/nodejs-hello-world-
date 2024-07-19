const { createServer } = require('node:http');

 

const  url = require('url');

 

const hostname = '127.0.0.1';

const port = 3000;

 

const server = createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);

    res.setHeader('Content-Type', 'text/plain');

    // Note: This is for debuging purpose

    //console.log('parsedUrl: ' + JSON.stringify(parsedUrl))

 

    if (req.method === 'GET' && parsedUrl.pathname === '/hello') {

        let query = parsedUrl.query

        if(query.name !== undefined) {

            res.statusCode = 200; //Ok, @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

            res.end('Hello ' + query.name + ' !');

        } else {

            res.statusCode = 400; // Bad request

            res.end("Please set the parameter 'name' ")

        }

    } else {

        res.statusCode = 404 // Not found

        res.end('Not found')

    }

});

 

server.listen(port, hostname, () => {

  console.log(`Server running at http://${hostname}:${port}/`);

});