## React Functional Components with TypeScript

### [Live Demo](https://typescript-name-list-app.gdbecker.repl.co/)

!["HomePage"](HomePage.png)

### Name List app Project Overview

- Simple React app with three components:
  - Guest List component which allows you to view a list of people, type in the name of someone you want to add, and then click to add to the on-screen list
  - User Search component that lets you pull up information from a static list of user objects (Sarah, Michael, or Jon)
  - Event Component to test out assigning specific event types to e based on the HTML element
- Combined TypeScript with React to utilize type definitions and annotations
- Testing out using TypeScript in various ways with React functional components (FC)

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

### Other Notes

- Will the file contain a React component or any kind of JSX?
  - Use the extension '.tsx'
- No JSX?
  - Use the extension '.ts'
