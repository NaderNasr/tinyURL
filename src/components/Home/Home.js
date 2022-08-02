import React, { useState } from 'react';
import { Typography, TextField, Button } from "@material-ui/core";
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import './Home.css';

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
    <div
      style={{ margin: '5em' }}
    >
      <div>
      <Typography>TinyURL</Typography>

        <TextField
          value={form.email}
          name='email'
          onChange={handleChange}
          label='Email'
          id="outlined-basic"
          variant="outlined"
          fullWidth
          style={{ marginTop: '5em' }}
        />
        <TextField
          value={form.password}
          label='Password'
          name='password'
          type='password'
          id="outlined-basic"
          variant="outlined"
          onChange={handleChange}
          fullWidth
          style={{ marginTop: '2em' }}
        />
        <div
          style={{ marginTop: '2em', display: 'flex', justifyContent: 'space-between' }}
        >
          <Button onClick={handleSignIn}>Sign In</Button>
          <Button onClick={handleSignUp}>Sign Up</Button>
        </div>
      </div>

    </div>
  )
}

export default Home