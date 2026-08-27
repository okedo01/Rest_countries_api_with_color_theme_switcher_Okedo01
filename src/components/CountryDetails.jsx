import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function CountryDetails() {
  const [countryDetails, setCountryDetails] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { code } = useParams();

  useEffect(() => {
    async function getCountryDetails() {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error(`HTTP Error ${response.status}`);
        }
        const data = await response.json();
        const foundCountry = data.find((country) => country.alpha3Code === code);
        if (!foundCountry) {
          throw new Error("no country found");
        }
        setCountryDetails(foundCountry);
      } catch (error) {
        setError("Failed to Load Country Details");
      }
    }
    getCountryDetails();
  }, [code]);

  if (!countryDetails) {
    return <p>Loading details data...</p>
  }

  return (
    <div>
      {countryDetails.name}
    </div>
  )
}
