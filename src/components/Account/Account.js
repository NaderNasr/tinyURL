import React, { useState } from 'react'
import { Box, Button, Grid, Typography } from "@material-ui/core"
import NavBar from './NavBar'
import LinkItem from './LinkItem'

const data = [
  {
    id: '1a2b3c4d',
    createdAt: new Date(),
    name: 'Portfolio',
    longURL: 'www.nadernasr.ca',
    shortHash: '1d3AbC',
    numOfClicks: 7
  },
]

const Account = () => {

  const [links, setLinks] = useState(data);

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
              <Button variant='contained' color='primary'>Shorten Link</Button>
            </Box>
            {links.map(link =>
              <LinkItem
                key={link.id}
                //faster way to send all props to linkItem component
                {...link}
              />
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Account