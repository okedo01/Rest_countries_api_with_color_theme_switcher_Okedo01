import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard';

export default function CountryList() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCountries() {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        const data = await response.json();
        setCountries(data);
        setIsLoading(false);
      } catch (error) {
        setError("Failed to load countries");
        setIsLoading(false);
      }
    }
    getCountries();
  }, []);

  if(isLoading) {
    return <p>Loading countries...</p>
  }

  if(error) {
    return <p>{error}</p>
  }

  return (
    <div className='countries-list'>
      {
        countries.map(country => (
          <CountryCard country={country} />
        ))
      }
      <p>{error}</p>
    </div>
  )
}
