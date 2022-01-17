//import { getCountries } from '../../redux/actions'
import {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from '../Pagination/pagination'
import './countries.css'
import Country from '../Country/country'
//import Population from '../PopulationOrder/population'
import CreateActivity from '../Activities/activity'

export default function Countries () {
  let countries = useSelector(state => state.filteredCountries)

  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(1)
  /* eslint-disable*/
  // const [countryPerPage] = useState(9)
  // const indexedLast = currentPage * countryPerPage
  // const indexedFirst = indexedLast - countryPerPage
  // const currentCountry = countries.slice(indexedFirst, indexedLast)

  const [countriesPerPage, setCountriesPerPage] = useState(10)
  const indexLast =  currentPage * countriesPerPage
  const indexFirst = indexLast - (countriesPerPage)
  const currentCountries = countries.slice(indexFirst, indexLast)

  const pagination = pageNumber => {
    setCurrentPage(pageNumber)
  }

  return (
    <div>
      <div className='flags'>
        <div className='container'>
                {
                // if(pagination === 1){
                //     currentCountry.map(country => {
                //       return (<Country 
                //         name ={country.name}  
                //         image={country.image}
                //         continents={country.continents}
                //         id={country.id} />
                //      ) })} else {
                currentCountries.map(el => {
                  return (
                    <Country
                    name={el.name}
                    image={el.image}
                    continents={el.continents}
                    id={el.id}
                    />
                    )
                })
              }
            
          
        </div>
      </div>
      <div className='pagination'>
        <div className='cont'>
          
          <Pagination
            countriesPerPage={countriesPerPage}
            filteredCountries={countries.length}
            currentPage={currentPage}
            pagination={pagination}
          />
        </div>
      </div>
    </div>
  )
}
