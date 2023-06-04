import config from '../../../config/index'
import { IUser } from './userInterface'
import User from './userModel'
import { generateUserId } from './userUtils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremenmtal ID
  const id = await generateUserId()

  user.id = id

  if (!user.password) {
    user.password = config.default_user_password as string
  }

  const createdUser = await User.create(user)

  if (!createdUser) {
    throw new Error('Failed to create user!')
  }
  return createdUser
}

export default { createUser }
