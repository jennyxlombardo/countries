import React, { useEffect, useState } from 'react'
import './activity.css'
import { Link, useNavigate } from 'react-router-dom'
import { getCountries, postActivity } from '../../redux/actions/index'
import { useDispatch, useSelector } from 'react-redux'

function validate (input) {
  let errors = {}
  if (!input.name) {
    errors.name = 'Name is required'
  }
  if (!input.difficulty) {
    errors.difficulty = 'Difficulty is required'
  }
  if (!input.duration) {
    errors.duration = 'Duration is required'
  }
  if (!input.season) {
    errors.season = 'Season is required'
  }
  if (input.countries.length < 1) {
    errors.countries = 'At least one country is required'
  }
  return errors
}
export default function CreateActivity () {
  const dispatch = useDispatch()
  const country = useSelector(e => e.countries)
  const history = useNavigate()
  const [errors, setErrors] = useState({})

  const [input, setInput] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    countries: []
  })

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  function handleChange (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value
      })
    )
    console.log(input)
  }

  function handleCheck (e) {
    console.log(input)
    if (e.target.checked)
      setInput({
        ...input,
        [e.target.name]: e.target.value
      })
    // setErrors(
    //   validate({
    //     ...input,
    //     [e.target.name]: e.target.value
    //   })
    // )
    // console.log(input)
  }

  function handleSubmit (e) {
  //   if (
  //     input.name &&
  //     input.difficulty &&
  //     input.season &&
  //     input.duration &&
  //     input.countries.length
  //   ) {
  //     e.preventDefault()
  //     dispatch(postActivity(input))
  //     alert('Activity created successfully')
  //     setInput({
  //       name: '',
  //       difficulty: '',
  //       duration: '',
  //       season: '',
  //       countries: []
  //     })
  //     history('/home')
  //   } else {
  //     e.preventDefault()
  //     alert('Please fill out all the fields')
  //   }
  // }
  e.preventDefault()
  console.log(input)
  if (
    !input.name &&
    !input.difficulty &&
    !input.season &&
    !input.duration &&
    !input.countries.length
  ) {
    alert('Please complete all the fields')
  } else {
    dispatch(postActivity(input))
    alert('Activity created')
    setInput({
      name: '',
      difficulty: '',
      duration: '',
      season: '',
      countries: []
    })
    history('/home')
  }
  }

  function handleSelect (e) {
    setInput({
      ...input,
      countries: [...input.countries, e.target.value]
    })
    console.log(input)
  }

  // function handleDelete (e) {
  //   setInput({
  //     ...input,
  //     country: input.country.filter(country => country !== e)
  //   })
  // }
  function handleDelete (e) {
    setInput({
      ...input,
      countries: input.countries.filter(occ => occ !== e)
    })
  }
  return (
    <div>
      <br />
      <div className='createActivity'>
        <Link to='/home' className='back'>
          <button className='buttonvolver'>Back</button>
        </Link>
      </div>
      <h2>Create Activity</h2>
      <form onSubmit={e => handleSubmit(e)}>
        <div>
          <label>Name</label>
          <br />
          <input
            placeholder='name of activity...'
            type='text'
            name='name'
            onChange={e => handleChange(e)}
            value={input.name}
          />
          {errors.name && <p className='error'>{errors.name}</p>}
        </div>
        <br />
        <div>
          <label>Difficulty</label>
          <br />
          <label htmlFor='1'>1</label>
          <input
            type='radio'
            id='1'
            name='difficulty'
            value='1'
            onChange={e => handleCheck(e)}
          />
          <label htmlFor='2'>2</label>
          <input
            type='radio'
            id='2'
            name='difficulty'
            value='2'
            onChange={e => handleCheck(e)}
          />
          <label htmlFor='3'>3</label>
          <input
            type='radio'
            id='3'
            name='difficulty'
            value='3'
            onChange={e => handleCheck(e)}
          />
          <label htmlFor='4'>4</label>
          <input
            type='radio'
            id='4'
            name='difficulty'
            value='4'
            onChange={e => handleCheck(e)}
          />
          <label htmlFor='5'>5</label>
          <input
            type='radio'
            id='5'
            name='difficulty'
            value='5'
            onChange={e => handleCheck(e)}
          />
          {errors.difficulty && <p className='error'>{errors.difficulty}</p>}
        </div>
        <br />
        <div>
          <label>Season</label>
          <br />
          <input
            type='checkbox'
            name='season'
            value='Summer'
            id='Summer'
            onChange={e => handleCheck(e)}
          />
          <label htmlFor='Summer'>Summer</label>
          <input
            type='checkbox'
            name='season'
            value='Spring'
            id='Spring'
            onChange={e => handleCheck(e)}
          />
          <label htmlFor='Spring'>Spring</label>
          <input
            type='checkbox'
            name='season'
            value='Winter'
            id='Winter'
            onChange={e => handleCheck(e)}
          />
          <label htmlFor='Winter'>Winter</label>
          <input
            type='checkbox'
            name='season'
            value='Fall'
            id='Fall'
            onChange={e => handleCheck(e)}
          />
          <label htmlFor='Fall'>Fall</label>
          {errors.season && <p className='error'>{errors.season}</p>}
          <br />
          <div>
            <br />
            <label>Duration</label>
            <br />
            <input
              placeholder='example: 4hs30min'
              name='duration'
              type='text'
              onChange={e => handleChange(e)}
            />
            {errors.duration && <p className='error'>{errors.duration}</p>}
          </div>
          <br />

          <div className='select'>
            <select required onChange={e => handleSelect(e)}>
              <option>Select Country</option>
              {country.map(e => (
                <option key={e.name}value={e.name}>{e.name}</option>
              ))}
            </select>
          </div>
        </div>

        <ul>
          <li>{input.countries.map(el => el)}</li>
        </ul>
        <button type='submit' >
          Create
        </button>
      </form>

      {input.countries.map(el => (
        <div className=''>
          <p>{el}</p>
          <button className='delete' onClick={() => handleDelete(el)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}
