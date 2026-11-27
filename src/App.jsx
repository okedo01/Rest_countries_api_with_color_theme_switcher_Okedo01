import Main from './components/Main'
import { Route, Routes } from 'react-router-dom'
import CountryDetails from './components/CountryDetails'
import Layout from './components/Layout'
import { useEffect, useState } from 'react'

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  }

  return (
    <div>
      <Routes>
        <Route element={<Layout darkMode={darkMode} toggleTheme={toggleTheme} />} >
          <Route path="/" element={<Main />} />
          <Route path="/country/:code" element={<CountryDetails />} />
        </Route>
      </Routes>
    </div>
  )
}