import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'

const env = process.env.NODE_ENV || 'development'
const isDev = env === 'development'

const app = express()

const port = process.env.PORT || 3000

app.use(morgan(isDev ? 'dev' : 'combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  return res.send('hello')
})

app.listen(port, () => {
  console.log(`listening to port ${port}...`)
})
