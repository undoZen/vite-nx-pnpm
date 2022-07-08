import path from 'path'
import url from 'url'
import app from 'api-server'
import express from 'express'
import st from 'st'
const server = express()
server.use(app)
const distPath = url.fileURLToPath(new URL('./dist', import.meta.url))
server.use(st({
  path: distPath,
  index: 'index.html',
}))
server.listen(3000)
