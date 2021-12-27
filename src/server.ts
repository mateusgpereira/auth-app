import express from 'express'
import 'express-async-errors'
import 'dotenv/config'
import '@config/db'
import routes from './routes'
import errorHandler from './middlewares/errorHandler'

const app = express()

app.use(express.json())
app.use(routes)

app.use(errorHandler)

app.listen(3000, () => {
  console.log('Im listening')
})
