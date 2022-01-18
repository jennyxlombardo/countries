import React, {useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { filterByActivity, getActivity } from '../../redux/actions'

export default function FilterByActivities () {
  const dispatch = useDispatch()
  const activity = useSelector(state => state.allActivity)

  function handleFilterActivities (e) {
    e.preventDefault()
    dispatch(filterByActivity(e.target.value))
  }
  useEffect(()=>{
    dispatch( getActivity())
},[dispatch])

  return (
    <div>
      <h3>Activity</h3>
      <select name='select' onChange={e => handleFilterActivities(e)}>
        <option className='option' value='All'>
          Select
        </option>
        {activity?.length && activity.map(e => {return (
          <option key={e.id} value={e.name}>{e.name}</option>
        )})}
      </select>
    </div>
  )
}