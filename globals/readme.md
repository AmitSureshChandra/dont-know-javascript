# Global 
- we can share data using `global` object in modules
- eg: `global.sample = 20`

# Process 
- is a event emitter 

# Buffer
- chunk of memory allocated out of V8's heap
- It is lower level data structure to represent sequence of binary data
- If we don't specify character encoding while file read / socket then it will return buffer
- when data placed in buffer, It doesn't have character encoding
- once created can't be resized
- `Buffer.alloc(bytes)` ,`Buffer.allocUnsafe(bytes)`, `Buffer.from(fun)` are ways to create buffer
- almost all operation applied on string as well as buffer

 