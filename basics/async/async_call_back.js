const fs = require('fs');

let fileSize = (filename, cb) => {
    if (typeof(filename) !== 'string') {
        // this will make this function an async function
        // setImmediate(cb,  new TypeError('String required'))
        process.nextTick(cb, new TypeError('String required'))
        return
    }
    fs.stat(filename, (err, data) => {
        if (err) {
            cb(err)
        }
        cb(null, data.size)
    })
}

fileSize(__filename, (err, fileSize) => {
    if (err) {
        throw err;
    }
    console.log({fileSize});
})

console.log({end : 'end'});