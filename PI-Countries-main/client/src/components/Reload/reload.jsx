import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCountries } from '../../redux/actions'
import './reload.css'

export default function ReLoad () {
  const dispatch = useDispatch()

  useEffect(
    e => {
      dispatch(getCountries())
    },
    [dispatch]
  )

  // function handleClick (e) {
  //   e.preventDefault()
  //   dispatch(getCountries())
  // }
 function refreshPage(){
   window.location.reload(false)
 }

  return (
    <div>
      <button className='reloadbtn'
        onClick={e => {
          refreshPage(e)
        }}
      >
       Reload Countries
      </button>
    </div>
  )
}
