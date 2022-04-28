import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Test from './components/Test'

import LoginScreen from './pages/LoginPage'

// TODO: Make Private Route or use Redirect if user isn't authenticated

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<LoginScreen />} />
				<Route path='/test' element={<Test />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
