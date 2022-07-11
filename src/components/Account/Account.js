import React from 'react'
import { Box, Button, Grid, Typography } from "@material-ui/core"
import NavBar from './NavBar'

const Account = () => {
  return (
    <>
      <NavBar />
      <Box mt={5}>
        <Grid container justifyContent='center'>
          <Grid item xs={8}>
            <Box display='flex'>
              <Box mr={3}>
              <Typography variant='h4'>
                Links
              </Typography>
              </Box>
              <Button variant='contained' color='primary'>Create New Link</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Account