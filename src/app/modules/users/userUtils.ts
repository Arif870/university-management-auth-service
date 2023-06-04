import User from './userModel'

export const findlastuserId = async () => {
  const lastuser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean()

  return lastuser?.id
}

export const generateUserId = async () => {
  const currentId = (await findlastuserId()) || (0).toString().padStart(5, '0')
  const newUserId = (parseInt(currentId) + 1).toString().padStart(5, '0')

  return newUserId
}
