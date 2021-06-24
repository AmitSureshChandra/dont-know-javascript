const https = require('https');
const fs = require('fs');

let server = https.createServer({
    key: fs.readFileSync('./http/https/key.pem'),
    cert: fs.readFileSync('./http/https/cert.pem')
})

server.on('request', (req, res) => {
    res.writeHead(  200, {'content-type':'text/plain'})
    res.write('Hello World')

    setTimeout(() => {
        res.write('Another msg \n')
    }, 2000);

    setTimeout(() => {
        res.write('Another msg 2\n')
    }, 2000);
    res.end()
})

server.listen(443, () => console.log('server started'))