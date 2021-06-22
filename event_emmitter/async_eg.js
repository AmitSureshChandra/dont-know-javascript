const EventEmitter = require('events');
const fs = require('fs');

class MyLogger extends EventEmitter{
    execute(taskFun, ...args){
        taskFun(...args, (err, data) => {
            let unique = (new Date()).getMilliseconds()
            console.time(unique)
            if (err) {
                return this.emit('error', err)
            }
            this.emit('data', data)

            // console.timeEnd()
            console.timeEnd(unique)
        })
    }
}

let myLog = new MyLogger()
myLog.on('data', (data) => console.log({length : data.toString().length}))
myLog.on('error', (error) => console.error({error : error}))

// to execute async function
myLog.execute(fs.readFile, '')
myLog.execute(fs.readFile, __filename)