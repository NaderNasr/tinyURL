import React, { useState } from 'react'
import { Typography, TextField, Button } from "@material-ui/core"
import {auth, firebase} from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';

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

  const handleSignUp = async () => {
    await createUserWithEmailAndPassword(auth, form.email, form.password).catch((error) => {
      alert(`Sign up error ${error}`);
    });
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
        type='password'
        onChange={handleChange}
      />
      <Button onClick={handleSignUp}>Sign in</Button>
    </>
  )
}

export default Home