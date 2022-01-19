import React, { useState } from 'react'
import { useEffect } from 'react'
//import { sort } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import { orderByPopulation } from '../../redux/actions'
import { ASCENDENTE, DESCENDENTE } from '../variables/sort'

export default function Population () {
  const dispatch = useDispatch()
  // eslint-disable-next-line
  const [orderPopulation, setOrderPopulation] = useState('')

  useEffect(() => {
    dispatch(orderByPopulation(orderPopulation))
  }, [orderPopulation])

  function handlePopulationSort (e) {
    e.preventDefault()
    setOrderPopulation(e.target.value)
  }
  return (
    <div>
      <h3>Population</h3>
      <select onChange={e => handlePopulationSort(e)}>
        <option value='All'>Select</option>
        <option value={ASCENDENTE}>Ascending</option>
        <option value={DESCENDENTE}>Descending</option>
      </select>
    </div>
  )
}
