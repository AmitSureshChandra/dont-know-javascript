const dgram = require('dgram');

let PORT = 8888
let HOST = '127.0.0.1'

// server

let server = dgram.createSocket('udp4')
server.on('listening', () => {
    console.log('UDP server listening');
})

server.on('message', (msg, rinfo) => {
    console.log(`${rinfo.address}:${rinfo.port} - ${msg}`);
})

server.bind(PORT, HOST)

// Client

let client = dgram.createSocket('udp4')
let buffer = Buffer.from('Pluralsight rocks')


client.send(buffer, 0, 11, PORT, HOST, (err) => {
    if (err) {
        throw err;
    }

    client.send(buffer, 11, 6, PORT, HOST, (err) => {
        if (err) {
            throw err;
        }

        console.log('UDP message send');
        client.close()
    })
})


