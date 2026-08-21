import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-solid-svg-icons"

export default function Header() {
  return (
    <header>
      <p>Where in the World?</p>
      <button>
        <FontAwesomeIcon icon={faMoon} />
        <span>DarkMode</span>
      </button>
    </header>
  )
}
