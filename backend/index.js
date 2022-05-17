import express from 'express'
import dotenv from 'dotenv'

import authRoutes from './routes/authRoutes.js'
import tokenRoutes from './routes/tokenRoutes.js'
import songRoutes from './routes/songRoutes.js'

//TODO: Add custom error handling

dotenv.config()

const app = express()

const PORT = 5000

app.use('/api/login', authRoutes)
app.use('/api/token', tokenRoutes)
app.use('/api/songs', songRoutes)

app.listen(PORT, () => {
	console.log(`Server running in ${process.env.NODE_ENV} at port ${PORT}`)
})
