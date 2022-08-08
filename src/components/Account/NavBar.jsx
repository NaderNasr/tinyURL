import { AppBar, Box, Button, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { auth } from '../../firebase'
import './NavBar.css'

const NavBar = ({ users }) => {
  return (
    <>
      <AppBar position='static' color='secondary' elevation={0}>
        <Toolbar>
          <Typography variant='h4' id='title'>Tiny</Typography>
          <Box ml='auto'>

            {users ?
              <>
                <Button onClick={() => auth.signOut()} color='inherit'>Logout</Button>
              </>
              :
              <>
                <Button color='inherit'>Guest</Button>
              </>
            }
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar