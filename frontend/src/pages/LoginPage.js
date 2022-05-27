import React from 'react'
import { Link } from 'react-router-dom'

import SpotifyLogo from '../assets/spotify-logo.svg'

const Loginpage = () => {
	return (
		<div className='login'>
			<div className='login__box'>
				<img src={SpotifyLogo} alt='Spotify Logo' className='login__logo' />
				<p className='login__text'>Explore new sounds</p>
				<button className='login__btn'>Login with Spotify</button>
				<Link to='test'>Test</Link>
			</div>
		</div>
	)
}

export default Loginpage
