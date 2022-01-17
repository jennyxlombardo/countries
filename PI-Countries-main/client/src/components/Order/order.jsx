import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sort } from '../../redux/actions'
import { ASCENDENTE, DESCENDENTE } from '../variables/sort'

export default function Order () {
  const dispatch = useDispatch()
  // eslint-disable-next-line
  const [order, setOrder] = useState('')

  function onSelectChange (e) {
    e.preventDefault()
    dispatch(sort(e.target.value))
    //setCurrentPage(1);
    setOrder(`Ordered ${e.target.value}`)
  }

  return (
    <div>
      <h3 className='orderTitle'>Order</h3>
      <select name='select' onChange={e => onSelectChange(e)}>
        <option value='All'>Select</option>
        <option value={ASCENDENTE}>Ascending</option>
        <option value={DESCENDENTE}>Descending</option>
      </select>
    </div>
  )
}
