import { AppBar, Box, Button, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { auth } from '../../firebase'

const NavBar = () => {
  return (
    <>
      <AppBar position='static' color='primary' elevation={0}>
        <Toolbar>
          <Typography variant='h6'>Tiny</Typography>
          <Box ml='auto'>
            <Button color='inherit'>Links</Button>
            <Button onClick={() => auth.signOut()} color='inherit'>Logout</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar