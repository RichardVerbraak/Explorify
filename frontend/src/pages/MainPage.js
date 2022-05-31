import React from 'react'

import ExplorifyLogo from '../assets/explorify-logo.svg'

// Spritemap?
import LeftArrow from '../assets/left-arrow.svg'
import RightArrow from '../assets/right-arrow.svg'

import AlbumCover from '../assets/album-cover.svg'

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
				<div className='header__navigation'>
					<div className='header__pagination'>
						<img
							className='header__pagination--arrow'
							src={LeftArrow}
							alt='Left arrow'
						/>
						<img
							className='header__pagination--arrow'
							src={RightArrow}
							alt='Right arrow'
						/>
					</div>
					<div className='header__profile'>Profile icon</div>
				</div>

				<div className='details'>
					<div className='details__album'>
						<h2 className='details__album--title'>Currently Playing</h2>
						<img
							className='details__album--cover'
							src={AlbumCover}
							alt='Album cover'
						/>
					</div>
					<div className='details__playlist'>
						<div className='details__info'>
							<h3 className='details__info--header'>Playlist</h3>
							<h3 className='details__info--title'>Awesome List</h3>
							<p className='details__info--sub'>
								229 likes - 50 songs - 4 hours 42 min
							</p>
						</div>

						<div className='details__song'>
							<h2 className='details__song--title'>Summertime Sadness</h2>
							<h2 className='details__song--artist'>
								Lana Del Rey, Cedric Gervais
							</h2>
						</div>
					</div>
				</div>
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
