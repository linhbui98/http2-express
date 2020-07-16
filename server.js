const port = 8443
const spdy = require('spdy')
const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()

app.get('/linh', (req, res) => {
  try {
    // res
    //   .status(200)
    //   .json({ message: 'ok' })
    res.json({username: "fdsfs"})
  } catch (error) {
    res
      .status(500)
      .send(error.toString())
  }
 
})
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