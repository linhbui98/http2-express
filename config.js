require('dotenv').config()

const database = process.env.DATABASE
const dbPort = process.env.DATABASE_PORT
const dbHost = process.env.DATABASE_HOST
const hostname = process.env.HOSTNAME
const port = process.env.PORT

const config = {
    mongodb: {
        database,
        host: dbHost,
        port: dbPort
    },
    hostname,
    port
}
module.exports = config