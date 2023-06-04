import express from 'express'
const router = express.Router()
import userController from './userController'

router.route('/create-user/').post(userController.createUser)

export default router
