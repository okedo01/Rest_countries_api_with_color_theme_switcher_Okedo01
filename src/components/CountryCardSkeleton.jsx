import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardFooter } from "@/components/ui/card";

export default function CountryCardSkeleton() {
  return (
    <Card className="w-full max-w-sm overflow-hidden pt-0">
      {/* Flag skeleton */}
      <Skeleton className="h-48 w-full rounded-none" />

      <CardHeader className="space-y-3">
        {/* Country name */}
        <Skeleton className="h-6 w-3/4" />

        {/* Population */}
        <Skeleton className="h-4 w-1/2" />

        {/* Region */}
        <Skeleton className="h-4 w-2/3" />
      </CardHeader>

      <CardFooter>
        <Skeleton className="h-10 w-full" />
      </CardFooter>
    </Card>
  );
}