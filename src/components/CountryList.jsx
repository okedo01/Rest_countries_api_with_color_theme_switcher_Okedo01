import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard';
import CountryCardSkeleton from './CountryCardSkeleton';

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

  if (isLoading) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <CountryCardSkeleton key={index} />
      ))}
    </div>
  );
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
