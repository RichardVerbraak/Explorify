import React from 'react'
import Sidebar from '../components/Sidebar'

// Create a context to share data?

const MainPage = () => {
	return (
		<div className='container'>
			<div className='sidebar'>
				<div className='categories'></div>
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

{
	/* <div className='category'>
						<h3 className='category__title'>Top Played Songs</h3>
						<p className='category__time'>Last Month</p>
						<p className='category__time'>Last 6 Months</p>
						<p className='category__time'>Last year</p>
					</div>

					<div className='category'>
						<h3 className='category__title'>Top Played Artists</h3>
						<p className='category__time'>Last Month</p>
						<p className='category__time'>Last 6 Months</p>
						<p className='category__time'>Last year</p>
					</div>

					<div className='category'>
						<h3 className='category__title'>Playlists</h3>
						<p className='category__time'>Awesome List</p>
						<p className='category__time'>Outrun</p>
						<p className='category__time'>Some list</p>
					</div> */
}

export default MainPage
