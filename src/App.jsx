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
    <div className={darkMode ? "dark" : "light" }>
        <Routes>
        <Route element={<Layout toggleTheme={toggleTheme} darkMode={darkMode} />}>
          <Route path="/" element={<Main darkMode={darkMode} />} />
          <Route path="/country/:code" element={<CountryDetails />} />
        </Route>
      </Routes>
    </div>
  )
}