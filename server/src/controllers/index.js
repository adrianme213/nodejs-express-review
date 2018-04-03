const models = require('../models/index');
const db = require('../db/index');

module.exports = {
  games: {
    get: (req, res, statusCode, defaultCorsHeaders) => {
      // a function which handles a get request for all games
      // typically, get manipulation could happen here before headed to database
      // for example setting up a get query for one item and passing to model directly
      models.games.get(req, res, statusCode, defaultCorsHeaders);
    },
    post: (req, res, statusCode, defaultCorsHeaders, information) => {
      // a function which handles posting a message to the database
      // typically, information manipulation could happen here before headed to database
      models.games.post(req, res, statusCode, defaultCorsHeaders, information);
    }
  },
};
