import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-solid-svg-icons"

export default function Header({toggleTheme}) {
  return (
    <header>
      <p>Where in the World?</p>
      <button onClick={toggleTheme} className='cursor-pointer'>
        <FontAwesomeIcon icon={faMoon} />
        <span className='text-xs'>Dark Mode</span>
      </button>
    </header>
  )
}