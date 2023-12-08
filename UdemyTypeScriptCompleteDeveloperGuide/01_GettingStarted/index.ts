import axios from "axios";
import { StringLiteral } from "typescript";

// Async GET request
const url = "https://jsonplaceholder.typicode.com/todos/1";

// Used to define the structure of the object
// Helps catch errors while developing
// This is TypeScript
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo; // "as Todo" is also TypeScript

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

// Adding the type for the arguments is TypeScript
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The Todo with ID: ${id}
  Has a title of: ${title}
  Is it finished: ${completed}
  `);
};
