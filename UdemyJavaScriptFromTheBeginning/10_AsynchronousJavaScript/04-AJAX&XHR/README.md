## 04 - AJAX and XHR

### What is HTTP?

- HyperText Transfer Protocol is the protocol for sending and receiving data on the web
- HTTP is a client/server protocol. Requests are initiated by the client (you) and the server will respond with a "response"
- The response would be HTML, CSS, JS files, images and other resources as well as data formatted as JSON or XML

### Making Requests from JS

- Many times you will want to fetch some data and update a specific part of the DOM/webpage, and we can do this with JS
- AJAX / XMLHttpRequest object was the original way of doing this, however, these days we mostly use the fetch API that is available for us to use in the browser environment

### HTTP Methods

| Method      | Description                        |
| ----------- | ---------------------------------- |
| GET         | Fetch/receive data from the server |
| POST        | Send data to the server            |
| PUT & PATCH | Update data on a server            |
| DELETE      | Delete data from a server          |

### HTTP Status Codes

| Code Range | Description  |
| ---------- | ------------ |
| 100 range  | Continue     |
| 200 range  | Success      |
| 300 range  | Redirects    |
| 400 range  | Client Error |
| 500 range  | Server Error |

| Specific Code | Description     |
| ------------- | --------------- |
| 200           | Success         |
| 201           | Created         |
| 204           | No Content      |
| 301           | Resource Moved  |
| 400           | Bad Request     |
| 401           | Unauthorized    |
| 403           | Forbidden       |
| 404           | Not Found       |
| 500           | Error on Server |

### XMLHttpRequest Object

- A built-in browser object that allows us to make HTTP requests. We can make requests to servers without having to refresh the page.
- This allows us to make our webpages much more dynamic
- These days, you will be using the fetch API over XHR, however, I think it is still important to know how to use
