## Advanced Express and TypeScript Integration

### [Live Demo](https://typescript-authentication-app-v2.gdbecker.repl.co/)

!["HomePage"](HomePage.png)

### Authentication app V2 Project Overview

- Simple authentication app with express: log users in to see a page on the protected route, and keep unauthenticated users from seeing that page
- This version takes the third approach from the below list, and uses decorators to make TypeScript work with express as much as possible via a classes structure

### Tools and Packages Used

- npm packages
  - tsc (compile ts into js)
  - nodemon (executing code once it's compiled)
  - concurrently (run multiple scripts at once)
  - express
- "npm i @types/node" -> install type files for anything in the node standard library

### TS with JS Libraries

- Use the library normally, adding in basic type annotations where possible
- Use a TS adapter library that has helpers for using your library with TS
- Twist your library to work with TS classes

### Middleware in Express

- Main goal: investigate a request or response and do some processing on it
- Calls 'NextFunction' when complete

### Integration Issues

- Cons
  - Type definition files alone can't express what is going on in the JS world accurately (such as: middleware)
  - Type definition files provided to us aren't always accurate
  - Inputs to a server (or any program with external inputs) are not guaranteed to exist, or be of the correct type (made worse by type definition files!)
  - The point is that type definition files are not perfect and can cause issues
- Pros
  - Addressing these type issues with TypeScript can force us to write better code

### Metadata

- Proposed feature to be added to JavaScript (and this, TypeScript)
- Snippets of info that can be tied to a method, property, or class definition
- Can be used for super custom stuff
- TypeScript will (optionally) provide type info as metadata
- Read and write using the reflect-metadata package

### Factory Decorators

- Decorators that return functions

### Other Notes

- Use "tsc --init" in the terminal to make a "tsconfig.json" file
- rootdir -> './src'
- outdir -> './build'
- Use "tsc -w" in the terminal to open the "watch" mode to detect any changes in the src folder, which will then transform the .ts files into .js files
