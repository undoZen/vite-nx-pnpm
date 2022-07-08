import app from './index.js'
import express from 'express'
const server = express()
server.use(app)
server.listen(3000)
