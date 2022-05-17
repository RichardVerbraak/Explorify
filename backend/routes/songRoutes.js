import express from 'express'
import { getSongs } from '../controllers/songControllers.js'

const router = express.Router()

router.get('/', getSongs)

export default router
