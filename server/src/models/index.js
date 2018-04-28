const db = require('../db/index');
const mysql = require('mysql');
let _GAMEID = 3;
module.exports = {
  games: {
    get: (req, res) => {
      // a function which produces all the messages
      db.query('SELECT * FROM games;', (err, results, fields) => {
        if (err) { throw err; }

        // SEND BACK RESPONSE
        res.status(200).send(results);
      });
    },
    post: (req, res, game) => {
      // a function which can be used to insert a message into the database
      _GAMEID++;
      const queryStr = `INSERT INTO games (id, date, time, awayTeam, homeTeam, location)
        VALUES (${_GAMEID}, '${game.date}', '${game.time}', '${game.awayTeam}', '${game.homeTeam}',
        '${game.location}');`;
      db.query(queryStr, (err, results, fields) => {
        if (err) { throw err; }

        // SEND BACK RESPONSE
        res.status(201).send('Success');
      });
    }
  }
};
