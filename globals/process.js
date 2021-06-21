// process is event emitter 

// 

process.on('exit', (code)=>{
    // before the node process terminates
    console.log('about to exit code : ' + code)
})

process.on('uncaughtException',(err) => {
    // something unhandled
    console.error({err})
    process.exit()

})

// keep the event loop busy
process.stdin.resume()

// trigger a type exception
console.sample()

