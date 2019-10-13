import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import dotenv from 'dotenv'
import { ApolloServer } from 'apollo-server-express'

import typedefs from '../graphql/typeDefs'
import resolvers from '../graphql/resolvers'

import '@babel/polyfill'

dotenv.config()

const env = process.env.NODE_ENV || 'development'
const isDev = env === 'development'

const apollo = new ApolloServer({
  introspection: true,
  typeDefs: typedefs,
  resolvers,
  formatError: error => {
    return error
  },
  context: ({ req, res }) => {
    return {
      req, res
    }
  }
})

const app = express()

const port = process.env.PORT || 3000

app.use(morgan(isDev ? 'dev' : 'combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  return res.send('hello')
})

apollo.applyMiddleware({ app, path: '/graphql' })

app.listen(port, () => {
  console.log(`listening to port ${port}...`)
})
