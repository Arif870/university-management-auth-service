import { Model, Schema, model } from 'mongoose'
import { User } from './userInterface'

type UserModel = Model<User, object>

const userSchema = new Schema<User>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

exports.User = model<User, UserModel>('User', userSchema)
