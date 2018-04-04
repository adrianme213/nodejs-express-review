const express = require('express');
const parser = require('body-parser');
const path = require('path');
const routes = require('./routes');
const db = require('./db/index');

const PORT = 8080;

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../../client/dist')));

app.use('/api', routes);

// Wildcard Route to Handle Anything Else and Send 404
app.use('/*', (req, res) => {
  res.status(404).send('THIS PAGE DOES NOT EXIST');
});

app.listen(PORT, () => {
  console.log(`node listening on port ${PORT}`);
});
