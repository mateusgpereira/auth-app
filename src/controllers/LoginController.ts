import createLoginService from '@services/CreateLoginService'
import { Request, Response } from 'express'

class LoginController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body

    const { token } = await createLoginService.execute(email, password)
    return res.json({ token })
  }
}

export default LoginController
