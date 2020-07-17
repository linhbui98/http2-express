const spdy = require('spdy')
const express = require('express')
const mongoose = require('mongoose')
const fs = require('fs')
const cors = require('cors')
const config = require('./config')
const port = config.port
const app = express()

const bodyParser = require('body-parser')

const api = require('./routes/api')

const dbUrl = `mongodb://${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.database}`
console.log(dbUrl)
mongoose.connect(
    dbUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false },
    () => console.log('db connected')
)

app.use(cors())
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