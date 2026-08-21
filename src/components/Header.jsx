import React from 'react'
import ThemeContext from '../context/ThemeContext'

export default function Header() {
  return (
    <div className='header'>
      <p>Where in the World?</p>
      <ThemeContext />
    </div>
  )
}
