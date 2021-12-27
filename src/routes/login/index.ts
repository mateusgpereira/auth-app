import { Router } from 'express'
import LoginController from '@controllers/LoginController'

const routes = Router()
const loginController = new LoginController()

routes.post('/', loginController.create)

export default routes
