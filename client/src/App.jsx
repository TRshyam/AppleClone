import {BrowserRouter,Routes,Route,useLocation } from 'react-router-dom'
import { useState } from 'react'
import LandingPage from './pages/LandingPage'

function App() {

  return (
<BrowserRouter>

      <Routes>

        <Route path='/' element={<LandingPage />} />
        
        

      </Routes>
  </BrowserRouter>
  )
}

export default App
