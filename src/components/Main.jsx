import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import RegionFilter from './RegionFilter'
import CountryList from './CountryList'

export default function Main() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);
    return () => {
      clearTimeout(timer);
    }
  }, [searchTerm]);

  return (
    <main>
      <div className='wrapper'>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <RegionFilter selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
      </div>
      <div>
        <CountryList searchTerm={debouncedSearchTerm} selectedRegion={selectedRegion} />
      </div>
    </main>
  )
}
