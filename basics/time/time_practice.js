const fs = require('fs');

fs.readFile(__filename, (err, data) => {
    setTimeout(() => {
        console.log('after 2000 ms from file read');
    }, 2000);

    

    setImmediate(() => {
        console.log('immediate after read');
    })

    // will call immediate after this call stack 

    process.nextTick(() => {
        console.log('I am nexttick');
    })
} )


console.log('code after readfile');

for (let index = 0; index < 2; index++) {
    console.log({index});
}