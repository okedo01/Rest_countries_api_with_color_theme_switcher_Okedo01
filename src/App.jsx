import Main from './components/Main'
import { Route, Routes } from 'react-router-dom'
import CountryDetails from './components/CountryDetails'
import Layout from './components/Layout'

export default function App() {

  return (
    <div>

      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Main />} />
          <Route path="/country/:code" element={<CountryDetails />} />
        </Route>
      </Routes>
    </div>
  )
}