import axios from 'axios'

//  @desc       Get authorization to access the data
//  @route      GET /api/login
//  @access     Public
const authorizeUser = async (req, res) => {
	const redirectURI = 'http://localhost:5000/callback/'

	// Add spotify state param in uri later

	res.redirect(
		`https://accounts.spotify.com/authorize?response_type=code&client_id=${process.env.SPOTIFY_CLIENT_ID}&redirect_uri=${redirectURI}`
	)
}

//  @desc       Get authorization to access the data
//  @route      GET /api/authorization
//  @access     Public
const getData = async (req, res) => {
	const data = axios.get('https://api.spotify.com/v1')

	console.log(data)
}

export { authorizeUser }