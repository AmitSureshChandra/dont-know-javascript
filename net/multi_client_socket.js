const net = require('net');
let server = net.createServer()
let counter = 0;
let sockets = {}

let timestamp = () => {
    let date = new Date()
    return `${date.getHours()}:${date.getMinutes()}`
}

server.on('connection', (socket) => {
    socket.id = counter++;
    console.log(`Client ${socket.id} is connected`);
    socket.write(`Enter your name: `)
    socket.on('data', data => {
        if (!sockets[socket.id]) {
            socket.name = data.toString().trim()
            socket.write(`Welcome ${socket.name}\n`)
            sockets[socket.id] = socket
            return
        }
        Object.entries(sockets).filter(([id,]) => id != socket.id).forEach(([, sc]) => {
            sc.write(`${socket.name} ${timestamp()} : ${data}`)
        })
    })

    socket.on('end', () => {
        console.log(`Client ${socket.name} disconnected`);
    })
})

server.listen(8888, () => {
    console.log(`Server bound : ${8888}`);
})