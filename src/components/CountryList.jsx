import React, { useEffect } from 'react'



export default function CountryList() {
  useEffect(() => {
    fetch("/data.json")
    .then(res => res.json())
    .then(data=> console.log(data)
    )
    .catch(err => console.log(err)
    )
  }, []);
  
  return (
    <div>

    </div>
  )
}
