const port = 8443
const spdy = require('spdy')
const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()

const bodyParser = require('body-parser')

const api = require('./routes/api')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api', api)
 
const options = {
  key: fs.readFileSync(__dirname + '/keys/localhost-privkey.pem'),
  cert: fs.readFileSync(__dirname + '/keys/localhost-cert.pem')
}
// console.log(options)
spdy
  .createServer(options, app)
  .listen(port, (error) => {
    if (error) {
      console.error(error)
      return process.exit(1)
    } else {
      console.log('Listening on port: ' + port + '.')
    }
  })