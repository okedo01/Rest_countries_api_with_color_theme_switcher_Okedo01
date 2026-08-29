import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-solid-svg-icons"

export default function Header({darkMode, toggleTheme}) {
  return (
    <header className="bg-white px-6 py-6 shadow-sm dark:bg-gray-800">
      <p>Where in the World?</p>
      <button onClick={toggleTheme}>
        <FontAwesomeIcon icon={faMoon} />
        <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
      </button>
    </header>
  )
}
