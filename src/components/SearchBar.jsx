import React from 'react'

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className='search-bar'>
      <input
        type="text"
        placeholder='Search for a country...'
        value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
        className='text-sm pl-10' />
    </div>
  )
}
