import UserModel, { User } from '../models/User'
import hashProvider from '../providers/HashProvider'

class CreateUserService {
  public async execute(userData: User): Promise<User> {
    const { password } = userData
    const hashedPassword = await hashProvider.hash(password)
    const user = new UserModel({ ...userData, password: hashedPassword })

    await user.save()
    return user
  }
}

export default new CreateUserService()
