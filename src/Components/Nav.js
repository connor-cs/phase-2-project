import React from 'react'
import Form from './Form'
import { NavLink } from 'react-router-dom'

export default function Nav({ handleForm, formInput }) {



  return (
    <>
    <nav className="nav">
      <NavLink to='/home'>Home</NavLink>
      <NavLink to='./Top10'>Top Ten</NavLink>
      <NavLink to='/Favorites'>Favorites</NavLink>
      
    </nav>
    <div className='formdiv'>
    <Form handleForm={handleForm} formInput={formInput}/>
    </div>
  </>
  )
}
