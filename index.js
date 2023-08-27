const app = require('express')()

app.get('/', (req, res) => {
  res.send('hello worlds')
})

app.listen(8000, () => {
  console.log(`app run in port 8000`)
})