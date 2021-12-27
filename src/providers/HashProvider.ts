import { hash, compare } from 'bcryptjs'

class HashProvider {
  public async hash(payload: string): Promise<string> {
    return hash(payload, 10)
  }

  public async compare(password: string, hashed: string): Promise<boolean> {
    return compare(password, hashed)
  }
}

export default new HashProvider()
