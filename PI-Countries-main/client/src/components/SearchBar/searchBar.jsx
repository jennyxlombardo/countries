import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchCountries } from '../../redux/actions'

export default function SearchBar () {
  const [search, setSearch] = useState('')
  let dispatch = useDispatch()

  function onSubmit (e) {
    e.preventDefault()
    dispatch(searchCountries(search))
    setSearch('')
  }

  function onInputChange (e) {
    e.preventDefault()
    setSearch(e.target.value)
  }



  return (
    <div className='searchForm'>
      <form onSubmit={onSubmit}>
        <input type='text' onChange={onInputChange} value={search} />
        <input type='reset' onSubmit={(e) => setSearch(e.target.value)} value='Search' />
      </form>
    </div>
  )
}

