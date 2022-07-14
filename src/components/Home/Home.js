import React, { useState } from 'react'
import { Typography, TextField, Button } from "@material-ui/core"

const Home = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => {
    setForm(oldForm => ({
      ...oldForm,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      <Typography>Home</Typography>
      <TextField
        value={form.email}
        name='email'
        onChange={handleChange}
        label='Email' />
      <TextField
        value={form.password}
        label='Password'
        name='password'
        onChange={handleChange}
      />
      <Button onClick={() => console.log(form)}>Sign in</Button>
    </>
  )
}

export default Home