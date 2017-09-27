# Express Elm Template Engine

Purely Functional templates for [express](https://github.com/expressjs/express) framework.

## Installation

```bash
npm install express-elm --save
```

## Usage

```js
const express = require('express');
const path = require('path');
const elmRenderer = require('express-elm');

const app = express();

app.engine('elm', elmRenderer);
app.set('view engine', 'elm');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('MyModule', { model: { age: 24, name: 'Noah' } })
});
```

Check out a fully functioning [example.](/example)
