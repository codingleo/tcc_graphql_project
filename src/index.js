import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
// import Sequelize from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const env = process.env.NODE_ENV || 'development'
const isDev = env === 'development'
// const sequelize = new Sequelize(process.env.DB_URL)

// sequelize.authenticate()
//   .then(() => {
//     console.log('Connected succesfully!')
//   })
//   .catch(err => {
//     console.log('Unable to connect to the database', err)
//   })

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
