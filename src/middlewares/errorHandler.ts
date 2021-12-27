import { NextFunction, Request, Response } from 'express'
import AppError from 'src/errors/AppError'

const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.status).json({
      message: error.message,
    })
  }
  console.error(error)
  return res.status(500).json({
    message: 'Internal Server Error',
  })
}

export default errorHandler
