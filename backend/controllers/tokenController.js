import axios from 'axios'

// Maybe change this to middleware
const getAccessToken = async (req, res, next) => {
	try {
		const code = req.query.code || null

		const config = {
			headers: {
				'content-type': 'application/x-www-form-urlencoded',
				Authorization: `Basic ${new Buffer.from(
					`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
				).toString('base64')}`,
			},
		}

		// Using the URLSearchParams to send data that conforms to the form-urlencoded format
		const auth = new URLSearchParams({
			grant_type: 'authorization_code',
			code,
			redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
		})

		const { data } = await axios.post(
			'https://accounts.spotify.com/api/token',
			auth,
			config
		)

		console.log(data)
		res.send(data)
	} catch (error) {
		next(error)
	}
}

export { getAccessToken }
