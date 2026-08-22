import React from 'react'
import SearchBar from './SearchBar'
import RegionFilter from './RegionFilter'
// import CountryList from './CountryList'

export default function Main() {
  return (
    <main>
        <SearchBar />
        <RegionFilter /> 
        {/* <CountryList /> */}
    </main>
  )
}
