import authConfig from '@config/authconfig'
import { sign } from 'jsonwebtoken'
import InvalidCredentials from 'src/errors/InvalidCredentials'
import UserModel from '../models/User'
import hashProvider from '../providers/HashProvider'

interface LoginResponse {
  token: string
}

class CreateLoginService {
  public async execute(email: string, password: string): Promise<LoginResponse> {
    const user = await UserModel.findOne({ email })

    if (!user) {
      throw new InvalidCredentials()
    }

    const passwordMatches = await hashProvider.compare(password, user.password)

    if (!passwordMatches) {
      throw new InvalidCredentials()
    }

    const { secret, expiresIn } = authConfig.jwt
    const token = sign({ email: user.email }, secret, { subject: user.id, expiresIn })
    return { token }
  }
}

export default new CreateLoginService()
