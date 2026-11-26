import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-solid-svg-icons"
import { faSun } from "@fortawesome/free-solid-svg-icons"

export default function Header({ darkMode, toggleTheme }) {
  return (
    <header>
      <p>Where in the World?</p>
      <button onClick={toggleTheme} className='cursor-pointer'>
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  )
}