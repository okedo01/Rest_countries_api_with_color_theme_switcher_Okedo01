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

function CountryCard({ country }) {
  console.log(country.flag);
  return (
    <Link to={`/country/${country.codes.alpha_3}`}>
      <Card className="country-card relative mx-auto w-full max-w-sm">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />

        <img
          src={country.flag.url_svg}
          alt={`Flag of ${country.names.common}`}
          className="relative z-20 aspect-video w-full object-cover"
        />

        <CardHeader>
          <CardTitle>{country.names.common}</CardTitle>
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
              Capital: {country.capitals?.[0]?.name || "N/A"}
            </p>

          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default CountryCard;