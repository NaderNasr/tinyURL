import { AppBar, Box, Button, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

const NavBar = () => {
  return (
    <>
      <AppBar position='static' color='primary' elevation={0}>
        <Toolbar>
          <Typography variant='h6'>Tiny</Typography>
          <Box ml='auto'>
            <Button color='inherit'>Links</Button>
            <Button color='inherit'>Logout</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar