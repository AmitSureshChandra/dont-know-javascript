# IO 
- Handling slow I/O 
    - Synchronous
    - fork() 
    - Threads (eg Apache)
    - Event Loop
        - An entity that handles external events & converts them into callback invocations
        - A loop that picks the event from event queue and pushes their callbacks to the call stack
        - Event Queue | Call Stack 