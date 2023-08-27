const app = require('express')()
const fs = require('fs')
const port = process.env.PORT || 3000
app.get('/', (req, res) => {
  res.send(fs.readFileSync('./.env', { encoding: 'utf-8'}))
})

app.listen(port, () => {
  console.log(`app run in port ${port}`)
})