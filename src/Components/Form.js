import React from 'react'

export default function Form({handleForm}) {
  
  const FormInput = (e) => {
    console.log(e.target.value)
    handleForm(e.target.value)
  }
  
  return (
    <form>
      <input onChange={FormInput} type="text" placeholder="search"></input>
    </form>
  )
}
