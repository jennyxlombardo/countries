import './country.css'
import { Link } from 'react-router-dom'

export default function Country ({ name, continents, image, id, population }) {
  return (
    <div className='container'>
      <div className='card'>
        <h3>{name}</h3>
        <img
          className='flags'
          src={image}
          alt='imagen not found'
          width='150px'
          height='100px'
        />

        <Link to={'/home/' + id}>
          <button className='btnMore'>More Info</button>
        </Link>
        <h4>{continents}</h4>
        <h4>{id}</h4>
        <h4>Pop: {population}</h4>
      </div>
    </div>
  )
}
