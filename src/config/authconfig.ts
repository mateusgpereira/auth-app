import { Secret } from 'jsonwebtoken'

console.log(process.env.TOKEN_SECRET)
const jwt = {
  secret: process.env.TOKEN_SECRET as Secret,
  expiresIn: '1d',
}

export default { jwt }
