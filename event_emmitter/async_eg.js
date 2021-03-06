const EventEmitter = require('events');
const fs = require('fs');

class MyLogger extends EventEmitter{

    static counter = 0;
    execute(taskFun, ...args){
        taskFun(...args, (err, data) => {
            console.time('execute' + ++MyLogger.counter)
            if (err) {
                return this.emit('error', err)
            }
            this.emit('data', data)
            console.timeEnd('execute' + MyLogger.counter)
        })
    }
}

let myLog = new MyLogger()
myLog.on('data', (data) => console.log({length : data.toString().length}))
myLog.on('error', (error) => console.error({error : error}))

// to execute async function
myLog.execute(fs.readFile, __filename)
myLog.execute(fs.readFile, '')