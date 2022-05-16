import express from 'express'
import dotenv from 'dotenv'

import authRoutes from './routes/authRoutes.js'
import tokenRoutes from './routes/tokenRoutes.js'

dotenv.config()

const app = express()

const PORT = 5000

// app.get('/login', (req, res) => {

// })

app.use('/api/login', authRoutes)
app.use('/callback', tokenRoutes)

app.listen(PORT, () => {
	console.log(`Server running in ${process.env.NODE_ENV} at port ${PORT}`)
})
