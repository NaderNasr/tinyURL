import { Dialog, DialogActions, DialogContent, DialogTitle, Box, Button, TextField, IconButton } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { useState } from 'react'



const ShortenModal = ({ handleClose }) => {

  const [form, setForm] = useState({
    name: '',
    longURL: ''
  });

  const handleChange = e => {
    setForm(oldForm => ({
      ...oldForm,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <Dialog open={true} fullWidth>
      <DialogTitle>
        <Box display='flex' alignItems='center' justifyContent='space-between'>
          New Shorten URL
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box mb={3}>
          <TextField value={form.name} name='name' onChange={handleChange} fullWidth variant='filled' label='Name' />
        </Box>
        <TextField value={form.longURL} name='longURL' onChange={handleChange} fullWidth variant='filled' label='Long URL' />
      </DialogContent>
      <DialogActions>
        <Box mr={2} my={1}>
          <Button onClick={() => console.log(form)} color='primary' variant='contained' disableElevation>Shorten URL</Button>
        </Box>
      </DialogActions>
    </Dialog>
  )
}

export default ShortenModal