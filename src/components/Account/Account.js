import React, { Fragment, useEffect, useState } from 'react'
import { Box, Button, Divider, Grid, Typography } from "@material-ui/core"
import NavBar from './NavBar'
import LinkItem from './LinkItem'
import ShortenModal from './ShortenModal'
import { db, auth } from '../../firebase'
import { nanoid } from 'nanoid'
import { collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore";


const Account = () => {

  const [links, setLinks] = useState({});
  const [newName, setName] = useState('');

  const [users, setUsers] = useState([]);

  const [openModal, setOpenModal] = useState(false)

  const collectionReference = collection(db, 'users');

  const getLinksFromUser = async () => {
    const data = await getDocs(collectionReference);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }

  useEffect(() => {
    getLinksFromUser()
  }, [])
  const userId = auth.currentUser.uid
  const date = new Date(Date.now()).toUTCString()
  const linkPath = {
    name: newName,
    longURL: links,
    createdAt: date,
    shortHash: nanoid(7),
    numOfClicks: 0,
    currentUser: userId
  }
  const createShortLink = async () => {

    await addDoc(collectionReference, linkPath)


    getLinksFromUser()
    setOpenModal(false)
    console.log('users', users)
  }

  const deleteLink = async linkDocID => {
    const docRef = doc(db, "users", linkDocID);
    // console.log(linkDocID)
    await deleteDoc(docRef);
  }


  return (
    <>
      <NavBar />
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
            {/* FIX SORTING BY DATE ------------------------------------------*/}
            {/* FIX SORTING BY DATE */}
            {/* FIX SORTING BY DATE */}
            {users.sort((prev, next) => prev.createdAt - next.createdAt).map(link =>
              <Fragment key={link.id}>
                <LinkItem
                  //faster way to send all props to linkItem component
                  {...link}
                  deleteLink={() => deleteLink(link.id)}
                />
                <Box my={5}>
                  <Divider />
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