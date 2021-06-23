const EventEmitter = require('events');
const fs = require('fs');

class MyLogger extends EventEmitter{
    execute(taskFun, ...args){
        taskFun(...args, (err, data) => {
            if (err) {
                return this.emit('error', err)
            }
            this.emit('data', data)
        })
    }
}

let myLog = new MyLogger()

// first listener
myLog.on('data', (data) =>  console.log({characters : data.toString().length}))

// second listener
myLog.on('data', (data) => console.log({length : data.length}))

// will append this listener to data event
myLog.prependListener('data', (data) => console.log({no_lines : data.toString().split("\n").length}))

myLog.on('error', (error) => console.error({error : error}))

// to execute async function
myLog.execute(fs.readFile, __filename)