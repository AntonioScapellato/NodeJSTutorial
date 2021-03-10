const express = require('express')
const app = express()
const port = 3000
const path = require('path')


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../app', 'index.html'))
})

app.get('/intro', (req, res) => {
  res.sendFile(path.join(__dirname, '../app', 'intro.html'))
})

app.get('/http', (req, res) => {
  res.sendFile(path.join(__dirname, '../app', 'http.html'))
})

app.get('/npm', (req, res) => {
  res.sendFile(path.join(__dirname, '../app', 'npm.html'))
})

app.get('/files', (req, res) => {
  res.sendFile(path.join(__dirname, '../app', 'files.html'))
})

app.get('/events', (req, res) => {
  res.sendFile(path.join(__dirname, '../app', 'events.html'))
})

app.get('/email', (req, res) => {
  res.sendFile(path.join(__dirname, '../app', 'email.html'))
})

app.get('/mysql', (req, res) => {
  res.sendFile(path.join(__dirname, '../app', 'mysql.html'))
})

app.get('/mongodb', (req, res) => {
  res.sendFile(path.join(__dirname, '../app', 'mongodb.html'))
})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
