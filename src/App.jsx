import React, { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import { Route, Routes } from 'react-router-dom'
import CountryDetails from './components/CountryDetails'
import Layout from './components/Layout'

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
        <Routes>
        <Route element={<Layout darkMode={darkMode} toggleTheme={toggleTheme} />}>
          <Route path="/" element={<Main />} />
          <Route path="/country/:code" element={<CountryDetails />} />
        </Route>
      </Routes>
      </div>
    </div>

  )
}