import { Request, Response } from 'express'
import userService from './userService'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = await req.body

    const result = await userService.createUser(user)

    res.status(200).json({
      status: 'Success',
      message: 'User created successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(400).json({
      status: 'Failed',
      message: error.message,
    })
  }
}

export default { createUser }
