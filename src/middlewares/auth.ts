import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import Unauthorized from 'src/errors/Unauthorized'
import authconfig from '@config/authconfig'

interface TokenPayload {
  sub: string
}

const auth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    throw new Unauthorized()
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = verify(token, authconfig.jwt.secret)
    const { sub } = decoded as TokenPayload

    req.user = { id: sub }
    return next()
  } catch (error) {
    throw new Unauthorized()
  }
}

export default auth
