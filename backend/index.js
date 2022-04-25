import express from 'express'
import testRoutes from './routes/testRoutes.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

const PORT = 5000

app.get('/', (req, res) => {
	res.send('Hello World')
})

app.use('/api/test', testRoutes)

app.listen(PORT, () => {
	console.log(`Server running in ${process.env.NODE_ENV} at port ${PORT}`)
})
