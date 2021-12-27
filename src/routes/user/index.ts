import { Router } from 'express'

import UserController from '@controllers/UserController'
import auth from 'src/middlewares/auth'
import { celebrate, Joi, Segments } from 'celebrate'

const routes = Router()
const userController = new UserController()

routes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().max(50).required(),
      email: Joi.string().max(70).email().required(),
      password: Joi.string().min(6).max(60).required(),
      cpf: Joi.string().length(11).required(),
    },
  }),
  userController.create
)

routes.use(auth)
routes.get('/me', userController.show)

export default routes
