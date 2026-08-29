import React from 'react'

export default function RegionFilter({ selectedRegion, setSelectedRegion }) {

  return (
    <select
      value={selectedRegion}
      onChange={(event) => setSelectedRegion(event.target.value)}
      className='region-filter'>
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  )
}
