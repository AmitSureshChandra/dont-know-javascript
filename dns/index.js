const dns = require('dns');

// name => address

dns.lookup('pluralsight.com', (err, address) => {
    console.log({address});   
})

// give ipv4 address

dns.resolve4('pluralsight.com', (err, addresses) => {
    console.log({addresses});   
})

dns.resolve('pluralsight.com','A', (err, addresses) => {
    console.log({addresses});   
})

dns.resolve('pluralsight.com','MX', (err, addresses) => {
    console.log({addresses});   
})

// same as above

// dns.resolveMx('pluralsight.com', (err, addresses) => {
//     console.log({addresses});   
// })

// ip to hostname
dns.reverse('35.163.177.202', (err, hostname) => {
     console.log({hostname});
})