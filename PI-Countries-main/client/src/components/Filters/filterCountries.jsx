import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { filterCountries } from '../../redux/actions'

export default function FilterCountries () {
  const dispatch = useDispatch()
  const pais = useSelector(state => state.countries)

  function handleFilterCountries (e) {
    e.preventDefault()
    dispatch(filterCountries(e.target.value))
    
  }

  return (
    <div>
      <h3>Country</h3>
      <select name='select' onChange={handleFilterCountries}>
        <option className='option' value='All'>
          Select
        </option>
        {pais.map(el => (
          <option value={el.name}>{el.name}</option>
        ))}
      </select>
    </div>
  )
}
