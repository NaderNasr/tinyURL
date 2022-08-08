import React, { useState } from 'react';
import { Typography, TextField, Button, Snackbar } from "@material-ui/core";
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import './Home.css';
import NavBar from '../Account/NavBar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Box, Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Home = () => {

  const [logError, setLogError] = useState('')
  const [open, setOpen] = useState(true)

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
      setOpen(true);
      setLogError('Sign up - Email already in use');
    });
  }


  const handleSignIn = async () => {
    await signInWithEmailAndPassword(auth, form.email, form.password).catch((error) => {
      setOpen(true);
      setLogError('Sign in - Email or Password is incorrect');
    });
  }

  // const handleResetPassword = async () => {
  //   await sendPasswordResetEmail(auth, form.email)
  // .then(() => {
  //   console.log('password reset sent')
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // ..
  //   console.log('errorMessage:', errorMessage + 'errorCode:', errorCode)
  // });
  // }

  return (
    <div>
      <NavBar>
        <Typography>TinyURL</Typography>
      </NavBar>
      <div style={{ margin: '5em' }}>
        {/* <Snackbar open={open} autoHideDuration={2200} onClose={() => setOpen(false)}> */}
        {logError.length > 0 ?
          <Collapse in={open}>
            <Alert
              variant="filled" severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              <AlertTitle>Error</AlertTitle>
              <strong>{logError}</strong>
            </Alert>
          </Collapse>
          :
          <></>
        }
        {/* </Snackbar> */}

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
          {/* <Button onClick={handleResetPassword}>Forgot Password?</Button> */}
          <Box display='flex'>
          <p>
            Not a member?
          </p>
          <Button onClick={handleSignUp}>Sign Up</Button>
          </Box>
        </div>
      </div>

    </div>
  )
}

export default Home