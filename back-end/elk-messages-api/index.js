const express        = require('express')
const bodyParser     = require('body-parser')
const app            = express()
const repo           = require('./repo')
const io             = require('socket.io')
const mongoose = require('mongoose');
const port = 8001;

let dev_db_url = 'mongodb://localhost:27017/bdnr_messages';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
require('./routes')(app, repo);

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});