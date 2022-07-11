import React from 'react'
import { Typography, AppBar, Toolbar, Button, Box } from "@material-ui/core"

const Account = () => {
  return (
    <>
      <AppBar>
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

export default Account