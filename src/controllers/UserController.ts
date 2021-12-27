import { User } from '@models/User'
import { Request, Response } from 'express'
import createUserService from '../services/CreateUserService'
import showUserService from '../services/ShowUserService'

interface UserResponse {
  name: string
  email: string
  cpf: string
  id?: string
}

const userToResponse = ({ name, email, cpf, _id }: User): UserResponse => {
  return { name, email, cpf, id: _id }
}

class UserController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, password: plainPassword, email, cpf } = req.body

    const createdUser = await createUserService.execute({
      name,
      password: plainPassword,
      email,
      cpf,
    })

    const user = userToResponse(createdUser)

    return res.status(201).json(user)
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { userId } = req.params

    const user = await showUserService.execute(userId)
    if (!user) {
      return res.status(404)
    }

    return res.json(userToResponse(user))
  }
}

export default UserController
