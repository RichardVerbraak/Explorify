import axios from 'axios'

//  @desc       Get authorization to access the data
//  @route      GET /api/login
//  @access     Public
const authorizeUser = async (req, res) => {
	// Add spotify state param in uri later

	const queryParams = new URLSearchParams({
		client_id: process.env.SPOTIFY_CLIENT_ID,
		response_type: 'code',
		redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
	}).toString()

	res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`)
}

//  @desc       Get authorization to access the data
//  @route      GET /api/authorization
//  @access     Public
const getData = async (req, res) => {
	const data = axios.get('https://api.spotify.com/v1')

	console.log(data)
}

export { authorizeUser }
