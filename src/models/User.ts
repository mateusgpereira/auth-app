import { Schema, model } from 'mongoose'

interface User {
  name: string
  password: string
  email: string
  cpf: string
}

const schema = new Schema<User>({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  cpf: { type: String, required: true },
})

export default model<User>('User', schema)
