const express = require('express');
const path = require('path');
const elmRenderer = require('../elm-renderer');

const app = express();
const port = process.env.PORT || 8080;
app.engine('elm', elmRenderer);
app.set('view engine', 'elm');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('MyModule', { model: { age: Date.now(), name: 'Noah' } })
});

app.listen(port, '0.0.0.0', err => {
  if (err) {
    console.log(err);
  }
  console.info('Listening on port %s', port);
});
