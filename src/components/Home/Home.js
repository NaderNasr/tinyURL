import React, { useState } from 'react'
import { Typography, TextField, Button } from "@material-ui/core"
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

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

  const handleSignIn = async () => {
    await signInWithEmailAndPassword(auth, form.email, form.password).catch((error) => {
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
      <Button onClick={handleSignUp}>Sign Up</Button>
      <Button onClick={handleSignIn}>Sign In</Button>

    </>
  )
}

export default Home