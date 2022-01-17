import React, { useState } from 'react'
import './population.css'
import { useDispatch } from 'react-redux'
import { orderByPopulation } from '../../redux/actions'

export default function Population () {
  const dispatch = useDispatch()
  // eslint-disable-next-line
  const [orderPopulation, setOrderPopulation] = useState('')

  function handlePopulationSort (e) {
    e.preventDefault()
    dispatch(orderByPopulation(e.target.value))
    // setCurrentPage(1)
    setOrderPopulation(`Ordenado ${e.target.value}`)
  }
  return (
    <div className='pop'>
      <h3 className='childPop'>Population</h3>
      <select className='selectfilter' onChange={e => handlePopulationSort(e)}>
        <option value='All'>Select</option>
        <option value='asc'>Ascending</option>
        <option value='desc'>Descending</option>
      </select>
    </div>
  )
}
