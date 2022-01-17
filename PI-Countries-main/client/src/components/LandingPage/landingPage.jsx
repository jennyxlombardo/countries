import React from 'react'
import { Link } from 'react-router-dom'
import './landingPage.css'


export default function LandingPage () {
  return (
    <div className = "lPage">
      <h1 className ="text">Welcome</h1>
      <Link to='/home'>
        <button className = "button">Enter</button>
      </Link>
    </div>
  )
}
