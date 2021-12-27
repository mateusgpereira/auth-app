import UserModel, { User } from '../models/User'

class ShowUserService {
  public async execute(userId: string): Promise<User | null> {
    return UserModel.findById(userId)
  }
}

export default new ShowUserService()
