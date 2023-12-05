// fetch() is a window function

// Fetching a .json file
fetch('./movies.json')
.then((response) => response.json())
.then((data) => console.log(data));

// Fetching a .txt file
fetch('./test.txt')
.then((response) => response.text())
.then((data) => console.log(data));

// Fetching from a public API
fetch('https://api.github.com/users/gdbecker')
.then((response) => response.json())
.then((data) => (document.querySelector('h1').textContent = data.login));


