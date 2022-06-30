import React from 'react'
import { useForm} from '@mantine/form'
import { TextInput, Button, Box, Group} from '@mantine/core'

export default function Form({handleForm, formIn}) {
  
  const formInput = (e) => {
    console.log(e.target.value)
    handleForm(e.target.value)
  }
  //trying to make this delete work
  //if keycode = backspace, remove last element (delete key) from state array
  //otherwise call formInput function and update state as normal
  const del = (e) => {
    if (e.keyCode=== 8){
      handleForm(formIn.slice(0,-1))
  } else formInput(e)}
  
  const form = useForm({
   
  });
    
    return (
      <Box className='box'sx={{ MaxWidth: 300,
      padding: 10,
      cursor: 'pointer', 
      display: 'grid'}} mx="auto">
        <form onChange={formInput} onKeyDown={del}>
          <TextInput/>
  
          <Group align='AlignItems'direction='row'position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
  )

  
  // return (
  //   <form className='form'>
  //     <input onChange={FormInput} type="text" placeholder="search"></input>
  //   </form>
  // )
}
