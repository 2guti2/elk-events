const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();
const repo           = require('./repo');
const port           = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
require('./routes')(app, repo);
app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});