const express = require('express')

const app = express()

const PORT = 5000

app.get('/', (req, res) => {
	res.send('Hello there.')
})

app.listen(PORT, () => {
	console.log(`Server is now up and running at ${PORT}`)
})
