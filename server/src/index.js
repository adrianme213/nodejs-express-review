const http = require('http');
const url = require('url');
const requestHandle = require('./request-handler');
const db = require('./db/index');

// Setup port 8080, 3000, 1337, or other dev port.
const PORT = 8080;
const REST_SERVER_URL = 'localhost';

// Create server and tell it to listen on given port
const server = http.createServer(requestHandle);
console.log(`Listening on http://${REST_SERVER_URL}:${PORT}`)

// Set up server to listen on port
server.listen(PORT, REST_SERVER_URL);
