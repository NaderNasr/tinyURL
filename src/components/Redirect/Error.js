import { Box, Button, Typography } from '@material-ui/core'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import './error.css'


const Error = ({ shortHash }) => {
  return (
    <>
      <Box ml={5} mt={5}>
        <Button href='/'>
          <KeyboardBackspaceIcon />
        </Button>
      </Box>
      <Box display='flex' justifyContent='center' >
        <h1 id='fourOfour'>404</h1>
      </Box>
      <Box display='flex' justifyContent='center' mt={-15} >
        <Typography>
          Failed: {window.location.host}/{shortHash} is not valid
        </Typography>
      </Box>
      <Box display='flex' justifyContent='center' mt={2}>
        <Button href='/' className='btn-grad'>
          Back to Home
        </Button>
      </Box>
    </>
  )
}

export default Error