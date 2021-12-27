import { Request, Response } from "express";

class UserController {

  public async create(req: Request, res: Response) : Promise<Response> {
    return res.json({ message: 'created'})
  }
}

export default UserController