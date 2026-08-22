import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard';

export default function CountryList() {
  const [countries, setCountries] = useState([]);
  const [error, setError]= useState("");

  useEffect(() => {
    async function getCountries() {
      try {
        const response = await fetch("/data.json");
        if(!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        const data = await response.json();
        setCountries(data);
      } catch(error) {
        setError(error);
      }
    }
    getCountries();
  }, []);

  return (
    <div className='countries-list'>
      {
        countries.map(country => (
          <CountryCard country={country}/>
        ))
      }
      <p>{error}</p>
    </div>
  )
}
