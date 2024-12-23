# Express.js JSON Body Parsing Bug

This repository demonstrates a common bug in Express.js applications where the JSON request body is not parsed correctly due to missing or incorrect `Content-Type` header in the request.

## Bug Description
The provided Express.js code snippet attempts to handle POST requests to the `/users` endpoint.  It expects a JSON payload in the request body. However, if the client sending the request doesn't include the `Content-Type: application/json` header, Express.js won't automatically parse the body, resulting in `req.body` being empty. This can lead to errors or unexpected behavior in the application logic.

## How to Reproduce
1. Clone this repository.
2. Run `npm install` to install the required dependencies.
3. Run `node bug.js` to start the server.
4. Send a POST request to `http://localhost:3000/users` with a JSON payload but without the `Content-Type: application/json` header (using tools like curl or Postman).
5. Observe that `req.body` is empty in the server console.

## Solution
The solution involves explicitly setting the `Content-Type` header in the client-side request.  A more robust solution adds middleware to handle cases where the content type is not set correctly.
