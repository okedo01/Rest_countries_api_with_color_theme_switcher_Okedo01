import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function CountryCard({ country }) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />

      <img
        src={country.flags.svg}
        alt={`Flag of ${country.name.common}`}
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />

      <CardHeader>
        <CardAction>
          <Badge variant="secondary">{country.region}</Badge>
        </CardAction>

        <CardTitle>{country.name.common}</CardTitle>

        <CardDescription>
          Population: {country.population.toLocaleString()}
        </CardDescription>
      </CardHeader>

      <CardFooter>
        <Button className="w-full">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CountryCard;