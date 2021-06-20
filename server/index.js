const http = require('http')

const server = http.createServer()

server.on('request', (req,res) => {
    res.write('Hello World')

    // will think streaming data without end()

    // to end connection
    res.end()
})

server.listen(3100, ()=> {
    console.log('server running ....');
})