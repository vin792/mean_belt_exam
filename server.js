var express = require('express')
var path = require('path')
var session = require('express-session');

var app = express()
var bodyParser = require('body-parser')

var PORT = 8000

app.use(session({secret: 'codingdojorocks', resave: false, saveUninitialized: true}))
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './node_modules')))
app.use(express.static(__dirname + '/belt-exam-app/dist'))

require('./server/config/mongoose.js')

require('./server/config/routes.js')(app)

app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`)
})