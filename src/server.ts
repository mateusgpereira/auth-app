import express from 'express'
import 'express-async-errors'
import 'dotenv/config'
import '@config/db'
import { errors } from 'celebrate'
import routes from './routes'
import errorHandler from './middlewares/errorHandler'

const app = express()

app.use(express.json())
app.use(routes)

app.use(errors())
app.use(errorHandler)

app.listen(3000, () => {
  console.log('Im listening')
})
