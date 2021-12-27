import { Router } from 'express'

import UserController from '@controllers/UserController'
import auth from 'src/middlewares/auth'

const routes = Router()
const userController = new UserController()

routes.post('/', userController.create)

routes.use(auth)
routes.get('/me', userController.show)

export default routes
