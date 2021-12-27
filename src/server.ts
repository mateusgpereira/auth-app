import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

import '@config/db'

const app = express()

app.get('/', (req, res) => res.json({ message: 'Hello World' }))

app.listen(3000, () => {
  console.log('Im listening')
})
