import './App.css'
//import Countries from "./components/Countries/countries"

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import LandingPage from './components/LandingPage/landingPage.jsx'
import Home from './components/Home/home.jsx'
import CountryDetails from './components/Details/details'
import CreateActivity from './components/Activities/activity'

export default function App () {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/activity/' element={<CreateActivity />}></Route>
          <Route path='/home/:id' element={<CountryDetails />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/' element={<LandingPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
