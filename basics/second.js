console.log('````````````````````````');
console.log(' every module is wrapped in (function (exports, require, module, __filename, __dirname){/*  code */ }) \n');

console.log('````````````````````````');

console.dir({ arguments }, {depth: 2})

console.log('````````````````````````');

let fun = function(msg) {
    console.dir({ arguments }, {depth: 2})
}

fun('it is message')