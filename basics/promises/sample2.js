const fs = require('fs')

let readFileAsArray = (filename, cb = () => {}) => {
    return new Promise((resolve, reject) => {
        if (typeof(filename) !== 'string') {
            reject(new TypeError('string type required'))
            cb(new TypeError('string type required'))
        }

        fs.readFile(filename, (err, data) => {
            if (err) {
                reject(err)
                cb(err)
            }
            resolve(data.toString().trim().split("\n"))
            cb(null, data.toString().trim().split("\n"))
        })
    })  
}

// using callback
readFileAsArray('./basics/promises/data/numbers.txt', (err, data) => {
    if (err) {
        console.error({err});
    }
    console.log({arr : data.map(Number).filter(i => i % 2 === 0)});
})

// using then() & catch()
readFileAsArray('./basics/promises/data/numbers.txt')
    .then((data) => {
        let arr = data.map(Number)
        console.log({arr : arr.filter(i => i % 2 === 0)});
    })
    .catch((err) => {
       console.error(err.toString())
       process.exit()
    })


// using async, await
async function read(filename){
    try {
        let arr = await readFileAsArray(filename)
        console.log({arr : arr.map(Number).filter(i => i % 2 === 0)});
    } catch (error) {
        console.error({error});
    }
}

read('./basics/promises/data/numbers.txt')

console.log({end : 'end'});




