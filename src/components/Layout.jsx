import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

export default function Layout({darkMode, toggleTheme}) {
  return (
    <div>
        <Header toggleTheme={toggleTheme} />
        <Outlet />
    </div>
  )
}
