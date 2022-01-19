import React from 'react'
//import { filterByActivity } from '../../redux/actions'
import Countries from '../Countries/countries'
//import FilterActivities from '../Filters/filterActivities'
import FilterContinents from '../Filters/FilterContinents'
import FilterCountries from '../Filters/filterCountries'
import FilterByActivities from '../Filters/filterActivities'
import Order from '../Order/order'
import Population from '../PopulationOrder/population'
import ReLoad from '../Reload/reload'
import SearchBar from '../SearchBar/searchBar'
import './home.css'
import { Link } from 'react-router-dom'

export default function Home () {
  
  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <Link to='/activity/'>
          <button className='caButton'>Create Activity</button>
        </Link>
      <div className='inputs'>
        <FilterContinents />
        <FilterCountries />
        <FilterByActivities />
        <Population />
        <Order />
      </div>
      <Countries />
     
      <ReLoad />
    </div>
  )
}
