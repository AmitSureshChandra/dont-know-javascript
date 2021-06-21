let buffer = Buffer.alloc(10)
let uninitialized_buffer = Buffer.allocUnsafe(10)
let buffer_initialized = Buffer.allocUnsafe(10).fill()

console.log({buffer})
console.log({uninitialized_buffer})
console.log({buffer_initialized})

let name = 'Amit'
let name_buffer = Buffer.from(name)

console.log({name : name})
console.log({name_length : name.length})
console.log({name_buffer : name_buffer})
console.log({name_buffer_length: name_buffer.length})
console.log({decoded_name_buffer : decodeURI(name_buffer)})
console.log({name_buffer_length: decodeURI(name_buffer).length})