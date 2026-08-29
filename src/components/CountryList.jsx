import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard';
import CountryCardSkeleton from './CountryCardSkeleton';

export default function CountryList({ searchTerm, selectedRegion }) {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // const API_KEY = import.meta.env.VITE_REST_COUNTRIES_API_KEY;
  // console.log(API_KEY);

  useEffect(() => {
    async function getCountries() {
      try {
        // const response = await fetch("/data.json");
        // const response = await fetch("https://countries.dev/countries");
        const response = await fetch(
          'https://api.restcountries.com/countries/v5?q=canada',
          { headers: { 'Authorization': 'Bearer rc_live_2ccaa355e5ee4650b49a994b0674aba0' } }
        );

        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        const data = await response.json();
        console.log(data);

        setTimeout(() => {
          // setCountries(data);
          setCountries(data.data.objects);
          console.log(data.data.objects[0]);
          setIsLoading(false);
        }, 500);
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

  if (error) {
    return <p>{error}</p>
  }

  // const filteredCountries = countries.filter((country) => {
  //   const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase());
  //   const matchesRegion = selectedRegion === "" || country.region === selectedRegion;
  //   return matchesRegion && matchesSearch;
  // }
  // )

  // const filteredCountries = countries.filter((country) => {
  //   const countryName = country.name?.common || country.name || "";

  //   const matchesSearch = countryName
  //     .toLowerCase()
  //     .includes(searchTerm.toLowerCase());

  //   const matchesRegion =
  //     selectedRegion === "" || country.region === selectedRegion;

  //   return matchesRegion && matchesSearch;
  // });

  const filteredCountries = countries.filter((country) => {

    const matchesSearch = country.names.common
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesRegion =
      selectedRegion === "" ||
      country.region === selectedRegion;

    return matchesSearch && matchesRegion;
  });

  return (
    <div className='countries-list'>
      {
        filteredCountries.map(country => (
          <CountryCard country={country} key={country.codes.alpha_3} />
        ))
      }
      <p>{error}</p>
    </div>
  )
}
