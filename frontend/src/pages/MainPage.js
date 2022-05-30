import React from 'react'

import ExplorifyLogo from '../assets/explorify-logo.svg'

// Create a context to share data?

const MainPage = () => {
	return (
		<div className='container'>
			<div className='sidebar'>
				<div className='logo-box'>
					<img
						src={ExplorifyLogo}
						alt='Explorify Logo'
						className='logo-box__logo'
					/>
					<h1 className='logo-box__title'>Explorify</h1>
				</div>

				<div className='categories'>
					<div className='categories__title'>
						<h3 className='categories__category--title'>Top Played Songs</h3>
						<p className='categories__category--time'>Last Month</p>
						<p className='categories__category--time'>Last 6 Months</p>
						<p className='categories__category--time'>Last year</p>
					</div>

					<div className='categories__category'>
						<h3 className='categories__category--title'>Top Played Artists</h3>
						<p className='categories__category--time'>Last Month</p>
						<p className='categories__category--time'>Last 6 Months</p>
						<p className='categories__category--time'>Last year</p>
					</div>

					<div className='categories__category'>
						<h3 className='categories__category--title'>Playlists</h3>
						<p className='categories__category--time'>Awesome List</p>
						<p className='categories__category--time'>Outrun</p>
						<p className='categories__category--time'>Some list</p>
					</div>
				</div>
			</div>

			<header className='header'>
				<h1>Header</h1>
			</header>

			<section className='songs'>
				<h1>Songs</h1>
			</section>

			<div className='controls'>
				<h1>Controls</h1>
			</div>
		</div>
	)
}

export default MainPage
