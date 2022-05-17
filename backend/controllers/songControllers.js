import axios from 'axios'

// @desc        Get songs
// @route       /api/songs
// @access      Private
const getSongs = async (req, res, next) => {
	try {
		const config = {
			headers: {
				Authorization: `Bearer ${req.token}`,
			},
		}

		console.log(req.token)

		const data = await axios.get(
			'https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V',
			config
		)

		console.log(data)
		res.send(data)
	} catch (error) {
		console.log(error.response.data)
		next(error)
	}
}

export { getSongs }
