import React from 'react'
import { Routes, Route } from "react-router"

import LoginPage from "./pages/loginPage"
import Footer from './components/footer'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage />} />
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App

