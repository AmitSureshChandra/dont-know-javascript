let fs = require('fs')

fs.readFile('./fs/data.txt','utf-8',(err, data) => { 
    console.log({data});
})