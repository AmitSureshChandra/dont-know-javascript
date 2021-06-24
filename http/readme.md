# Node http module
- response ends with `res.end()` otherwise browser think server streaming data
- http headers
    - Keep-Alive : `max timeout with server connection after that connection ends auto `
    - Transfer-encoding : `means server is able to send endoded chunk data`
- `url` module can be used to parse url
- `querystring` module can be used to work only with querystring

# https module
- streaming ready http server
- http module with TLS SSL
- `cert.pem` & `key.pem` is required for ssl

# requesting http / https data
    - http.server
    - http.Agent
    - http.serverResponse
    - http.ClientRequest
    - http.IncomingMessage

- `http.get()`, `http.request()` can be used to get data