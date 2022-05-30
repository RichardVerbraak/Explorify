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
					<div className='category'>
						<h3 className='category__title'>Top Played Songs</h3>
						<div className='category__options'>
							<p className='category__options--option'>Last Month</p>
							<p className='category__options--option'>Last 6 Months</p>
							<p className='category__options--option'>Last year</p>
						</div>
					</div>

					<div className='category'>
						<h3 className='category__title'>Top Played Artists</h3>
						<div className='category__options'>
							<p className='category__options--option'>Last Month</p>
							<p className='category__options--option'>Last 6 Months</p>
							<p className='category__options--option'>Last year</p>
						</div>
					</div>

					<div className='category'>
						<h3 className='category__title'>Playlists</h3>
						<div className='category__options'>
							<p className='category__options--option'>Awesome List</p>
							<p className='category__options--option'>Outrun</p>
							<p className='category__options--option'>Some list</p>
						</div>
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
