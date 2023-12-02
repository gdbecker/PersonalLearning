## 10 - Execution Context and the Call Stack

### Execution Context

- What's happening behind the scenes
- When you run any JS, a special environment is created to handle the transformation and execution of code
- This is called the execution context
- It contains the currently running code and everything that aids in its execution
- There is a global execution context as well as a function execution context for every invoked function
- MEMORY: this is the variable environment that stores all of your variables and functions as key:value pairs in memory
  -EXECUTION (CODE): this is the thread of execution. Each line of code of executed line by line

### Execution Context Phases

- Memory Creation Phase
  1.  Create the global object (browser = window, Node.js = global)
  2.  Create the 'this' object and bind it to the global object
  3.  Setup memory heap for storing variables and function references
  4.  Store functions and variables in global execution context and set to 'undefined'
- Execution Phase
  1.  Execute code line by line
  2.  Create a new execution context for each function call

### The Call Stack

- Stack of functions to be executed
- Manages execution contexts
- Stacks are LIFO (last in first out)
