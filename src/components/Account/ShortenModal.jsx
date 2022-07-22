import { Dialog, DialogActions, DialogContent, DialogTitle, Box, Button, TextField, IconButton } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { useState } from 'react'



const ShortenModal = ({ handleClose, createShortLink, setName, setLinks }) => {

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

  const handleSubmit = () => {
    createShortLink()
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
          <TextField value={setName(form.name)} name='name' onChange={handleChange} fullWidth variant='filled' label='Name' />
        </Box>
        <TextField value={setLinks(form.longURL)} name='longURL' onChange={handleChange} fullWidth variant='filled' label='Long URL' />
      </DialogContent>
      <DialogActions>
        <Box mr={2} my={1}>
          <Button onClick={handleSubmit} color='primary' variant='contained' disableElevation>Shorten URL</Button>
        </Box>
      </DialogActions>
    </Dialog>
  )
}

export default ShortenModal