import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Test from './components/Test'

import LoginScreen from './screens/LoginScreen'

// Add routes here

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
