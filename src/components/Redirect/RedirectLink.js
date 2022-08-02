import { Box, Typography } from "@material-ui/core";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import UseAnimations from "react-useanimations";
import { db } from "../../firebase";
import loading2 from 'react-useanimations/lib/loading2'
import Error from "./Error";



const RedirectLink = () => {
  const [document, setDocument] = useState([]);
  const [loading, setLoading] = useState(true);
  const { shortHash } = useParams()

  const collectionReference = collection(db, 'users');


  useEffect(() => {
    const getLink = async () => {
      const data = await getDocs(collectionReference);

      let users = [];
      data.docs.forEach((doc) => {
        if (doc.data()?.shortHash) {
          if (doc.data()?.shortHash === shortHash) {
            setLoading(true)
            users.push({ ...doc.data(), id: doc.id });
          }
          setLoading(false)
        }
      });
      setDocument(users);

    };
    getLink();
  }, [shortHash]);

  console.log('document', document)

  const link = async () => {
    if (await document?.length === 1) {
      setLoading(true)
      for (let property of document) {
        setTimeout(function () {
          window.location.href = property.longURL
        }, 2000);//wait 2 seconds
      }
    }
  }

  link()


  return (
    <>
      {
        loading ?
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            mt={10}>
            <UseAnimations animation={loading2} size={75} />
            <Typography>Redirecting...</Typography>
          </Box>
          :
          <Error shortHash={shortHash} />
      }
    </>
  )

}

export default RedirectLink