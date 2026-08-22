import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function CountryCard({ country }) {
  return (
    <Card className="country-card relative mx-auto w-full max-w-sm" key={country.name}>
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />

      <img
        src={country.flags.svg}
        alt={`Flag of ${country.name.common}`}
        className="relative z-20 aspect-video w-full object-cover"
      />

      <CardHeader>
        <CardTitle>{country.name}</CardTitle>
      </CardHeader>

      <CardContent className="contents">
        <div className="p-4 text-sm">
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
  );
}

export default CountryCard;