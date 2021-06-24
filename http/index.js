const http = require('http');

let server = http.createServer()

server.on('request', (req, res) => {

     // req :  http.IncomingMessage
     // res :  http.ServerResponse
    
    res.writeHead(  200, {'content-type':'text/plain'})
    res.write('Hello World')

    setTimeout(() => {
        res.write('Another msg \n')
    }, 2000);

    setTimeout(() => {
        res.write('Another msg 2\n')
    }, 2000);
    // res.end()
})

server.listen(8888, () => console.log('server started'))