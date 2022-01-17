import React from 'react'
import './pagination.css'


export default function Pagination ({
  //info that will get here by prop desde countreis y va usar lo para los eventos
  countriesPerPage,
  filteredCountries,
  currentPage,
  pagination
}) {
  const pageNumbers = []

  for (let i = 0; i < Math.ceil(filteredCountries / countriesPerPage); i++) {
   
     pageNumbers.push(i + 1)
   
  }

  return (
    <nav>
      <ul className='pagination'>
        {
        pageNumbers &&
          pageNumbers.map(n => {
             return (
              <li className='number' key={n}>
                <button onClick={() => pagination(n)}>{n}</button>
              </li>
            )
          })}
      </ul>
    </nav>
  )
}
