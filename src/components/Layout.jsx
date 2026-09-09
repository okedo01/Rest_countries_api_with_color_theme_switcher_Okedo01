import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

export default function Layout({darkMode, toggleTheme}) {
  return (
    <div>
        <Header darkMode={darkMode} toggleTheme={toggleTheme} />
        <Outlet />
    </div>
  )
}
