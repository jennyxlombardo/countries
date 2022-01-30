import React from 'react'
import { useEffect } from 'react'
import { countryDetails } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import './details.css'

export default function CountryDetails (props) {
  console.log(props)

  const { id } = useParams()
  const dispatch = useDispatch()
  console.log(id)

  useEffect(() => {
    dispatch(countryDetails(id))
     // eslint-disable-next-line
  }, [id, dispatch])

  const myCountry = useSelector(state => state.detail)
  return (
    <div>
      <div className='btns'>
        <Link to='/home/'>
          <button className='bkButton'>Back</button>
        </Link>
      </div>
      {myCountry ? (
        <div className='details'>
          <h1> {myCountry.name}</h1>
          <img
            src={myCountry.image}
            alt='Flag not found'
            width='320px'
            height='200px'
          />
          <h2>Continent: {myCountry.continents}</h2>
          <h2>Capital: {myCountry.capital}</h2>
          <h3>ID: {myCountry.id}</h3>
          <p>Subregion: {myCountry.subregion}</p>
          <p>Area: {myCountry.area} Km²</p>
          <p>Population: {myCountry.population} </p>
          <h3>Activities: </h3>

          {myCountry.activities?.map(el => {
            return (
              <div className='activity'>
                <h3>{el.name}</h3>
                <h3>{el.id}</h3>
                <h3>Difficulty: {el.difficulty}</h3>
                <h3>Duration: {el.duration} </h3>
                <h3>Season: {el.season}</h3>
              </div>
            )
          })}
          
        </div>
      ) : (
        <div>loading ...</div>
      )}
      <Link to='/home/'>
        <button className='bkButton'>Back</button>
      </Link>
    </div>
  )
}
