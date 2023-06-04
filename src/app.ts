import express, { Application, Request, Response } from 'express'
import userRouter from './app/modules/users/userRouter'
const app: Application = express()
import cors from 'cors'

// parse
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Application router
app.use('/api/v1/user', userRouter)

// Testing route
app.get('/', (req: Request, res: Response) => {
  res.send('Working Successfully')
})

export default app
