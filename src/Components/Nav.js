import React from 'react'
import Form from './Form'
import { NavLink } from 'react-router-dom'
import { getQueriesForElement } from '@testing-library/react'

export default function Nav({ handleForm, formInput }) {



  return (
    <>
      <nav className="nav">
        <ul>
          <li><div className='link'><NavLink to='/home'>Home</NavLink></div></li>
          <li><div className='link'><NavLink to='./Top10'>Smart Contract Blockchains</NavLink></div></li>
          <li><div className='link'><NavLink to='/Favorites'>Favorites</NavLink></div></li>
        </ul>
      </nav>
      <div className='formdiv'>
        <Form handleForm={handleForm} formIn={formInput} />
      </div>
    </>
  )
}
