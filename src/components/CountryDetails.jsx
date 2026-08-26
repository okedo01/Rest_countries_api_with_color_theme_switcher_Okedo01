import React from 'react'
import { useParams } from 'react-router-dom'

export default function CountryDetails() {
    const {code} = useParams();
    console.log(code);
    
  return (
    <div>CountryDetails</div>
  )
}
