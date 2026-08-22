import React, { useState } from 'react'
import SearchBar from './SearchBar'
import RegionFilter from './RegionFilter'
import CountryList from './CountryList'

export default function Main() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main>
      <div className='wrapper'>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <RegionFilter />
      </div>
      <div>
        <CountryList searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </main>
  )
}
