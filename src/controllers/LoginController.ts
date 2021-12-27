import { Request, Response } from 'express'
import createLoginService from '@services/CreateLoginService'
import InvalidCredentials from 'src/errors/InvalidCredentials'

class LoginController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body

    try {
      const { token } = await createLoginService.execute(email, password)
      return res.json({ token })
    } catch (error) {
      if (error instanceof InvalidCredentials) {
        return res.status(400).json({ message: error.message })
      }
      console.error(error)
      return res.status(500).json({ message: 'Something went wrong' })
    }
  }
}

export default LoginController
