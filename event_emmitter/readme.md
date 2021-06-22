# Event Emitter

steps:
- import
- extend
- init
- emit
- addListener

```
eg.

const EventEmitter = require('events');
class Logger extends EventEmitter{}
const logger = new Logger()
logger.emit('event')
logger.on('emit', listenerFun)

```
