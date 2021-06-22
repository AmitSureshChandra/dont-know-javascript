let f1 = () => {
    setTimeout(() => {
        console.log('after 3000');
    }, 3000);
    console.log('done');
}

let cur_time = () => {
    let time = new Date();
    return time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
}

console.log(cur_time());

f1()

console.log('after f1()');

console.log(cur_time());

f1()

console.log(cur_time());