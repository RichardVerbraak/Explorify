import express from 'express'
import authRoutes from './routes/authRoutes.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

const PORT = 5000

// app.get('/login', (req, res) => {

// })

app.use('/api/login', authRoutes)

app.listen(PORT, () => {
	console.log(`Server running in ${process.env.NODE_ENV} at port ${PORT}`)
})
