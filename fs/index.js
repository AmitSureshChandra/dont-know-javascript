let fs = require('fs')

fs.readFile('./fs/data.txt','utf-8',(err, data) => { 

    if (err) {
        console.error(err)
        process.exit()
    }
    console.log({data});
})