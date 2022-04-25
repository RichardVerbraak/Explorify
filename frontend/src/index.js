import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import './sass/main.scss'

console.log('test')

const root = createRoot(document.getElementById('root'))

root.render(<App />)
