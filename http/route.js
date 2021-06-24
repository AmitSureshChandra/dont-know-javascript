const http = require('http');
const fs = require('fs')
let server = http.createServer()

server.on('request', (req, res) => {

     // req :  http.IncomingMessage
     // res :  http.ServerResponse
    
    switch (req.url) {
        case '/api':
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({
                data: {
                    name : "Amit"
                }
            }))
            break;
        case '/home':
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(fs.readFileSync(`./http/public${req.url}.html`))
            break;
        case '/':
            res.writeHead(301, { 'Location': '/home' })
            res.end()
            break;
        default:
            res.writeHead(404)
            res.end()
            break;
    }
})

server.listen(8888, () => console.log('server started'))