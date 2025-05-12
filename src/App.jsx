import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

// Importing the pages
import Home from "./pages/Home"

createRoot(document.getElementById('root')).render (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
  </Routes>
  </BrowserRouter>
)

export default App
