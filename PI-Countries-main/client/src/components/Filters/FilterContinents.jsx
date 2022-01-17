import React, { useState} from 'react'

import { useDispatch } from 'react-redux'

import { filterContinents } from '../../redux/actions'

export default function FilterContinents () {
  const dispatch = useDispatch()
  // eslint-disable-next-line
  const [order, setOrder] = useState("")
  function handleFilterContinents (e) {
    e.preventDefault();
    dispatch(filterContinents(e.target.value))
    setOrder(`Ordered ${e.target.value}`)
  }

  return (
    <div>
        <h3>Continent</h3>
      <select name='select' onChange={e=>handleFilterContinents(e)}>
        <option value='All'>Select</option>
        <option value='South America'>South America</option>
        <option value='North America'>North America</option>
        <option value='Europe'>Europe</option>
        <option value='Africa'>Africa</option>
        <option value='Asia'>Asia</option>
        <option value='Oceania'>Oceania</option>
        <option value='Antarctica'>Antarctica</option>
      </select>
    </div>
  )
}
