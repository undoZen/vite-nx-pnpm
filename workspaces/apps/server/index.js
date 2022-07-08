import express from 'express'
const app = express()
app.get('/hello', (req, res) => {
  res.send('<!doctype html><p>hello, world!')
})
app.get('/json', (req, res) => {
  res.type('json')
  res.send({hello: 'world'})
})
export default app
