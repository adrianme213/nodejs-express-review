const router = require('express').Router();
const controllers = require('./controllers/index');

// empty string would add subsequent paths i.e. /games/toronto
router.get('/games', controllers.games.get);
router.post('/games', controllers.games.post);

module.exports = router;
