import { Router } from 'express'
import userRoutes from './user'
import loginRoutes from './login'

const routes = Router()

routes.use('/users', userRoutes)
routes.use('/login', loginRoutes)

export default routes
