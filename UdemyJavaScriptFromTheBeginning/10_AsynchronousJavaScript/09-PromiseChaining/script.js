const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ name: 'John', age: 30 });
    } else {
      reject('Error: Something went wrong');
    }
  }, 1000);
});

// Chaining Promises
promise
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((name) => { // getting the user.name returned above
    console.log(name);
    return name.length;
  })
  .then((nameLength) => { // getting the name.length returned above
    console.log(nameLength);
  })
  .catch((error) => {
    console.log(error);
    return 123;
  })
  .then((x) => console.log('This will run no matter what', x));
