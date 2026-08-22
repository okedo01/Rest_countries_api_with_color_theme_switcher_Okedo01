import React, { useState } from 'react'
import SearchBar from './SearchBar'
import RegionFilter from './RegionFilter'
import CountryList from './CountryList'

export default function Main() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  return (
    <main>
      <div className='wrapper'>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <RegionFilter selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
      </div>
      <div>
        <CountryList searchTerm={searchTerm} selectedRegion={selectedRegion} />
      </div>
    </main>
  )
}
