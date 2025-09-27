import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage.jsx'
import Header from './components/HeaderCmp/Header.jsx'

function App() {
  return (
    <div>
      <Header/>
      <HomePage/>
    </div>
    
  )
}

export default App
