import { UserEdit } from "./views/UserEdit";
import { User, UserProps } from "./models/User";
import { UserList } from './views/UserList';
import { Collection } from './models/Collection';

// Viewing one user with a form
const user = User.buildUser({ name: "Zak", email: "ztejd@example.com" });

const root = document.getElementById("root");

if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();

  console.log(userEdit);
} else {
  throw new Error("Root element not found");
}

// Viewing all users from a collection
// const users = new Collection('https://jsonplaceholder.typicode.com/users', (json: UserProps) => {
//   return User.buildUser(json);
// });

// users.on('change', () => {
//   if (root) {
//     new UserList(root, users).render();
//   }
// })

// users.fetch();
