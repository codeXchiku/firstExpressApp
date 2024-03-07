import 'dotenv/config'
import express  from "express"

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>welcome chiku</h1>')
})

app.get('/twitter', (req, res) => {
    res.send('you are in twitter')
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})