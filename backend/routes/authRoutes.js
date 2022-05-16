import express from 'express'
import { authorizeUser } from '../controllers/authControllers.js'

const router = express.Router()

router.get('/', authorizeUser)

export default router
