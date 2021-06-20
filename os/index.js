let os = require('os')

console.log('os version : '+ os.version);
console.log('# of CPUs : '+ os.cpus().length);
console.log({'User info : ' :  os.userInfo()});
console.log('Hostname : '+ os.hostname);