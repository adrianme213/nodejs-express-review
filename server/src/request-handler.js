// Import Controllers
const controllers = require('./controllers/index');

// CORS Heades
const defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

const requestHandler = (req, res) => {
  let statusCode;
  let dataChunks = [];
  console.log(`serving request type ${req.method} for url ${req.url}`);
  // Start request
  req.on('data', (data) => {
    dataChunks.push(data);
  });

  // Trigger once all data received
  req.on('end', () => {
    // Checks if valid endpoint
    if (req.url !== '/games') {
      //writes headers and response
      const headers = Object.assign({}, defaultCorsHeaders);
      headers['Content-Type'] = 'application/json';
      statusCode = 404;
      res.writeHead(statusCode, headers);
      res.end();
    } else {

      // Check if games POST
      if (req.method === 'POST') {
        //Only use Buffer.concat() if dataChunks.length > 1
        let body;
        if (dataChunks.length === 1) {
          body = dataChunks[0];
        } else {
          body = Buffer.concat(dataChunks);
        }

        const information = JSON.parse(body.toString());
        controllers.games.post(req, res, statusCode, defaultCorsHeaders, information);

      } else if (req.method === 'GET') {
        // pass along request to our controller for a games get
        controllers.games.get(req, res, statusCode, defaultCorsHeaders);
      }
    }
  });
};

module.exports = requestHandler;
