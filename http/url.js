const url = require('url');
const querystring = require('querystring');

let sample_url = 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'
console.log(url.parse(sample_url));

/* 
Url {
  protocol: 'https:',
  slashes: true,
  auth: 'user:pass',
  host: 'sub.example.com:8080',
  port: '8080',
  hostname: 'sub.example.com',
  hash: '#hash',
  search: '?query=string',
  query: 'query=string',
  pathname: '/p/a/t/h',
  path: '/p/a/t/h?query=string',
  href: 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'
}
*/

// to parse query string
console.log(url.parse(sample_url, true));

// for creating url

let web_url = url.format({
    protocol: 'http',
    host: 'www.amit.com',
    search: '?q=amit',
    pathname: '/search'
})

console.log({ url: web_url });

// QueryString

// from object to querystring
console.log({queryString : querystring.stringify({
    name: 'Amit Kesarwani',
    class: 'Bsc'
})});

// from querystring to object
console.log(querystring.parse('name=Amit%20Kesarwani&class=Bsc') );

