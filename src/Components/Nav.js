import React from 'react'
import Form from './Form'

export default function Nav({handleForm}) {
  
  
  
  return (
    <div class="nav">
      Home
      Top 10
      Favorites
      <Form handleForm={handleForm}/>
    </div>
  )
}
