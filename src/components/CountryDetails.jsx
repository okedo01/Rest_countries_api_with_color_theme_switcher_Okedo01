import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

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
      } finally {
        setLoading(false);
      }
    }
    getCountryDetails();
  }, [code]);

  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>{error}</p>
  }

  const borders = countryDetails.borders || [];

  return (
    <main>
      <section className="back-btn">
        <Link to="/">
          Back
        </Link>
      </section>
      <section className="main-details">
        <div>
          <img src={countryDetails.flags.svg} />
        </div>
        <div className="country-details">
          <strong className='text-2xl'>{countryDetails.name}</strong>
          <div className='flex justify-between mt-7'>
            <div>
              <p>Native Name: {countryDetails.nativeName}</p>
              <p>Population: {countryDetails.population.toLocaleString()}</p>
              <p>Region: {countryDetails.region}</p>
              <p>Sub Region: {countryDetails.subregion}</p>
              <p>Capital: {countryDetails.capital}</p>
            </div>
            <div>
              <p>Top Level Domain: {countryDetails.topLevelDomain}</p>
              <p>Currencies: {countryDetails.currencies?.[0]?.code || "N/A"}</p>
              <p>Language: {countryDetails.languages?.[0]?.name || "N/A"}</p>
            </div>
          </div>
          <div className="border">
          Border Countries:
          <div>
            {
              borders.length > 0 ? (
                borders.map((border) => (
                  <div key={border}>
                    <p>{border}</p>
                  </div>
                ))
              ) : (
                <strong>No Boarder Found</strong>
              )
            }
          </div>
        </div>
        </div>
        
      </section>
    </main>
  )
}
