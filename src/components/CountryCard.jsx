import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

function CountryCard({ country, darkMode }) {
  return (
    <Link to={`/country/${country.alpha3Code}`}>
      <Card className="country-card relative mx-auto w-full max-w-sm">
        <div className="absolute inset-0 z-30 aspect-video " />

        <img
          src={country.flags.svg}
          alt={`Flag of ${country.name.common}`}
          className="relative z-20 aspect-video w-full object-cover"
        />

        <div className="card-name">
          <h1>{country.name}</h1>
        </div>

        <CardContent>
          <div className="card-details">
            <p>
              Population: {country.population.toLocaleString()}
            </p>
            <p>
              Region: {country.region}
            </p>
            <p>
              Capital: {country.capital}
            </p>

          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default CountryCard;