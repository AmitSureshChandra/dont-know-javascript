const http = require('http');

// http.clientRequest
let req = http.request('http://google.com', (res) => {

    // res: http.IncomingMessage
    console.log(`status code ${res.statusCode}`);
    console.log(`headers ${res.headers}`);

    res.on('data', (data) => {
        console.log({data : data.toString()});
    })
})

req.on('error', (err) => {
    console.error({err});
})

// http.agent
console.log(req.agent);

