import React from 'react'
import { Routes, Route } from "react-router"

import LoginPage from "./pages/loginPage"
import RegisterPage from "./pages/registerPage"
import Footer from './components/footer'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App

