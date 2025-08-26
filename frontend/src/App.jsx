import React from 'react'
import { Routes, Route } from "react-router"
import Footer from './components/footer'

import DashboardPage from './pages/dashboardPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/dashboard' element={<DashboardPage />} />
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App

