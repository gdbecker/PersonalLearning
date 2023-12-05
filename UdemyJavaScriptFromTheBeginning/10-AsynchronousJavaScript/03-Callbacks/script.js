// function toggle(e) {
//   console.log('callback ran');
//   e.target.classList.toggle('danger');
// }

// document.querySelector('button').addEventListener('click', toggle);

// Make our own callback - doesn't mean it's always asynchronous

const posts = [
  { title: 'Post One', body: 'This is Post One' },
  { title: 'Post Two', body: 'This is Post Two' }
];

function createPost(post, cb) { // cb = callback
  setTimeout(() => {
    posts.push(post);
    cb();
  }, 2000);
}

// Mimic fetching from a server
function getPosts() {
  setTimeout(() => {
    posts.forEach(function(post) {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector('#posts').appendChild(div);
    })
  }, 1000);
}

createPost({ title: 'Post Three', body: 'This is Post Three' }, getPosts); // let getPosts be a callback function for createPost
// this way you can finish making all posts before putting them on the page



