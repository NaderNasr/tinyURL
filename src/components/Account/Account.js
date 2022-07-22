import React, { Fragment, useEffect, useState } from 'react'
import { Box, Button, Divider, Grid, Typography } from "@material-ui/core"
import NavBar from './NavBar'
import LinkItem from './LinkItem'
import ShortenModal from './ShortenModal'
import { db, auth } from '../../firebase'
import { nanoid } from 'nanoid'
import { collection, addDoc, getDocs } from "firebase/firestore";


const Account = () => {

  const [links, setLinks] = useState({});
  const [newName, setName] = useState('');

  const [users, setUsers] = useState([]);

  const [openModal, setOpenModal] = useState(false)

  const collectionReference = collection(db, 'users');

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(collectionReference);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, [])

  const data = Date.now()
  console.log(new Date(Date.now()).toUTCString())


  const createShortLink = async (name, longURL) => {

    const userId = auth.currentUser.uid
    // setLinks([
    //   {
    //     name, longURL,
    //     createdAt: Date.now(),
    //     shortHash: nanoid(7),
    //     numOfClicks: 0,
    //     currentUser: userId
    //   }
    // ])
    await addDoc(collectionReference, {
      name: newName,
      longURL: links,
      createdAt: new Date(Date.now()).toUTCString(),
      shortHash: nanoid(7),
      numOfClicks: 0,
      currentUser: userId
    })

    // console.log(links)

    setOpenModal(false)

  }


  console.log('users', users)

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
            {users.map(link =>
              <Fragment key={link.id}>
                <LinkItem
                  //faster way to send all props to linkItem component
                  {...link}
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