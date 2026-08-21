import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-solid-svg-icons"

export default function ThemeContext() {
  return (
    <div className='flex justify-center items-center'>
      <FontAwesomeIcon icon={faMoon} />
      DarkMode
    </div>
  )
}
