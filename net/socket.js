const net = require('net');

let server = net.createServer((socket) => {
    console.log(`Server is connected`);
    socket.write(`Welcome new Client\n`);

    socket.on('data', data => {
        console.log(`Data : ${data}`);
        socket.write('data : '+ data);
    })

    socket.on('end', () => {
        console.log('Client disconnected');
    })
})

server.listen(8888, () => {
    console.log(`Server bound : ${8888}`);
})