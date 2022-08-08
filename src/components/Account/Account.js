import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'react'
import { Box, Button, Grid, Typography, Snackbar } from "@material-ui/core"
import Alert from '@mui/material/Alert'
import NavBar from './NavBar'
import LinkItem from './LinkItem'
import ShortenModal from './ShortenModal'
import { db, auth } from '../../firebase'
import { nanoid } from 'nanoid'
import { collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore";
import copy from 'copy-to-clipboard'


const Account = ({ user }) => {

  const [links, setLinks] = useState({});
  const [newName, setName] = useState('');

  const [users, setUsers] = useState([]);
  const [openModal, setOpenModal] = useState(false)

  const [copied, setCopied] = useState(false)

  const collectionReference = collection(db, 'users');

  const userId = auth.currentUser.uid
  const date = new Date(Date.now()).toLocaleString()
  const linkPath = {
    name: newName,
    longURL: `http://${links}`,
    createdAt: date,
    shortHash: nanoid(7),
    numOfClicks: 0,
    currentUser: userId
  }

  const getLinksFromUser = useMemo(() =>
    async () => {
      const data = await getDocs(collectionReference);
      if (userId === user.uid) {
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }
    }, [collectionReference])

  useEffect(() => {
    getLinksFromUser()
  }, [])
  const createShortLink = async () => {

    await addDoc(collectionReference, linkPath)

    getLinksFromUser()
    setOpenModal(false)
    console.log('users', users)
  }

  const deleteLink = useCallback(
    async linkDocID => {
      const docRef = doc(db, "users", linkDocID);
      await deleteDoc(docRef);

      getLinksFromUser()
    }, [getLinksFromUser])

  const handleCopyLink = useCallback(shortURL => {
    copy(shortURL)
    setCopied(true)
  }, [])

  return (
    <>
      <Snackbar open={copied} onClose={() => setCopied(false)} autoHideDuration={2000}>
        <Alert open={copied} onClose={() => setCopied(false)} variant="filled" severity="success">Copied!</Alert>
      </Snackbar>

      <NavBar users={users} />
      {openModal ? <ShortenModal
        createShortLink={createShortLink}
        openModal={openModal}
        setLinks={setLinks}
        setName={setName}
        handleClose={() => setOpenModal(false)} /> : <></>}
      <Box mt={5}>
        <Grid container justifyContent='center'>
          <Grid item xs={8}>
            <Box display='flex' mb={5}>
              <Box mr={3}>
                <Typography variant='h4'>
                  Links
                </Typography>
              </Box>
              <Button variant='contained' color='primary' onClick={() => setOpenModal(true)}>Shorten Link</Button>
            </Box>

            {users.sort((prev, next) => prev.createdAt - next.createdAt).map(link =>
              <Fragment key={link.id}>
                <LinkItem
                  {...link}
                  deleteLink={deleteLink}
                  handleCopyLink={handleCopyLink}
                  user={user}
                />
                <Box my={5}>
                </Box>
              </Fragment>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Account