const express = require('express')

const server = express()

server.get('/', (req,res) => {
    res.write('Hello World')

    // will think streaming data without end()

    // to end connection
    res.end()
})

server.listen(3100, ()=> {
    console.log('server running ....');
})