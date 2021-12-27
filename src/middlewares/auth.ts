import authconfig from '@config/authconfig'
import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import AppError from 'src/errors/AppError'

interface TokenPayload {
  sub: string
}

const auth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    throw new AppError('Authentication Missing', 401)
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = verify(token, authconfig.jwt.secret)
    const { sub } = decoded as TokenPayload

    req.user = { id: sub }
    return next()
  } catch (error) {
    throw new AppError('Authentication Error', 401)
  }
}

export default auth
