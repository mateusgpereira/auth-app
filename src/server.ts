import express from 'express'
import dotenv from 'dotenv'
import routes from './routes'

dotenv.config()

// eslint-disable-next-line import/first
import '@config/db'

const app = express()

app.use(routes)

app.listen(3000, () => {
  console.log('Im listening')
})
