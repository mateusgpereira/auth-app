import { Secret } from 'jsonwebtoken'

const jwt = {
  secret: process.env.TOKEN_SECRET as Secret,
  expiresIn: '1d',
}

export default { jwt }
