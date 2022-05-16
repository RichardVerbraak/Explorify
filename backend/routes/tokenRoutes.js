import { getAccessToken } from '../controllers/tokenController.js'
import express from 'express'

const router = express.Router()

router.get('/', getAccessToken)

export default router
