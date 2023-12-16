## Redux with Functional Components and TypeScript

### [Live Demo](https://typescript-npm-package-search-app.gdbecker.repl.co)

!["HomePage"](HomePage.png)

### Name List app Project Overview

- Simple React app to practice combining TypeScript with redux-based components
  - Input the name of an NPM package to search for, and clicking on 'Submit' will pull up the list of packages that match or are closely related to the query, pulling from the NPM API for package search

### Tools and Packages Used

- [React](https://reactjs.org/) is a popular JavaScript library for building user interfaces.
- [Vite](https://vitejs.dev/) is a blazing fast frontend build tool that includes features like Hot Module Reloading (HMR), optimized builds, and TypeScript support out of the box.

### Pros and Cons of using TypeScript with React

- Pros
  - Far, far easier to avoid extremely common typos, like incorrect action types
  - Gives developers a far better understanding of the type of data flowing around
  - Much easier to refactor just about everything
- Cons
  - Not the best type definition files (especially around redux)
  - TOns of generics flying around
  - Tons of imports, as just about everything (action creator, action, reducer, store, component) need to be aware of different types
  - Redux inherently functional in nature, tough integration with TypeScript classes

### Using TypeScript with React? That's great, but not too much is going to change

- Applying types to component props
- Applying types to state in a component
- Types with event handlers
- and several other assorted areas

### Big issues with Redux/React-Redux and TypeScript

- Imports between files can turn into a mess very quickly
- Communicating types over to your components can be challenging
- Type definition files for Redux, React-Redux, and others are possibly over-engineered

### Other Notes

- Will the file contain a React component or any kind of JSX?
  - Use the extension '.tsx'
- No JSX?
  - Use the extension '.ts'
