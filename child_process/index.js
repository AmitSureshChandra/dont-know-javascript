let {spawn} = require('child_process')

let data = spawn('ls')
console.log({data : data.stdout.pipe(process.stdout)});