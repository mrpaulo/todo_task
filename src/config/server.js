const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true })) //middleware => todas as requisições são interceptados por eles
server.use(bodyParser.json()) // outro middleware, passa por todos (é um &&)
server.use(allowCors)

server.listen(port, function() {
    console.log(`Server is running on port ${port} XD`)
})

module.exports = server