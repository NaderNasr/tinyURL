import { Box, Typography } from "@material-ui/core";
import { collection, getDocs, increment, setDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import UseAnimations from "react-useanimations";
import { db } from "../../firebase";
import loading2 from 'react-useanimations/lib/loading2'
import Error from "./Error";



const RedirectLink = () => {
  const [document, setDocument] = useState([]);
  const [loading, setLoading] = useState(false);
  const { shortHash } = useParams()

  const collectionReference = collection(db, 'users');


  useEffect(() => {
    const getLink = async () => {
      const data = await getDocs(collectionReference);


      let users = [];
      data.docs.forEach((doc) => {
        if (doc.data().shortHash) {
          if (doc.data().shortHash === shortHash) {
            users.push({ ...doc.data(), id: doc.id });
          }
        } else {

          setLoading(false)
        }
      });
      setDocument(users);

    };
    getLink();
  }, [shortHash]);

  const link = async () => {
    if (document.length > 0) {
      return window.location.href = document[0].longURL
    }

  }

  link()


  return (
    <>
      {loading !== true ?

        <Error shortHash={shortHash} />
        :
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          mt={10}>
          <UseAnimations animation={loading2} size={75} />
          <Typography>Redirecting...</Typography>
        </Box>
      }
    </>
  )

}

export default RedirectLink