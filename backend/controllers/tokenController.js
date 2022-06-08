import axios from 'axios'

// Maybe change this to middleware
// Redirect uri is visited after the user authorizes
// This function will then post the auth info to the token api and return an access token if succesful
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

		const { access_token, refresh_token } = data

		res.redirect(
			`http://localhost:/3000/?access_token=${access_token}&refresh_token=${refresh_token}`
		)
	} catch (error) {
		next(error)
	}
}

export { getAccessToken }
