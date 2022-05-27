import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginScreen from './pages/LoginPage'
import MainPage from './pages/MainPage'

// TODO: Make Private Route or use Redirect if user isn't authenticated
// Routes is used instead of Switch in react-router v6

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<LoginScreen />} />
				<Route path='/' element={<MainPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
