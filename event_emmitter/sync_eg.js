const EventEmitter = require('events');
const fs = require('fs');

class MyLogger extends EventEmitter{
    execute(taskFun){
        console.log('before executing');
        this.emit('start')
        taskFun()
        this.emit('stop')
        console.log('after executing');
    }
}

let myLog = new MyLogger()
myLog.on('start', () => console.log('about to execute'))
myLog.on('stop', () => console.log('about to terminate'))
myLog.execute(() => {
    console.log('I am task');
})