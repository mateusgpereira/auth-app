import { Schema, model } from 'mongoose'

export interface User {
  name: string
  password: string
  email: string
  cpf: string
  _id?: string
}

const schema = new Schema<User>({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  cpf: { type: String, required: true, unique: true },
})

export default model<User>('User', schema)
