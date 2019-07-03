const express        = require('express')
const bodyParser     = require('body-parser')
const app            = express()
const repo           = require('./repo')
const io             = require('socket.io')
const mongoose       = require('mongoose')
const cors           = require('cors')
const port           = 8001

connectDb()
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const http = require('http').Server(app)
const socket = io(http)

socket.on('connection', (socket) => {
  console.log('user connected')
  socket.on('message', (msg) => {
    console.log(`new message: "${msg}"`)
    socket.emit('response', 'hi')
  })
  socket.on('disconnect', () => { console.log('user disconnected') })
})

require('./routes')(app, repo, socket);

http.listen(port, () => {
  console.log(`Running on port: ${port}`)
});

function connectDb() {
  let dev_db_url = 'mongodb://localhost:27017/bdnr_messages';
  let mongoDB = process.env.MONGODB_URI || dev_db_url;
  mongoose.connect(mongoDB, { useNewUrlParser: true });
  mongoose.Promise = global.Promise;
  let db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}