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

  // function clear () {
  //   document.getElementsByClassName('searchForm').reset()
  // }

  return (
    <div className='searchForm'>
      <form onSubmit={onSubmit}>
        <input type='text' onChange={onInputChange} value={search} />
        <input type='reset' onSubmit={(e) => setSearch(e.target.value)} value='Search' />
      </form>
    </div>
  )
}

// import "./searchBar.css"
// import React, { useState } from "react";
// import { getCountryByName } from "../../redux/actions/index";
// import { useDispatch } from "react-redux";

// const SearchBar = ()=>{

//   const [search, setSearch]=useState("")
//   // const [countries, setCountries]=useState([])
//   const dispatch = useDispatch();

//   const handleClick = (e) => {
//     e.preventDefault();
//     dispatch(getCountryByName(search));

//   }

//   const handleChange = (e)=>{
//     setSearch(e.target.value)
//     dispatch(getCountryByName(e.target.value));
//   }

//       return (
//         <div className ="searchbar">
//           <input type= "text" placeholder= "Country..." value={search} onChange={(e)=>handleChange(e)} />
//           <button type="submit" className ="btnsearch" onClick={e=>handleClick(e)} >Search</button>
//         </div>
//       );
// }
// export default SearchBar;
