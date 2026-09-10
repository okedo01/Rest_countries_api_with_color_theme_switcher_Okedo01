import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className='search-bar'>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        type="text"
        placeholder='Search for a country...'
        value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
        className='text-sm pl-10' />
    </div>
  )
}