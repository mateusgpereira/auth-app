import { User } from '@models/User'
import { Request, Response } from 'express'
import createUserService from '../services/CreateUserService'

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
}

export default UserController
