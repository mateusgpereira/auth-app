import authConfig from '@config/authconfig'
import { sign } from 'jsonwebtoken'
import AppError from 'src/errors/AppError'
import UserModel from '../models/User'
import hashProvider from '../providers/HashProvider'

interface LoginResponse {
  token: string
}

class CreateLoginService {
  public async execute(email: string, password: string): Promise<LoginResponse> {
    const user = await UserModel.findOne({ email })

    if (!user) {
      throw new AppError('Invalid Credentials', 401)
    }

    const passwordMatches = await hashProvider.compare(password, user.password)

    if (!passwordMatches) {
      throw new AppError('Invalid Credentials', 401)
    }

    const { secret, expiresIn } = authConfig.jwt
    const token = sign({ email: user.email }, secret, { subject: user.id, expiresIn })
    return { token }
  }
}

export default new CreateLoginService()
