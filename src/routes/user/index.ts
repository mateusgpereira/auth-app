import { Router } from "express"

import UserController from "@controllers/UserController"
import User from "@models/User"

const routes = Router()
const userController = new UserController()

routes.post('/', userController.create)

export default routes