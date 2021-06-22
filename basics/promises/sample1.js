const fs = require('fs');

let fileSize = (filename) => {
    return new Promise((resolve, reject) => {
        
        if (typeof(filename) !== 'string') {
            reject(new TypeError('string type required'))
        }
        fs.stat(filename, (err,stats) => {
            if (err) {
                reject(err)
            }
            resolve(stats.size)
        })
    })
}

fileSize(1)
    .then((data) => {
        console.log({data});
    })
    .catch((e) => {
        console.error(err.toString())
        process.exit()
    })


console.log({end : 'end'});
