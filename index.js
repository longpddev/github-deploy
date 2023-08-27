const app = require('express')()
const port = process.env.PORT || 3000
app.get('/', (req, res) => {
  res.send('hello worlds')
})

app.listen(port, () => {
  console.log(`app run in port ${port}`)
})