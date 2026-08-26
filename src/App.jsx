import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import { Route, Routes } from 'react-router-dom'
import CountryDetails from './components/CountryDetails'

export default function App() {
  return (
    <Routes>
      <Route path='/'>
        <Header />
        <Main />
      </Route>
      <Route path="/country/:code" element={<CountryDetails />} />
    </Routes>
  )
}
